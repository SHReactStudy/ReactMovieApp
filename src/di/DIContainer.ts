import { GoogleSignInDataSourceImpl } from "../data/datasourceImpl/GoogleSignInDataSourceImpl";
import { MovieDataSourceImpl } from "../data/datasourceImpl/MovieDataSourceImpl";
import ScoreDataSourceImpl from "../data/datasourceImpl/ScoreDataSourceImpl";
import UserDataSourceImpl from "../data/datasourceImpl/UserDataSourceImpl";
import { GoogleSignInRepositoryImpl } from "../data/repositoryImpl/GoogleSignInRepositoryImpl";
import { MovieRepositoryImpl } from "../data/repositoryImpl/MovieRepositoryImpl";
import { ScoreRepositoryImpl } from "../data/repositoryImpl/ScoreRepositoryImpl";
import { UserRepositoryImpl } from "../data/repositoryImpl/UserRepositoryImpl";
import { GoogleSignInRepository } from "../domain/repository/GoogleSignInRepository";
import { MovieRepository } from "../domain/repository/MovieRepository";
import { ScoreRepository } from "../domain/repository/ScoreRepository";
import { UserRepository } from "../domain/repository/UserRepository";
import { GetPopularMovieGameInfoUseCase } from "../domain/usecases/GetPopularMovieGameInfoUseCase";
import { GoogleSignInUseCase } from "../domain/usecases/GoogleSignInUseCase";

export interface DIContainer {
  getPopularMovieGameInfoUseCase: GetPopularMovieGameInfoUseCase;
  googleSignInUseCase: GoogleSignInUseCase;
  userRepository: UserRepository;
  movieRepository: MovieRepository;
  googleSignInRepository: GoogleSignInRepository;
  scoreRepository: ScoreRepository;
}

const googleSignInDataSource = new GoogleSignInDataSourceImpl();
const movieDataSource = new MovieDataSourceImpl();
const userDataSource = new UserDataSourceImpl();
const scoreDataSource = new ScoreDataSourceImpl();

const userRepository = new UserRepositoryImpl(userDataSource);
const movieRepository = new MovieRepositoryImpl(movieDataSource);
const googleSignInRepository = new GoogleSignInRepositoryImpl(
  googleSignInDataSource
);
const scoreRepository = new ScoreRepositoryImpl(scoreDataSource);

export const diContainer: DIContainer = {
  getPopularMovieGameInfoUseCase: new GetPopularMovieGameInfoUseCase(
    movieRepository
  ),
  googleSignInUseCase: new GoogleSignInUseCase(
    userRepository,
    googleSignInRepository
  ),
  userRepository,
  movieRepository,
  googleSignInRepository,
  scoreRepository,
};
