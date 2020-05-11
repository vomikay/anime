import { ActionCreator } from "redux";
import { TLoadPopularActionTypes, TLoadAnimeActionTypes } from "./IAnimeActionTypes";
import { TAnimeListItem, IAnime } from "../../../interfaces/IAnime";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { TCharacterListItem } from "../../../interfaces/ICharacter";

export type TAnimeActions = TLoadPopularAction | TLoadAnimeAction;

export type TLoadPopularAction = IAction<TLoadPopularActionTypes, TAnimeListItem[]>;
export type TLoadPopularThunkAction = ThunkAction<
  Promise<void>,
  IState,
  undefined,
  TLoadPopularAction
>;
export type TLoadPopularActionCreator = ActionCreator<TLoadPopularAction>;
export type TLoadPopularThunkActionCreator = ActionCreator<TLoadPopularThunkAction>;

export type TLoadAnimeActionPayload = { anime: IAnime; characters: TCharacterListItem[] };
export type TLoadAnimeAction = IAction<TLoadAnimeActionTypes, TLoadAnimeActionPayload>;
export type TLoadAnimeThunkAction = ThunkAction<Promise<void>, IState, undefined, TLoadAnimeAction>;
export type TLoadAnimeActionCreator = ActionCreator<TLoadAnimeAction>;
export type TLoadAnimeThunkActionCreator = ActionCreator<TLoadAnimeThunkAction>;
