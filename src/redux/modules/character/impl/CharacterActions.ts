import axios, { AxiosError } from "axios";
import {
  TLoadCharacterThunkActionCreator,
  TLoadCharacterActionCreator,
} from "../ICharacterActions";
import {
  LOAD_CHARACTER_REQUEST,
  LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTER_FAILURE,
} from "../ICharacterActionsTypes";
import { ILoadCharacterResponse } from "../ILoadCharacterResponse";
import { IResponseError } from "../../../interfaces/IResponseError";
import { ICharacter } from "../../../../interfaces/ICharacter";

export const loadCharacter: TLoadCharacterThunkActionCreator = (id: number) => {
  return async (dispatch) => {
    dispatch(loadCharacterRequest());

    await axios
      .get<ILoadCharacterResponse>(`${process.env.APIHOST}/character/${id}`)
      .then((res) => dispatch(loadCharacterSuccess(res.data)))
      .catch((err: AxiosError<IResponseError>) =>
        dispatch(loadCharacterFailure(err.response.data))
      );
  };
};

const loadCharacterRequest: TLoadCharacterActionCreator = () => ({
  type: LOAD_CHARACTER_REQUEST,
});

const loadCharacterSuccess: TLoadCharacterActionCreator = (character: ICharacter) => ({
  type: LOAD_CHARACTER_SUCCESS,
  payload: character,
});

const loadCharacterFailure: TLoadCharacterActionCreator = (error: IResponseError) => ({
  type: LOAD_CHARACTER_FAILURE,
  error: error,
});
