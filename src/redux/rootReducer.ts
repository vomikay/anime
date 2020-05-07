import { combineReducers } from "redux";
import animeReducer from "./modules/anime/impl/AnimeReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
});

export default rootReducer;
