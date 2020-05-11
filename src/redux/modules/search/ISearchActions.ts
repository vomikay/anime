import { IAction } from "../../interfaces/IAction";
import { TChangeSearchFiltersActionType } from "./ISearchActionTypes";
import { ISearchFilters } from "./ISearchFilters";
import { ActionCreator } from "redux";

export type TSearchActions = TChangeSearchFiltersAction;

export type TChangeSearchFiltersAction = IAction<
  TChangeSearchFiltersActionType,
  Partial<ISearchFilters>
>;
export type TChangeSearchFiltersActionCreator = ActionCreator<TChangeSearchFiltersAction>;
