import { ISearchFilters } from "./ISearchFilters";
import { IReducerRequestKey } from "../../interfaces/IReducerRequestKey";
import { ISearchResult } from "./ISearchResult";

export interface ISearchState {
  readonly filters: ISearchFilters;
  readonly searchResult: IReducerRequestKey<ISearchResult>;
}
