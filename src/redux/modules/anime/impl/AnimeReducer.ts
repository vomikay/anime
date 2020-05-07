import { IAnimeState } from "../IAnimeState";
import { Reducer } from "redux";
import { TAnimeActions } from "../IAnimeActions";
import { LOAD_POPULAR_REQUEST, LOAD_POPULAR_SUCCESS, LOAD_POPULAR_FAILURE } from "../IAnimeActionTypes";
import { update, $set } from "qim";

const initialState: IAnimeState = {
  popular: {
    data: [],
    loading: false,
    error: null,
  },
};

const animeReducer: Reducer<IAnimeState, TAnimeActions> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POPULAR_REQUEST: {
      return update(["popular", "loading", $set(true)], state);
    }

    case LOAD_POPULAR_SUCCESS: {
      const data = action.payload.sort((a1, a2) => a1.rank - a2.rank);
      return update(["popular", ["data", $set(data)], ["loading", $set(false)], ["error", $set(null)]], state);
    }

    case LOAD_POPULAR_FAILURE: {
      return update(["popular", ["loading", $set(false)], ["error", $set(action.error)]], state);
    }

    default:
      return state;
  }
};

export default animeReducer;
