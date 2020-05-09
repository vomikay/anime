export interface IGenre {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface IAnimeBase {
  mal_id: number;
  title: string;
  image_url: string;
  rank: number;
  members: number;
  score: number;
}

export interface IAnime extends IAnimeBase {
  title_english: string;
  title_japanese: string;
  type: string;
  episodes: number;
  genres: IGenre[];
  duration: string;
  rating: string;
  synopsis: string;
  trailer_url: string;
  background?: string;
}
