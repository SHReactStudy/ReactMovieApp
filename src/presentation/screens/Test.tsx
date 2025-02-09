import { useState } from "react";

import { useSetRecoilState } from "recoil";
import userState from "../../adapters/recoilStates/UserState";
import { useDI } from "../../adapters/hooks/useDI";
function Test() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState(0);

  const setUser = useSetRecoilState(userState);

  const { userRepository, scoreRepository } = useDI();

  const generateUser = () => {
    userRepository.signIn({
      id: id,
      nickname: nickname,
      email: email,
      platform: "etc",
    });
  };

  const setSession = () => {
    setUser({
      id,
      nickname,
      email,
      platform: "etc",
    });
    alert("Recoil 상태 갱신 완료");
  };

  const uploadScore = async () => {
    await scoreRepository.updateScore(id, "test", score);
  };

  const getScores = async () => {
    alert(JSON.stringify((await scoreRepository.getAllScores()).value ?? []));
  };

  const updateId = (event: React.FormEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };

  const updateNickname = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };

  const updateEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const updateScore = (event: React.FormEvent<HTMLInputElement>) => {
    setScore(Number(event.currentTarget.value));
  };

  return (
    <div>
      <div>
        <p>Id</p> <input onChange={updateId} type="text" name="Id" />
      </div>
      <div>
        <p>Nickname</p>
        <input onChange={updateNickname} type="text" name="Nickname" />
      </div>
      <div>
        <p>Email</p>
        <input onChange={updateEmail} type="text" name="Email" />
      </div>
      <div>
        <p>Score</p>
        <input onChange={updateScore} type="number" name="Score" />
      </div>
      <button onClick={generateUser}>생성</button>
      <button onClick={setSession}>로그인</button>
      <button onClick={uploadScore}>점수전송</button>
      <button onClick={getScores}>점수조회</button>
    </div>
  );
}

export default Test;
