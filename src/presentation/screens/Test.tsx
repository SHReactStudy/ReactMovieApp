import { checkSignUp } from "../../domain/repository/UserRepository";
import { useState } from "react";

import { useSetRecoilState } from "recoil";
import userState from "../../adapters/recoilStates/UserState";

function Test() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const setUser = useSetRecoilState(userState);

  const generateUser = () => {
    checkSignUp({
      id: id,
      nickname: nickname,
      email: email,
    });
  };

  const setSession = () => {
    setUser({
      id,
      nickname,
      email,
    });
    alert("Recoil 상태 갱신 완료");
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

  return (
    <div>
      <div>
        <p>Id</p> <input onChange={updateId} type="text" name="Id" />
      </div>
      <div>
        <p>Nickname</p>
        <input onChange={updateNickname} type="text" name="name" />
      </div>
      <div>
        <p>Email</p>
        <input onChange={updateEmail} type="text" name="name" />
      </div>
      <button onClick={generateUser}>생성</button>
      <button onClick={setSession}>로그인</button>
    </div>
  );
}

export default Test;
