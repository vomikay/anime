export interface IGenre {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface IAnime extends TPopularAnimeListItem {
  mal_id: number;
  title: string;
  image_url: string;
  rank: number;
  members: number;
  score: number;
  title_english: string;
  title_japanese: string;
  type: string;
  episodes: number;
  genres: IGenre[];
  duration: string;
  rating: string;
  synopsis: string;
  trailer_url: string;
  url: string;
  background?: string;
}

export type TPopularAnimeListItem = Pick<IAnime, "mal_id" | "title" | "image_url" | "rank" | "members">;
