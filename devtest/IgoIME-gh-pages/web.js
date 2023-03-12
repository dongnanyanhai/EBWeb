var isWebWorker = typeof require === 'undefined';

var dicfiles = ['char.category', 'code2category', 'word2id', 'word.dat', 'word.ary.idx', 'word.inf', 'matrix.bin'];
var tagger;

function loadTagger(dicdir) {
    var files = new Array();
    for(var i=0;i<dicfiles.length;++i) {
	files[dicfiles[i]] = loadFile(dicdir, dicfiles[i]);
    }

    var category = new igo.CharCategory(files['code2category'], files['char.category']);
    var wdc = new igo.WordDic(files['word2id'], files['word.dat'], files['word.ary.idx'], files['word.inf']);
    var unk = new igo.Unknown(category);
    var mtx = new igo.Matrix(files['matrix.bin']);
    return new igo.Tagger(wdc, null, mtx);
}

function igo_request(data) {
    var method = data.method;
    var text = data.text;
    var best = data.best;

    if(method=='setdic') {
	tagger = loadTagger(data.dic);
	return {event: 'load'};
    } if(method=='parse') {
	return {
	    method: method,
	    event: "result",
	    text: text,
	    morpheme: tagger.parse(text)
	};
    } else if(method=='wakati') {
	return {
	    method: method,
	    event: "result",
	    text: text,
	    morpheme: tagger.wakati(text)
	};
    } else if(method=='parseNBest') {
	return {
	    method: method,
	    event: "result",
	    text: text,
	    morpheme: tagger.parseNBest(text, best)
	};
    } else if(method=='all') {
        var nodelist = tagger.parseImpl(text);
        var morpheme = [];
        for(var i=0;i<nodelist.length;++i) {
            if(typeof nodelist[i] === "undefined") continue;
            for(var j=0;j<nodelist[i].length;++j) {
                var vn = nodelist[i][j];
                if(vn.wordId==0) continue;
                morpheme.push(
                    {
                        surface: text.substring(vn.start, vn.start + vn.length),
                        feature: tagger.wdc.wordData(vn.wordId).join(''),
                        start: vn.start,
                        length: vn.length,
                        cost: vn.cost
                    }
                );
            }
        }
        return {
            method: method,
            event: "result",
            text: text,
            morpheme: morpheme
        }
    }

    return null;
}

if(isWebWorker) {
    // for WebWorker
    importScripts("lib/igo-javascript/igo.min.js", "lib/zip.min.js");
    var loadFile = function(dicdir, name) {
	return dicdir.files[name].inflate();
    };
    var onmessage_ = function(event) {
	var dataclass = function(){};
	dataclass.prototype = event.data;
	var data = new dataclass();

	if(data.dic) {
	    var reader = new FileReaderSync();
	    data.dic = Zip.inflate(
		new Uint8Array(reader.readAsArrayBuffer(data.dic))
	    );
	}

	var res = igo_request(data);
	if(res) {
	    postMessage(res);
	}
    };
    addEventListener("message", onmessage_);
} else {
    // for Node.js
    var express = require('express');
    var fs = require('fs');
    var igo = require('./lib/igo-javascript/build/igo.min');
    var app = express.createServer();

    var loadFile = function(dicdir, name) {
	return fs.readFileSync(dicdir + '/' + name);
    };
    igo_request({method: 'setdic', dic: './ipadic'});

    app.use(express.bodyParser());
    app.use(express.static(__dirname, { maxAge: 356*24*60*60*1000 }));

    app.get('/igo', function(req, res) {
		res.send(igo_request(req.query)||'var useNodeJS = true;');
	    });
    app.post('/igo', function(req, res) {
		 res.send(igo_request(req.body)||'var useNodeJS = true;');
	     });

    var port = process.env.PORT || 3000;
    app.listen(port);
}
