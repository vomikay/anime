import { combineReducers } from "redux";
import animeReducer from "./modules/popular/impl/AnimeReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
});

export default rootReducer;
