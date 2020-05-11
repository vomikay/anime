import { IAction } from "../../interfaces/IAction";
import { TChangeSearchFiltersActionType, TSearchActionTypes } from "./ISearchActionTypes";
import { ISearchFilters } from "./ISearchFilters";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IState } from "../../interfaces/IState";
import { ISearchResult } from "./ISearchResult";

export type TSearchActions = TChangeSearchFiltersAction | TSearchAction;

export type TChangeSearchFiltersAction = IAction<TChangeSearchFiltersActionType, ISearchFilters>;
export type TChangeSearchFiltersActionCreator = ActionCreator<TChangeSearchFiltersAction>;

export type TSearchAction = IAction<TSearchActionTypes, ISearchResult>;
export type TSearchThunkAction = ThunkAction<
  Promise<void>,
  IState,
  undefined,
  TSearchAction | TChangeSearchFiltersAction
>;
export type TSearchActionCreator = ActionCreator<TSearchAction>;
export type TSearchThunkActionCreator = ActionCreator<TSearchThunkAction>;
