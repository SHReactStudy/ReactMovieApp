import User from "../model/User";

import { ref, set } from "firebase/database";
import database from "../RealTimeDatabase";

function createUser(userInfo: User) {
  set(ref(database, "users/" + userInfo.id), {
    nickname: userInfo.nickname,
    id: userInfo.id,
  });
}

export { createUser };
