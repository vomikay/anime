import { combineReducers } from "redux";
import animeReducer from "./modules/anime/impl/AnimeReducer";
import characterReducer from "./modules/character/impl/CharacterReducer";
import searchReducer from "./modules/search/impl/SearchReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  character: characterReducer,
  search: searchReducer,
});

export default rootReducer;
