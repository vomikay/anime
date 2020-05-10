import { ActionCreator } from "redux";
import { LoadCharacterActionTypes } from "./ICharacterActionsTypes";
import { ICharacter } from "../../../interfaces/ICharacter";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

export type TCharacterActions = ILoadCharacterAction;

export type ILoadCharacterAction = IAction<LoadCharacterActionTypes, ICharacter>;
export type TLoadCharacterThunkAction = ThunkAction<
  Promise<void>,
  IState,
  undefined,
  ILoadCharacterAction
>;
export type TLoadCharacterActionCreator = ActionCreator<ILoadCharacterAction>;
export type TLoadCharacterThunkActionCreator = ActionCreator<TLoadCharacterThunkAction>;
