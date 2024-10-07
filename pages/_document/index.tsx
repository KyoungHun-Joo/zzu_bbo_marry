// #region Global Imports
import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
// #endregion Global Imports

class WebAppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    console.log("in documents");

    return (
      <Html>
        <Head>
          <meta property="og:title" content="주경훈/한보라 모바일 청접장" />
          <meta property="og:description" content="새로운 시작을 함께 해주세요!" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/zzu_bbo_marry/static/images/photo/weddingTopBanner.jpeg" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="쭈뽀" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
        <script src="/zzu_bbo_marry/static/js/script.js?v=12345" async />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" async />
      </Html>
    );
  }
}

export default WebAppDocument;
