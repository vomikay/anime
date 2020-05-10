import { IAction } from "../../interfaces/IAction";
import { ChangeSearchFiltersActionType } from "./ISearchActionTypes";
import { ISearchFilters } from "./ISearchFilters";
import { ActionCreator } from "redux";

export type TSearchActions = TChangeSearchFiltersAction;

export type TChangeSearchFiltersAction = IAction<
  ChangeSearchFiltersActionType,
  Partial<ISearchFilters>
>;
export type TChangeSearchFiltersActionCreator = ActionCreator<TChangeSearchFiltersAction>;
