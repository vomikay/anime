import React from "react";
import Head from "next/head";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import { INextPageContext } from "../interfaces/INextPageContext";
import * as animeActions from "../redux/modules/anime/impl/AnimeActions";

class Home extends React.Component {
  static async getInitialProps({ store }: INextPageContext): Promise<void> {
    const { dispatch } = store;
    try {
      await dispatch(animeActions.loadPopular());
    } catch (e) {
      console.error(e);
    }
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <HomeContainer />
      </>
    );
  }
}

export default Home;
