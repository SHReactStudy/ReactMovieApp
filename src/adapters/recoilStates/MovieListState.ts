import { atom } from "recoil";
import Movie from "../../domain/model/movie/MovieGameInfo";

const movieListState = atom<Movie[]>({
  key: "movieListState",
  default: [],
});

const indexState = atom({
  key: "index",
  default: 0,
});

export { movieListState, indexState };
