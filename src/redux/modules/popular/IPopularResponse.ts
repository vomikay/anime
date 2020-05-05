import { IResponse } from "../../interfaces/IResponse";
import { IAnime } from "../../../interfaces/IAnime";

export interface IPopularResponse extends IResponse {
  readonly top: IAnime[];
}
