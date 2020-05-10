import { IResponse } from "../../interfaces/IResponse";
import { TPopularAnimeListItem } from "../../../interfaces/IAnime";

export interface ILoadPopularResponse extends IResponse {
  readonly top: TPopularAnimeListItem[];
}
