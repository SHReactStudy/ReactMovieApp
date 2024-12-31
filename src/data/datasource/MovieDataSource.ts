import { MovieResponse } from "../entities/MovieEntity";
import DataResult from "../DataResult";

export interface MovieDataSource {
  getMovieResponseOrderByPopularity(
    pageId: number
  ): Promise<DataResult<MovieResponse>>;
}
