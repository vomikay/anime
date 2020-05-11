import React from "react";
import Head from "next/head";
import CharacterContainer from "../../components/CharacterContainer/CharacterContainer";
import { INextPageContext } from "../../interfaces/INextPageContext";
import * as characterActions from "../../redux/modules/character/impl/CharacterActions";

interface IProps {
  title: string;
}

class Character extends React.Component<IProps> {
  static async getInitialProps({ store, query }: INextPageContext): Promise<IProps> {
    const { getState, dispatch } = store;
    try {
      await dispatch(characterActions.loadCharacter(query.id));
      return { title: getState().character.currentCharacter.data.name };
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
        <CharacterContainer />
      </>
    );
  }
}

export default Character;
