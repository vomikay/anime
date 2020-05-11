import {
  TChangeSearchFiltersActionCreator,
  TSearchThunkActionCreator,
  TSearchActionCreator,
} from "../ISearchActions";
import { ISearchFilters, SearchBy } from "../ISearchFilters";
import {
  CHANGE_FILTERS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../ISearchActionTypes";
import { ISearchResponse } from "../ISearchResponse";
import axios, { AxiosError } from "axios";
import { IResponseError } from "../../../interfaces/IResponseError";
import { ISearchResult } from "../ISearchResult";

export const changeFilters: TChangeSearchFiltersActionCreator = (filters: ISearchFilters) => ({
  type: CHANGE_FILTERS,
  payload: filters,
});

export const search: TSearchThunkActionCreator = (phrase: string, searchBy = SearchBy.ANIME) => {
  const params = { q: phrase };
  return async (dispatch) => {
    dispatch(changeFilters({ phrase, searchBy }));
    dispatch(searchRequest());

    await axios
      .get<ISearchResponse>(`${process.env.APIHOST}/search/${searchBy}`, { params })
      .then((res) => {
        const { results, last_page: pageCount } = res.data;
        dispatch(searchSuccess({ results, pageCount }));
      })
      .catch((err: AxiosError<IResponseError>) => dispatch(searchFailure(err.response.data)));
  };
};

const searchRequest: TSearchActionCreator = () => ({
  type: SEARCH_REQUEST,
});

const searchSuccess: TSearchActionCreator = (searchResult: ISearchResult) => ({
  type: SEARCH_SUCCESS,
  payload: searchResult,
});

const searchFailure: TSearchActionCreator = (error: IResponseError) => ({
  type: SEARCH_FAILURE,
  error: error,
});
