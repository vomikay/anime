import { IAnimeState } from "../modules/anime/IAnimeState";
import { ICharacterState } from "../modules/character/ICharacterState";
import { ISearchState } from "../modules/search/ISearchState";

export interface IState {
  anime: IAnimeState;
  character: ICharacterState;
  search: ISearchState;
}
