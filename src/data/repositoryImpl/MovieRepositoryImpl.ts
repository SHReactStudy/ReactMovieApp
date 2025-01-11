import { MovieGameInfo } from "../../domain/model/movie/MovieGameInfo";
import type { MovieDataSource } from "../../data/datasource/MovieDataSource";
import { MovieRepository } from "../../domain/repository/MovieRepository";
import { mapMovieResponseToMovie } from "../../data/mappers/MovieMapper";
import { MovieEntity } from "../entities/MovieEntity";
import { inject, injectable } from "inversify";
import DATASOURCE_TYPES from "../../di/DataSourceIdentifier";

@injectable()
export class MovieRepositoryImpl implements MovieRepository {
  private dataSource: MovieDataSource;

  public constructor(
    @inject(DATASOURCE_TYPES.Movie) dataSource: MovieDataSource
  ) {
    this.dataSource = dataSource;
  }

  async getNextPopularMovies(
    page: number,
    baseIndex: number
  ): Promise<MovieGameInfo[]> {
    const result = await this.dataSource.getMovieResponseOrderByPopularity(
      page
    );
    if (result.isSuccessful)
      return result.value!.results.map((item: MovieEntity, index: number) =>
        mapMovieResponseToMovie(item, baseIndex + index)
      );
    else return [];
  }
}
