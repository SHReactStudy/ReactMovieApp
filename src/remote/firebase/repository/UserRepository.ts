import User from "../model/User";
import { ref, child, get, set } from "firebase/database";
import database from "../RealTimeDatabase";

function createUser(userInfo: User) {
  set(ref(database, "users/" + userInfo.id), {
    nickname: userInfo.nickname,
    id: userInfo.id,
    email: userInfo.email,
  });
}

function checkSignUp(userInfo: User) {
  return new Promise<User>((resolve, reject) => {
    const dbRef = ref(database);
    get(child(dbRef, "/users/" + userInfo.id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          createUser(userInfo);
          resolve(userInfo);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { checkSignUp };
