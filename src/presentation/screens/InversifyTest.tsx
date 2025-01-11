import userState from "../../adapters/recoilStates//UserState";
import { useRecoilState } from "recoil";
import container from "../../di/Container";
import { GoogleSignInUseCase } from "../../domain/usecases/GoogleSignInUseCase";
import USECASE_TYPEPS from "../../di/UsecaseIdentifier";

/**
 * 현재 DI를 방법을 Inversify.js에서 Context API로 대체한 상태
 * 방법론 논의 후 채택 예정정
 */

const signInUseCase = container.get<GoogleSignInUseCase>(
  USECASE_TYPEPS.GoogleSignIn
);

function InversifyTest() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

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
      <button onClick={onGoogleLogin}>구글로그인</button>
      <button onClick={checkSession}>세션 확인</button>
    </div>
  );
}

export default InversifyTest;
