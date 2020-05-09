import { IGenre } from "../interfaces/IAnime";

export const joinGenres = (genres: IGenre[], separator = ", "): string => {
  return genres.map((genre) => genre.name).join(separator);
};
