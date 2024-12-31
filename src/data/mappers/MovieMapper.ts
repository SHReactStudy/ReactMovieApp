import { MovieEntity } from "../entities/MovieEntity";
import { MovieGameInfo } from "../../domain/model/movie/MovieGameInfo";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function mapMovieResponseToMovie(
  movie: MovieEntity,
  rank: number
): MovieGameInfo {
  return {
    rank: rank + 1,
    backdropImgUrl: IMAGE_BASE_URL + (movie.backdrop_path ?? ""),
    posterImgUrl: IMAGE_BASE_URL + (movie.poster_path ?? ""),
    originalName: movie.original_title,
    name: movie.title,
    releaseDate: movie.release_date,
  };
}

export { mapMovieResponseToMovie };
