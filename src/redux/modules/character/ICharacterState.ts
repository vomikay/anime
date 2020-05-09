import { ICharacter } from "../../../interfaces/ICharacter";
import { IReducerRequestKey } from "../../interfaces/IReducerRequestKey";

export interface ICharacterState {
  readonly currentCharacter: IReducerRequestKey<ICharacter>;
}
