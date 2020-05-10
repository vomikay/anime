import { IAnimeState } from "../IAnimeState";
import { Reducer } from "redux";
import { TAnimeActions } from "../IAnimeActions";
import {
  LOAD_POPULAR_REQUEST,
  LOAD_POPULAR_SUCCESS,
  LOAD_POPULAR_FAILURE,
  LOAD_ANIME_REQUEST,
  LOAD_ANIME_SUCCESS,
  LOAD_ANIME_FAILURE,
} from "../IAnimeActionTypes";
import { update, $set } from "qim";
import { IAnime } from "../../../../interfaces/IAnime";

const initialState: IAnimeState = {
  popular: {
    data: [],
    loading: false,
    error: null,
  },
  currentAnime: {
    data: null,
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

    case LOAD_ANIME_REQUEST: {
      return update(["currentAnime", "loading", $set(true)], state);
    }

    case LOAD_ANIME_SUCCESS: {
      const anime: IAnime = { ...action.payload.anime, characters: action.payload.characters };
      return update(["currentAnime", ["data", $set(anime)], ["loading", $set(false)], ["error", $set(null)]], state);
    }

    case LOAD_ANIME_FAILURE: {
      return update(["currentAnime", ["loading", $set(false)], ["error", $set(action.error)]], state);
    }

    default:
      return state;
  }
};

export default animeReducer;
