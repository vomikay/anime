import { Action } from "redux";
import { IResponseError } from "./IResponseError";

export interface IAction<Type, Payload> extends Action<Type> {
  payload?: Payload;
  error?: IResponseError;
}
