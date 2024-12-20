import { createUser } from "../remote/firebase/repository/UserRepository";
import { useState } from "react";

import { useSetRecoilState } from "recoil";
import userState from "../state/UserState";

function Test() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");

  const setUser = useSetRecoilState(userState);

  const generateUser = () => {
    createUser({
      id: id,
      nickname: nickname,
    });
  };

  const setSession = () => {
    setUser({
      id,
      nickname,
    });
    alert("Recoil 상태 갱신 완료");
  };

  const updateId = (event: React.FormEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };

  const updateNickname = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
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
      <button onClick={generateUser}>생성</button>
      <button onClick={setSession}>로그인</button>
    </div>
  );
}

export default Test;
