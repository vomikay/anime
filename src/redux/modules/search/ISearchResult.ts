import { TSearchItem } from "./ISearchItem";

export interface ISearchResult {
  results: TSearchItem[];
  pageCount: number;
}
