import { ActionCreator } from "redux";
import { LoadPopularActionTypes, LoadAnimeActionTypes } from "./IAnimeActionTypes";
import { IAnimeBase, IAnime } from "../../../interfaces/IAnime";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

export type TAnimeActions = ILoadPopularAction | ILoadAnimeAction;

export type ILoadPopularAction = IAction<LoadPopularActionTypes, IAnimeBase[]>;
export type TLoadPopularThunkAction = ThunkAction<Promise<void>, IState, undefined, ILoadPopularAction>;
export type TLoadPopularActionCreator = ActionCreator<ILoadPopularAction>;
export type TLoadPopularThunkActionCreator = ActionCreator<TLoadPopularThunkAction>;

export type ILoadAnimeAction = IAction<LoadAnimeActionTypes, IAnime>;
export type TLoadAnimeThunkAction = ThunkAction<Promise<void>, IState, undefined, ILoadAnimeAction>;
export type TLoadAnimeActionCreator = ActionCreator<ILoadAnimeAction>;
export type TLoadAnimeThunkActionCreator = ActionCreator<TLoadAnimeThunkAction>;
