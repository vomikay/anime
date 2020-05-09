import React from "react";
import Head from "next/head";
import App, { AppContext, AppInitialProps } from "next/app";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { IState } from "../redux/interfaces/IState";
import configureStore from "../redux/configureStore";
import theme from "../theme";
import { IAppContext } from "../interfaces/IAppContext";
import { AppContext as ReactAppContext } from "../context";

interface IProps extends ReduxWrapperAppProps<IState> {}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  private appContext: IAppContext = { isServer: typeof window === "undefined" };

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Anime</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ReactAppContext.Provider value={this.appContext}>
              <CssBaseline />
              <Component {...pageProps} />
            </ReactAppContext.Provider>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore)(MyApp);
