import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import User from "../model/User";
import auth from "../FirebaseAuth";

function googleLogin() {
  return new Promise<User>((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        resolve({
          id: data.user.uid,
          nickname: data.user.displayName || "",
          email: data.user.email || "",
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export { googleLogin };
