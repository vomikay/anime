import { IState } from "./IState";
import { Store } from "redux";
import { IAction } from "./IAction";
import { ThunkAction } from "redux-thunk";

export interface IStore extends Store<IState, IAction> {
  dispatch: <R = any>(action: IAction | ThunkAction<any, IState, any, IAction>) => R;
}
