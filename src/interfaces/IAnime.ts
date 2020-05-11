import { TCharacterListItem } from "./ICharacter";

export interface IGenre {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface IAnime extends TAnimeListItem {
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
  url: string;
  trailer_url?: string;
  background?: string;
  characters?: TCharacterListItem[];
}

export type TAnimeListItem = Pick<IAnime, "mal_id" | "title" | "image_url" | "rank" | "members">;
