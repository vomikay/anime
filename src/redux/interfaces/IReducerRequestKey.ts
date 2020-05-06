import { IResponseError } from "./IResponseError";

export interface IReducerRequestKey<Data> {
  data: Data;
  loading: boolean;
  error?: IResponseError;
}
