import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { AppInitialProps } from "next/dist/next-server/lib/utils";

interface IProps {
  Component: React.ComponentType<AppInitialProps>;
  pageProps: AppInitialProps;
}

const App: React.FC<IProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
