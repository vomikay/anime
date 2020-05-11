export const LOAD_POPULAR_REQUEST = "anime/LOAD_POPULAR_REQUEST";
export const LOAD_POPULAR_SUCCESS = "anime/LOAD_POPULAR_SUCCESS";
export const LOAD_POPULAR_FAILURE = "anime/LOAD_POPULAR_FAILURE";

export type TLoadPopularActionTypes =
  | typeof LOAD_POPULAR_REQUEST
  | typeof LOAD_POPULAR_SUCCESS
  | typeof LOAD_POPULAR_FAILURE;

export const LOAD_ANIME_REQUEST = "anime/LOAD_ANIME_REQUEST";
export const LOAD_ANIME_SUCCESS = "anime/LOAD_ANIME_SUCCESS";
export const LOAD_ANIME_FAILURE = "anime/LOAD_ANIME_FAILURE";

export type TLoadAnimeActionTypes =
  | typeof LOAD_ANIME_REQUEST
  | typeof LOAD_ANIME_SUCCESS
  | typeof LOAD_ANIME_FAILURE;
