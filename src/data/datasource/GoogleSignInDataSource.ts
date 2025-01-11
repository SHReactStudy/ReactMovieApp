import DataResult from "../DataResult";
import UserEntity from "../entities/UserEntity";

export interface GoogleSignInDataSource {
  authenticateWithGoogle(): Promise<DataResult<UserEntity>>;
}
