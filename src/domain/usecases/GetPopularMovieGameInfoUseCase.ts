import type { MovieRepository } from "../repository/MovieRepository";
import { MovieGameInfo } from "../model/movie/MovieGameInfo";

export class GetPopularMovieGameInfoUseCase {
  private movieRepository: MovieRepository;

  public constructor(movieRepository: MovieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(page: number, baseIndex: number): Promise<MovieGameInfo[]> {
    return this.movieRepository.getNextPopularMovies(page, baseIndex);
  }
}
