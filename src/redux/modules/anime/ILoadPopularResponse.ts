import { IResponse } from "../../interfaces/IResponse";
import { IAnimeBase } from "../../../interfaces/IAnime";

export interface ILoadPopularResponse extends IResponse {
  readonly top: IAnimeBase[];
}
