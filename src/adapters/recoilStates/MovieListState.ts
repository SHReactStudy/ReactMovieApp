import { atom } from "recoil";
import { MovieGameInfo } from "../../domain/model/movie/MovieGameInfo";

const movieListState = atom<MovieGameInfo[]>({
  key: "movieListState",
  default: [],
});

const indexState = atom({
  key: "index",
  default: 0,
});

export { movieListState, indexState };
