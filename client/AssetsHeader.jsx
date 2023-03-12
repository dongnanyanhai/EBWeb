import React from "react";

// https://github.com/jantimon/favicons-webpack-plugin

export default function AssetsHeader({ assets, manifest }) {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={assets["assets/apple-touch-icon-57x57.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={assets["assets/apple-touch-icon-60x60.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={assets["assets/apple-touch-icon-72x72.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={assets["assets/apple-touch-icon-76x76.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={assets["assets/apple-touch-icon-114x114.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={assets["assets/apple-touch-icon-120x120.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={assets["assets/apple-touch-icon-144x144.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={assets["assets/apple-touch-icon-152x152.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href={assets["assets/apple-touch-icon-167x167.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={assets["assets/apple-touch-icon-180x180.png"]}
      />
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href={assets["assets/apple-touch-icon-1024x1024.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-640x1136.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-750x1334.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-828x1792.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1125x2436.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1242x2208.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1242x2688.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1536x2048.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1668x2224.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1668x2388.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-2048x2732.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href={assets["assets/apple-touch-startup-image-1620x2160.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-1136x640.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-1334x750.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-1792x828.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2436x1125.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2208x1242.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2688x1242.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2048x1536.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2224x1668.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2388x1668.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2732x2048.png"]}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href={assets["assets/apple-touch-startup-image-2160x1620.png"]}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={assets["assets/favicon-16x16.png"]}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={assets["assets/favicon-32x32.png"]}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="228x228"
        href={assets["assets/coast-228x228.png"]}
      />
      <link rel="manifest" href={assets["assets/manifest.json"]} />
      <link rel="shortcut icon" href={assets["assets/favicon.ico"]} />
      <link
        rel="yandex-tableau-widget"
        href={assets["assets/yandex-browser-manifest.json"]}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" />
      <meta name="application-name" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content={manifest.theme_color} />
      <meta
        name="msapplication-TileImage"
        content={assets["assets/mstile-144x144.png"]}
      />
      <meta
        name="msapplication-config"
        content={assets["assets/browserconfig.xml"]}
      />
      <meta name="theme-color" content={manifest.theme_color} />

      <meta
        name="viewport"
        content="initial-scale=1,user-scalable=yes,maximum-scale=2,width=device-width"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content={assets["assets/mstile-310x310.png"]} />
    </>
  );
}