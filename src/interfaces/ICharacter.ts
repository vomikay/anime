interface VoiceActor {
  mal_id: number;
  name: string;
  image_url: string;
  language: string;
}

export interface ICharacter {
  mal_id: number;
  name: string;
  name_kanji: string;
  image_url: string;
  about: string;
  member_favorites: number;
  url: string;
  voice_actors: VoiceActor[];
}

export type TAnimeCharacterListItem = Pick<ICharacter, "mal_id" | "name" | "image_url"> & {
  role: string;
};
