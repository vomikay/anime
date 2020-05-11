import React from "react";
import Head from "next/head";
import { INextPageContext } from "../interfaces/INextPageContext";
import { SearchBy } from "../redux/modules/search/ISearchFilters";
import * as searchActions from "../redux/modules/search/impl/SearchActions";
import SearchContainer from "../components/SearchContainer/SearchContainer";

class Search extends React.Component {
  static async getInitialProps({ store, query }: INextPageContext): Promise<void> {
    const { getState, dispatch } = store;
    const state = getState();

    const {
      search: { filters },
    } = state;

    const phrase = (query.phrase as string) || filters.phrase || "";
    const searchBy = SearchBy[query.searchBy as string] || filters.phrase || SearchBy.ANIME;
    const page = +query.page || filters.page || 1;

    dispatch(searchActions.changeFilters({ phrase, searchBy, page }));
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Search</title>
        </Head>
        <SearchContainer />
      </>
    );
  }
}

export default Search;
