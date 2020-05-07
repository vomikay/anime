import { IAnime } from "../../../interfaces/IAnime";
import { IReducerRequestKey } from "../../interfaces/IReducerRequestKey";

export interface IAnimeState {
  readonly popular: IReducerRequestKey<IAnime[]>;
}
