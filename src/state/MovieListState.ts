import { atom } from "recoil";
import Movie from "../Movie";

const movieListState = atom<Movie[]>({
  key: "movieListState",
  default: [],
});

const indexState = atom({
  key: "index",
  default: 0,
});

export { movieListState, indexState };
