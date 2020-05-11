import { ISearchState } from "../ISearchState";
import { SearchBy } from "../ISearchFilters";
import { Reducer } from "redux";
import { TSearchActions } from "../ISearchActions";
import {
  CHANGE_FILTERS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../ISearchActionTypes";
import { update, $set } from "qim";

const initialState: ISearchState = {
  filters: {
    phrase: "",
    searchBy: SearchBy.ANIME,
  },
  searchResult: {
    data: {
      results: [],
      pageCount: 1,
    },
    loading: false,
    error: null,
  },
};

const searchReducer: Reducer<ISearchState, TSearchActions> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      return update(["filters", $set(action.payload)], state);
    }

    case SEARCH_REQUEST: {
      return update(["searchResult", "loading", $set(true)], state);
    }

    case SEARCH_SUCCESS: {
      return update(
        [
          "searchResult",
          ["data", $set(action.payload)],
          ["loading", $set(false)],
          ["error", $set(null)],
        ],
        state
      );
    }

    case SEARCH_FAILURE: {
      return update(
        ["searchResult", ["loading", $set(false)], ["error", $set(action.error)]],
        state
      );
    }

    default:
      return state;
  }
};

export default searchReducer;
