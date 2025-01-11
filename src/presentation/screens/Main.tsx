import { useNavigate } from "react-router-dom";

import userState from "../../adapters/recoilStates//UserState";
import { useRecoilState } from "recoil";
import { UserDataSourceImpl } from "../../data/datasourceImpl/UserDataSourceImpl";
import { UserRepositoryImpl } from "../../data/repositoryImpl/UserRepositoryImpl";
import { GoogleSignInDataSourceImpl } from "../../data/datasourceImpl/GoogleSignInDataSourceImpl";
import { GoogleSignInRepositoryImpl } from "../../data/repositoryImpl/GoogleSignInRepositoryImpl";
import { GoogleSignInUseCase } from "../../domain/usecases/GoogleSignInUseCase";

const userDataSource = new UserDataSourceImpl();
const signInDataSource = new GoogleSignInDataSourceImpl();
const userRepository = new UserRepositoryImpl(userDataSource);
const signInRepository = new GoogleSignInRepositoryImpl(signInDataSource);
const signInUseCase = new GoogleSignInUseCase(userRepository, signInRepository);

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
