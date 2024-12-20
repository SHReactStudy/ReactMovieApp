import User from "../remote/firebase/model/User";

import { atom } from "recoil";

const userState = atom<User>({
  key: "userState",
  default: {
    id: "",
    nickname: "",
  },
});

export default userState;
