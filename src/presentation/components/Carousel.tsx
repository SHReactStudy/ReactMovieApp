import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  indexState,
  movieListState,
} from "../../adapters/recoilStates/MovieListState";
import Movie from "../../domain/model/movie/MovieGameInfo";

const Carousel: React.FC = () => {
  const [index, setIndex] = useRecoilState(indexState);
  const items = useRecoilValue<Movie[]>(movieListState);

  const onRightClick = () => {
    console.log(items);
    if (items[index].rank > items[index + 1].rank) onCorrect();
    else onFailure();
  };

  const onLeftClick = () => {
    if (items[index].rank < items[index + 1].rank) onCorrect();
    else onFailure();
  };

  const onCorrect = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const onFailure = () => {
    alert(`틀렸습니다! ${items[index].rank}위, ${items[index + 1].rank}위`);
    location.reload();
  };

  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  if (items.length < 2)
    return (
      <div className="carousel">
        <div className="carousel-container"></div>
      </div>
    );
  else
    return (
      <div className="carousel">
        <div className="score">
          <h2 className="counter">정답기록 : {index}</h2>
        </div>
        <div className="carousel-container">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={index}
              className="carousel-item"
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              variants={variants}
            >
              <div style={{ width: "100%", color: "white" }}>
                {items[index].name}
                <div className="image-wrapper">
                  <img className="image" src={items[index].posterImgUrl} />
                </div>
              </div>
            </motion.div>

            <motion.div
              key={(index + 1) % items.length}
              className="carousel-item"
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              variants={variants}
            >
              <div style={{ width: "100%", color: "white" }}>
                {items[index + 1].name}
                <div className="image-wrapper">
                  <img className="image" src={items[index + 1].posterImgUrl} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button onClick={onLeftClick} className="navButton prev">
          이 영화
        </button>
        <button onClick={onRightClick} className="navButton next">
          저 영화
        </button>
      </div>
    );
};

export default Carousel;
