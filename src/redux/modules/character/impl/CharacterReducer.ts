import { Reducer } from "redux";
import { ICharacterState } from "../ICharacterState";
import { TCharacterActions } from "../ICharacterActions";
import { LOAD_CHARACTER_REQUEST, LOAD_CHARACTER_SUCCESS, LOAD_CHARACTER_FAILURE } from "../ICharacterActionsTypes";
import { update, $set } from "qim";

const initialState: ICharacterState = {
  currentCharacter: {
    data: null,
    loading: false,
    error: null,
  },
};

const characterReducer: Reducer<ICharacterState, TCharacterActions> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTER_REQUEST: {
      return update(["currentCharacter", "loading", $set(true)], state);
    }

    case LOAD_CHARACTER_SUCCESS: {
      return update(["currentCharacter", ["data", $set(action.payload)], ["loading", $set(false)], ["error", $set(null)]], state);
    }

    case LOAD_CHARACTER_FAILURE: {
      return update(["currentCharacter", ["loading", $set(false)], ["error", $set(action.error)]], state);
    }

    default:
      return state;
  }
};

export default characterReducer;
