import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <title>Gamedalf</title>
        <Head>
          <meta
            name="description"
            content="Elevate your board gaming experience with Gamedalf! Whether you’re a collector or casual player, choose from curated recommendations or click the dice icon for instant fun. Game creators can log in to add, edit, or delete games, while everyone can easily bookmark favorites. Share your gaming adventures with us!"
          />
          <link rel="shortcut icon" href="./images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
