import axios, { AxiosError } from "axios";
import { IResponseError } from "../../../interfaces/IResponseError";
import { TPopularAnimeListItem, IAnime } from "../../../../interfaces/IAnime";
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
  TLoadAnimeActionPayload,
} from "../IAnimeActions";
import { ILoadPopularResponse } from "../ILoadPopularResponse";
import { ILoadAnimeResponse } from "../ILoadAnimeResponse";
import { ILoadAnimeCharactersResponse } from "../ILoadAnimeCharactersResponse";

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

const loadPopularSuccess: TLoadPopularActionCreator = (anime: TPopularAnimeListItem[]) => ({
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

    await Promise.all([
      axios.get<ILoadAnimeResponse>(`${process.env.APIHOST}/anime/${id}`),
      axios.get<ILoadAnimeCharactersResponse>(`${process.env.APIHOST}/anime/${id}/characters_staff`),
    ])
      .then(([animeResponse, charactersResponse]) => {
        dispatch(
          loadAnimeSuccess({
            anime: animeResponse.data,
            characters: charactersResponse.data.characters,
          })
        );
      })
      .catch((err: AxiosError<IResponseError[]>) => dispatch(loadAnimeFailure(err.response.data)));
  };
};

const loadAnimeRequest: TLoadAnimeActionCreator = () => ({
  type: LOAD_ANIME_REQUEST,
});

const loadAnimeSuccess: TLoadAnimeActionCreator = (payload: TLoadAnimeActionPayload) => ({
  type: LOAD_ANIME_SUCCESS,
  payload,
});

const loadAnimeFailure: TLoadAnimeActionCreator = (error: IResponseError) => ({
  type: LOAD_ANIME_FAILURE,
  error: error,
});
