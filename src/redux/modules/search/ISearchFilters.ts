export enum SearchBy {
  ANIME = "anime",
  CHARACTER = "character",
}

export interface ISearchFilters {
  phrase: string;
  searchBy: SearchBy;
  page: number;
}
