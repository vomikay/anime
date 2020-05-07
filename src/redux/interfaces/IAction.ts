import { Action } from "redux";
import { IResponseError } from "./IResponseError";

export interface IAction<Type = any, Payload = any> extends Action<Type> {
  payload?: Payload;
  error?: IResponseError;
}
