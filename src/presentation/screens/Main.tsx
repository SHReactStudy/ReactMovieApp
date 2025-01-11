import { useNavigate } from "react-router-dom";

import userState from "../../adapters/recoilStates//UserState";
import { useRecoilState } from "recoil";
import { GoogleSignInUseCase } from "../../domain/usecases/GoogleSignInUseCase";
import container from "../../di/Container";
import USECASE_TYPEPS from "../../di/UsecaseIdentifier";

const signInUseCase = container.get<GoogleSignInUseCase>(
  USECASE_TYPEPS.GoogleSignIn
);

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
    const result = await signInUseCase.execute();
    if (result.isSuccessful) setUserInfo(result.value!);
    else alert(result.message!);
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
