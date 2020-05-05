import { combineReducers } from "redux";
import popularReducer from "./modules/popular/impl/PopularReducer";

const rootReducer = combineReducers({
  popular: popularReducer,
});

export default rootReducer;
