import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
