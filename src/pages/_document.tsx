import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../theme";

class MyDocument extends Document {
  static async getInitialProps(documentContext: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = documentContext.renderPage;

    documentContext.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(documentContext);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
