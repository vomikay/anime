import { ActionCreator } from "redux";
import { LoadPopularActionTypes } from "./IAnimeActionTypes";
import { IAnime } from "../../../interfaces/IAnime";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

export type TAnimeActions = ILoadPopularAction;

export type ILoadPopularAction = IAction<LoadPopularActionTypes, IAnime[]>;
export type TLoadPopularThunkAction = ThunkAction<void, IState, undefined, ILoadPopularAction>;
export type TLoadPopularActionCreator = ActionCreator<ILoadPopularAction>;
export type TLoadPopularThunkActionCreator = ActionCreator<TLoadPopularThunkAction>;
export type TLoadPopularActionFunc = () => void;
