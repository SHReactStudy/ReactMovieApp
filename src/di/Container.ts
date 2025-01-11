import { Container } from "inversify";
import "reflect-metadata";

import DATASOURCE_TYPES from "./DataSourceIdentifier";
import REPOSITORY_TYPEPS from "./RepositoryIdentifier";

import { MovieDataSource } from "../data/datasource/MovieDataSource";
import { MovieDataSourceImpl } from "../data/datasourceImpl/MovieDataSourceImpl";
import { GoogleSignInDataSource } from "../data/datasource/GoogleSignInDataSource";
import { GoogleSignInDataSourceImpl } from "../data/datasourceImpl/GoogleSignInDataSourceImpl";
import { UserDataSource } from "../data/datasource/UserDataSource";
import { UserDataSourceImpl } from "../data/datasourceImpl/UserDataSourceImpl";

import { GoogleSignInRepository } from "../domain/repository/GoogleSignInRepository";
import { GoogleSignInRepositoryImpl } from "../data/repositoryImpl/GoogleSignInRepositoryImpl";
import { MovieRepository } from "../domain/repository/MovieRepository";
import { MovieRepositoryImpl } from "../data/repositoryImpl/MovieRepositoryImpl";
import { UserRepository } from "../domain/repository/UserRepository";
import { UserRepositoryImpl } from "../data/repositoryImpl/UserRepositoryImpl";
import { GoogleSignInUseCase } from "../domain/usecases/GoogleSignInUseCase";
import USECASE_TYPEPS from "./UsecaseIdentifier";
import { GetPopularMovieGameInfoUseCase } from "../domain/usecases/GetPopularMovieGameInfoUseCase";

const container = new Container();

// DataSource
container.bind<MovieDataSource>(DATASOURCE_TYPES.Movie).to(MovieDataSourceImpl);
container
  .bind<GoogleSignInDataSource>(DATASOURCE_TYPES.GoogleSignIn)
  .to(GoogleSignInDataSourceImpl);
container.bind<UserDataSource>(DATASOURCE_TYPES.User).to(UserDataSourceImpl);

// Repository
container
  .bind<GoogleSignInRepository>(REPOSITORY_TYPEPS.GoogleSignIn)
  .to(GoogleSignInRepositoryImpl);
container
  .bind<MovieRepository>(REPOSITORY_TYPEPS.Movie)
  .to(MovieRepositoryImpl);
container.bind<UserRepository>(REPOSITORY_TYPEPS.User).to(UserRepositoryImpl);

// UseCase
container
  .bind<GoogleSignInUseCase>(USECASE_TYPEPS.GoogleSignIn)
  .to(GoogleSignInUseCase);
container
  .bind<GetPopularMovieGameInfoUseCase>(USECASE_TYPEPS.GetPopularMovieGameInfo)
  .to(GetPopularMovieGameInfoUseCase);

export default container;
