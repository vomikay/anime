import React from "react";
import Head from "next/head";
import AnimeContainer from "../../components/AnimeContainer/AnimeContainer";
import { INextPageContext } from "../../interfaces/INextPageContext";
import * as animeActions from "../../redux/modules/anime/impl/AnimeActions";

interface IProps {
  title: string;
}

class Anime extends React.Component<IProps> {
  static async getInitialProps({ store, query }: INextPageContext): Promise<IProps> {
    const { getState, dispatch } = store;
    try {
      await dispatch(animeActions.loadAnime(query.id));
      return { title: getState().anime.currentAnime.data.title };
    } catch (e) {
      console.error(e);
    }
  }

  render(): JSX.Element {
    const { title } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <AnimeContainer />
      </>
    );
  }
}

export default Anime;
