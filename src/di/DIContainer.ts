import { GoogleSignInDataSourceImpl } from "../data/datasourceImpl/GoogleSignInDataSourceImpl";
import { MovieDataSourceImpl } from "../data/datasourceImpl/MovieDataSourceImpl";
import UserDataSourceImpl from "../data/datasourceImpl/UserDataSourceImpl";
import { GoogleSignInRepositoryImpl } from "../data/repositoryImpl/GoogleSignInRepositoryImpl";
import { MovieRepositoryImpl } from "../data/repositoryImpl/MovieRepositoryImpl";
import { UserRepositoryImpl } from "../data/repositoryImpl/UserRepositoryImpl";
import { GetPopularMovieGameInfoUseCase } from "../domain/usecases/GetPopularMovieGameInfoUseCase";
import { GoogleSignInUseCase } from "../domain/usecases/GoogleSignInUseCase";

export interface DIContainer {
  getPopularMovieGameInfoUseCase: GetPopularMovieGameInfoUseCase;
  googleSignInUseCase: GoogleSignInUseCase;
}

const googleSignInDataSource = new GoogleSignInDataSourceImpl();
const movieDataSource = new MovieDataSourceImpl();
const UserDataSource = new UserDataSourceImpl();

const userRepository = new UserRepositoryImpl(UserDataSource);
const movieRepository = new MovieRepositoryImpl(movieDataSource);
const googleSignInRepository = new GoogleSignInRepositoryImpl(
  googleSignInDataSource
);

export const diContainer: DIContainer = {
  getPopularMovieGameInfoUseCase: new GetPopularMovieGameInfoUseCase(
    movieRepository
  ),
  googleSignInUseCase: new GoogleSignInUseCase(
    userRepository,
    googleSignInRepository
  ),
};
