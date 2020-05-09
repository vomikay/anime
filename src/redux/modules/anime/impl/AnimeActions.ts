import axios, { AxiosError } from "axios";
import { IResponseError } from "../../../interfaces/IResponseError";
import { IAnimeBase, IAnime } from "../../../../interfaces/IAnime";
import {
  LOAD_POPULAR_REQUEST,
  LOAD_POPULAR_SUCCESS,
  LOAD_POPULAR_FAILURE,
  LOAD_ANIME_REQUEST,
  LOAD_ANIME_SUCCESS,
  LOAD_ANIME_FAILURE,
} from "../IAnimeActionTypes";
import {
  TLoadPopularThunkActionCreator,
  TLoadPopularActionCreator,
  TLoadAnimeThunkActionCreator,
  TLoadAnimeActionCreator,
} from "../IAnimeActions";
import { ILoadPopularResponse } from "../ILoadPopularResponse";
import { ILoadAnimeResponse } from "../ILoadAnimeResponse";

export const loadPopular: TLoadPopularThunkActionCreator = () => {
  return async (dispatch) => {
    dispatch(loadPopularRequest());

    await axios
      .get<ILoadPopularResponse>(`${process.env.APIHOST}/top/anime`)
      .then((res) => dispatch(loadPopularSuccess(res.data.top)))
      .catch((err: AxiosError<IResponseError>) => dispatch(loadPopularFailure(err.response.data)));
  };
};

const loadPopularRequest: TLoadPopularActionCreator = () => ({
  type: LOAD_POPULAR_REQUEST,
});

const loadPopularSuccess: TLoadPopularActionCreator = (anime: IAnimeBase[]) => ({
  type: LOAD_POPULAR_SUCCESS,
  payload: anime,
});

const loadPopularFailure: TLoadPopularActionCreator = (error: IResponseError) => ({
  type: LOAD_POPULAR_FAILURE,
  error: error,
});

export const loadAnime: TLoadAnimeThunkActionCreator = (id: number) => {
  return async (dispatch) => {
    dispatch(loadAnimeRequest());

    await axios
      .get<ILoadAnimeResponse>(`${process.env.APIHOST}/anime/${id}`)
      .then((res) => dispatch(loadAnimeSuccess(res.data)))
      .catch((err: AxiosError<IResponseError>) => dispatch(loadAnimeFailure(err.response.data)));
  };
};

const loadAnimeRequest: TLoadAnimeActionCreator = () => ({
  type: LOAD_ANIME_REQUEST,
});

const loadAnimeSuccess: TLoadAnimeActionCreator = (anime: IAnime) => ({
  type: LOAD_ANIME_SUCCESS,
  payload: anime,
});

const loadAnimeFailure: TLoadAnimeActionCreator = (error: IResponseError) => ({
  type: LOAD_ANIME_FAILURE,
  error: error,
});
