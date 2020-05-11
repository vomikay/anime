export const CHANGE_FILTERS = "search/CHANGE_FILTERS";
export type TChangeSearchFiltersActionType = typeof CHANGE_FILTERS;

export const SEARCH_REQUEST = "search/SEARCH_REQUEST";
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS";
export const SEARCH_FAILURE = "search/SEARCH_FAILURE";

export type TSearchActionTypes =
  | typeof SEARCH_REQUEST
  | typeof SEARCH_SUCCESS
  | typeof SEARCH_FAILURE;
