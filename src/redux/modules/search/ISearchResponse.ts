import { TSearchItem } from "./ISearchItem";

export interface ISearchResponse {
  results: TSearchItem[];
  last_page: number;
}
