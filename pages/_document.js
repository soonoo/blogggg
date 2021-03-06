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
          <link rel="stylesheet" href="//cdn.quilljs.com/1.3.4/quill.snow.css" />
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
              min-width: 330px;
              font-family: Nanum; 
            }
            .ql-container {
              border: none !important;
              max-width: 72em;
            }
            .ql-editor p {
              font-size: 18px;
            }
            pre {
              overflow-x: auto !important;
              word-wrap: normal !important;
              white-space: pre !important
            }
            .fixed {
              position: fixed;
              top: 3px;
              width:inherit;
              max-width:inherit;
            }
            .quill {
              width: 100%;
              max-width: 82em;
            }
            .ql-toolbar {
              background: white;
              z-index: 99;
            }
            .ql-editor pre {
              font-family: Monaco, Ubuntu Mono, Consolas, monospace;
              font-size: 16px;
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
