import { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  indexState,
  movieListState,
} from "../../adapters/recoilStates/MovieListState";
import Carousel from "./../components/Carousel";
import { MovieGameInfo } from "../../domain/model/movie/MovieGameInfo";
import { useDI } from "../../adapters/hooks/useDI";

const MovieGame = () => {
  const [loadingCnt, setLoading] = useState(0);
  const [movieList, setMovieList] =
    useRecoilState<MovieGameInfo[]>(movieListState);
  const index = useRecoilValue(indexState);

  useEffect(() => {
    if (index + 2 >= movieList.length) fetchMovieData();
  }, [index]);

  useEffect(() => {}, [movieList]);

  const page = useRef(1);

  const { getPopularMovieGameInfoUseCase } = useDI();

  const fetchMovieData = async () => {
    setLoading(loadingCnt + 1);
    setMovieList([
      ...movieList,
      ...shuffleArray(
        await getPopularMovieGameInfoUseCase.execute(
          page.current,
          movieList.length
        )
      ),
    ]);
    setLoading(loadingCnt - 1);
  };

  const shuffleArray = (array: MovieGameInfo[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  return (
    <div>
      <Carousel />
    </div>
  );
};

export default MovieGame;
