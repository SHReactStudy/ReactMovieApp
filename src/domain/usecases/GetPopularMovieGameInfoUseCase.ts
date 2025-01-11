import type { MovieRepository } from "../repository/MovieRepository";
import { MovieGameInfo } from "../model/movie/MovieGameInfo";
import { inject, injectable } from "inversify";
import REPOSITORY_TYPEPS from "../../di/RepositoryIdentifier";

@injectable()
export class GetPopularMovieGameInfoUseCase {
  private movieRepository: MovieRepository;

  public constructor(
    @inject(REPOSITORY_TYPEPS.Movie) movieRepository: MovieRepository
  ) {
    this.movieRepository = movieRepository;
  }

  async execute(page: number, baseIndex: number): Promise<MovieGameInfo[]> {
    return this.movieRepository.getNextPopularMovies(page, baseIndex);
  }
}
