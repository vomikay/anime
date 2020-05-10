import { ISearchState } from "../ISearchState";
import { SearchBy } from "../ISearchFilters";
import { Reducer } from "redux";
import { TSearchActions } from "../ISearchActions";
import { CHANGE_FILTERS } from "../ISearchActionTypes";
import { update, $merge } from "qim";

const initialState: ISearchState = {
  filters: {
    phrase: "",
    searchBy: SearchBy.ANIME,
  },
};

const searchReducer: Reducer<ISearchState, TSearchActions> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      return update(["filters", $merge(action.payload)], state);
    }

    default:
      return state;
  }
};

export default searchReducer;
