import { ActionCreator } from "redux";
import { LoadPopularActionTypes, LoadAnimeActionTypes } from "./IAnimeActionTypes";
import { TPopularAnimeListItem, IAnime } from "../../../interfaces/IAnime";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { TAnimeCharacterListItem } from "../../../interfaces/ICharacter";

export type TAnimeActions = TLoadPopularAction | ILoadAnimeAction;

export type TLoadPopularAction = IAction<LoadPopularActionTypes, TPopularAnimeListItem[]>;
export type TLoadPopularThunkAction = ThunkAction<Promise<void>, IState, undefined, TLoadPopularAction>;
export type TLoadPopularActionCreator = ActionCreator<TLoadPopularAction>;
export type TLoadPopularThunkActionCreator = ActionCreator<TLoadPopularThunkAction>;

export type TLoadAnimeActionPayload = { anime: IAnime; characters: TAnimeCharacterListItem[] };
export type ILoadAnimeAction = IAction<LoadAnimeActionTypes, TLoadAnimeActionPayload>;
export type TLoadAnimeThunkAction = ThunkAction<Promise<void>, IState, undefined, ILoadAnimeAction>;
export type TLoadAnimeActionCreator = ActionCreator<ILoadAnimeAction>;
export type TLoadAnimeThunkActionCreator = ActionCreator<TLoadAnimeThunkAction>;
