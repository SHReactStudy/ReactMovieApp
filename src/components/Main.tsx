import { useNavigate } from "react-router-dom";

import userState from "../state/UserState";
import { useRecoilState } from "recoil";

import { checkSignUp } from "../remote/firebase/repository/UserRepository";
import { googleLogin } from "../remote/firebase/repository/SignInRepository";

function Main() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userState);

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

  const onGoogleLogin = async () => {
    const result = await googleLogin();
    const user = await checkSignUp(result);
    setUserInfo(user);
  };

  return (
    <div>
      <button onClick={goToMovieGame}>게임</button>
      <button onClick={goToMemo}>메모</button>
      <button onClick={goToTest}>테스트</button>
      <button onClick={checkSession}>세션 확인</button>
      <button onClick={onGoogleLogin}>구글로그인</button>
    </div>
  );
}

export default Main;
