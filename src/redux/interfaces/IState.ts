import { IAnimeState } from "../modules/anime/IAnimeState";
import { ICharacterState } from "../modules/character/ICharacterState";

export interface IState {
  anime: IAnimeState;
  character: ICharacterState;
}
