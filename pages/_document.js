import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        {
            // eslint-disable-next-line @next/next/no-page-custom-font
        }
        <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Slab&display=swap"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}