import { combineReducers } from "redux";
import animeReducer from "./modules/anime/impl/AnimeReducer";
import characterReducer from "./modules/character/impl/CharacterReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  character: characterReducer,
});

export default rootReducer;
