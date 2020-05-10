import { TPopularAnimeListItem, IAnime } from "../../../interfaces/IAnime";
import { IReducerRequestKey } from "../../interfaces/IReducerRequestKey";

export interface IAnimeState {
  readonly popular: IReducerRequestKey<TPopularAnimeListItem[]>;
  readonly currentAnime: IReducerRequestKey<IAnime>;
}
