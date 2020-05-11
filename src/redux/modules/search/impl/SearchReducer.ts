import { ISearchState } from "../ISearchState";
import { SearchBy } from "../ISearchFilters";
import { Reducer } from "redux";
import { TSearchActions } from "../ISearchActions";
import { CHANGE_FILTERS } from "../ISearchActionTypes";
import { update, $set } from "qim";

const initialState: ISearchState = {
  filters: {
    phrase: "",
    searchBy: SearchBy.ANIME,
    page: 1,
  },
};

const searchReducer: Reducer<ISearchState, TSearchActions> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      return update(["filters", $set(action.payload)], state);
    }

    default:
      return state;
  }
};

export default searchReducer;
