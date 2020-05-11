import { ActionCreator } from "redux";
import { TLoadCharacterActionTypes } from "./ICharacterActionsTypes";
import { ICharacter } from "../../../interfaces/ICharacter";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

export type TCharacterActions = TLoadCharacterAction;

export type TLoadCharacterAction = IAction<TLoadCharacterActionTypes, ICharacter>;
export type TLoadCharacterThunkAction = ThunkAction<
  Promise<void>,
  IState,
  undefined,
  TLoadCharacterAction
>;
export type TLoadCharacterActionCreator = ActionCreator<TLoadCharacterAction>;
export type TLoadCharacterThunkActionCreator = ActionCreator<TLoadCharacterThunkAction>;
