import { IPopularState } from "../IPopularState";
import { Reducer } from "redux";
import { TPopularActions } from "../IPopularActions";
import { LOAD_POPULAR_REQUEST, LOAD_POPULAR_SUCCESS, LOAD_POPULAR_FAILURE } from "../IPopularActionTypes";

const initialState: IPopularState = {
  data: [],
  loading: false,
  error: null,
};

const popularReducer: Reducer<IPopularState, TPopularActions> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POPULAR_REQUEST: {
      return { ...state, loading: true };
    }

    case LOAD_POPULAR_SUCCESS: {
      return { ...state, loading: false, error: null, data: action.payload };
    }

    case LOAD_POPULAR_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    default:
      return state;
  }
};

export default popularReducer;
