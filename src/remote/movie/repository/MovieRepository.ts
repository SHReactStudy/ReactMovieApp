import { MovieOrigin } from "../model/MovieResponse";
import Movie from "../../../Movie";
import { getMovieOrigin } from "./MovieDataSource";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function mapMovieResponseToMovie(movie: MovieOrigin, rank: number): Movie {
  return {
    rank: rank + 1,
    backdropImgUrl: IMAGE_BASE_URL + (movie.backdrop_path ?? ""),
    posterImgUrl: IMAGE_BASE_URL + (movie.poster_path ?? ""),
    originalName: movie.original_title,
    name: movie.title,
    releaseDate: movie.release_date,
  };
}

async function getMovie(page: number, baseIndex: number): Promise<Movie[]> {
  const result = await getMovieOrigin(page);
  if (result.isSuccessful)
    return result.value!.results.map((item, index) =>
      mapMovieResponseToMovie(item, baseIndex + index)
    );
  else return [];
}

export { getMovie };
