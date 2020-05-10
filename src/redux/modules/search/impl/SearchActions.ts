import { TChangeSearchFiltersActionCreator } from "../ISearchActions";
import { ISearchFilters } from "../ISearchFilters";
import { CHANGE_FILTERS } from "../ISearchActionTypes";

export const changeFilters: TChangeSearchFiltersActionCreator = (
  filters: Partial<ISearchFilters>
) => ({
  type: CHANGE_FILTERS,
  payload: filters,
});
