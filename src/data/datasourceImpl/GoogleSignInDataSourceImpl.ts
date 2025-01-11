import DataResult from "../DataResult";
import UserEntity from "../entities/UserEntity";
import { GoogleSignInDataSource } from "../datasource/GoogleSignInDataSource";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/FirebaseAuth";

export class GoogleSignInDataSourceImpl implements GoogleSignInDataSource {
  private provider = new GoogleAuthProvider();

  async authenticateWithGoogle(): Promise<DataResult<UserEntity>> {
    try {
      const response = await signInWithPopup(auth, this.provider);
      return DataResult.Success({
        id: response.user.uid,
        nickname: response.user.displayName || "",
        email: response.user.email || "",
        platform: "google",
      });
    } catch (error) {
      return DataResult.Failure(error);
    }
  }
}
