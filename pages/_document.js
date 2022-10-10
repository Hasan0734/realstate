/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/logo.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* font-awesome cdn */}

          {/* <link
          rel="stylesheet"
          media="screen"
          href="/vendor/simplebar/dist/simplebar.min.css"
          /> */}
          <link
            rel="stylesheet"
            media="screen"
            href="/vendor/tiny-slider/dist/tiny-slider.css"
          />
      
      <link rel="stylesheet" href="/css/theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
