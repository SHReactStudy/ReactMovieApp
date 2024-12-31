import { MovieResponse } from "../entities/MovieEntity";
import DataResult from "../DataResult";

export interface MovieDataSource {
  getMovieResponseOrderedByPopular(
    pageId: number
  ): Promise<DataResult<MovieResponse>>;
}
