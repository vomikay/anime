import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import { IState } from "./interfaces/IState";
import { MakeStoreOptions } from "next-redux-wrapper";

const configureStore = (initialState: IState, { isServer }: MakeStoreOptions) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  if (isServer) {
    return createStore(rootReducer, initialState, middlewareEnhancer);
  }

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return store;
};

export default configureStore;
