interface VoiceActor {
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
