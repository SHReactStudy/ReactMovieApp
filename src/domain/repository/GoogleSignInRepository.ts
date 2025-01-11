import User from "../model/user/User";
import Result from "../Result";

export interface GoogleSignInRepository {
  authenticateWithGoogle(): Promise<Result<User>>;
}
