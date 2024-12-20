import { useNavigate } from "react-router-dom";

import userState from "../state/UserState";
import { useRecoilValue } from "recoil";

function Main() {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userState);

  const goToMovieGame = () => {
    navigate("/game");
  };

  const goToMemo = () => {
    navigate("/memo");
  };

  const goToTest = () => {
    navigate("/test");
  };

  const checkSession = () => {
    alert(`로그인한 유저 이름 : ${userInfo.nickname}`);
  };

  return (
    <div>
      <button onClick={goToMovieGame}>게임</button>
      <button onClick={goToMemo}>메모</button>
      <button onClick={goToTest}>테스트</button>
      <button onClick={checkSession}>세션 확인</button>
    </div>
  );
}

export default Main;
