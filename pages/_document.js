import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/agate.min.css" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
          <link rel='icon' href='/static/rocket.png' />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <style>{`
            @font-face {
              font-family: Nanum;
              src: url(/static/NanumBarunGothicWeb.woff);
            }
            body {
              margin: 0;
              font-family: Nanum; 
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}