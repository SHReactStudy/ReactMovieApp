import { MovieGameInfo } from "../model/movie/MovieGameInfo";

export interface MovieRepository {
  getNextPopularMovies(
    page: number,
    baseIndex: number
  ): Promise<MovieGameInfo[]>;
}
