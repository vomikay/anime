import { ActionCreator } from "redux";
import { TLoadPopularActionTypes, TLoadAnimeActionTypes } from "./IAnimeActionTypes";
import { TPopularAnimeListItem, IAnime } from "../../../interfaces/IAnime";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { TAnimeCharacterListItem } from "../../../interfaces/ICharacter";

export type TAnimeActions = TLoadPopularAction | TLoadAnimeAction;

export type TLoadPopularAction = IAction<TLoadPopularActionTypes, TPopularAnimeListItem[]>;
export type TLoadPopularThunkAction = ThunkAction<
  Promise<void>,
  IState,
  undefined,
  TLoadPopularAction
>;
export type TLoadPopularActionCreator = ActionCreator<TLoadPopularAction>;
export type TLoadPopularThunkActionCreator = ActionCreator<TLoadPopularThunkAction>;

export type TLoadAnimeActionPayload = { anime: IAnime; characters: TAnimeCharacterListItem[] };
export type TLoadAnimeAction = IAction<TLoadAnimeActionTypes, TLoadAnimeActionPayload>;
export type TLoadAnimeThunkAction = ThunkAction<Promise<void>, IState, undefined, TLoadAnimeAction>;
export type TLoadAnimeActionCreator = ActionCreator<TLoadAnimeAction>;
export type TLoadAnimeThunkActionCreator = ActionCreator<TLoadAnimeThunkAction>;
