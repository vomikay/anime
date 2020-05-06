import axios, { AxiosError } from "axios";
import { IResponseError } from "../../../interfaces/IResponseError";
import { IAnime } from "../../../../interfaces/IAnime";
import { LOAD_POPULAR_REQUEST, LOAD_POPULAR_SUCCESS, LOAD_POPULAR_FAILURE } from "../IAnimeActionTypes";
import { TLoadPopularThunkActionCreator, TLoadPopularActionCreator } from "../IAnimeActions";
import { ILoadPopularResponse } from "../ILoadPopularResponse";

export const loadPopular: TLoadPopularThunkActionCreator = () => {
  return (dispatch) => {
    dispatch(loadPopularRequest());

    axios
      .get<ILoadPopularResponse>("https://api.jikan.moe/v3/top/anime")
      .then((res) => dispatch(loadPopularSuccess(res.data.top)))
      .catch((err: AxiosError) => dispatch(loadPopularFailure(err.response.data)));
  };
};

const loadPopularRequest: TLoadPopularActionCreator = () => ({
  type: LOAD_POPULAR_REQUEST,
});

const loadPopularSuccess: TLoadPopularActionCreator = (anime: IAnime[]) => ({
  type: LOAD_POPULAR_SUCCESS,
  payload: anime,
});

const loadPopularFailure: TLoadPopularActionCreator = (error: IResponseError) => ({
  type: LOAD_POPULAR_FAILURE,
  error: error,
});
