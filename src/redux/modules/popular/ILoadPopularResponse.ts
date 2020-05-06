import { IResponse } from "../../interfaces/IResponse";
import { IAnime } from "../../../interfaces/IAnime";

export interface ILoadPopularResponse extends IResponse {
  readonly top: IAnime[];
}
