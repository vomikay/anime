import { IAnime } from "../../../interfaces/IAnime";
import { IResponseError } from "../../interfaces/IResponseError";

export interface IPopularState {
  readonly data: IAnime[];
  readonly loading: boolean;
  readonly error?: IResponseError;
}
