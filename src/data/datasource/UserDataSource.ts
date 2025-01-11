import DataResult from "../DataResult";
import UserEntity from "../entities/UserEntity";

export interface UserDataSource {
  signUp(user: UserEntity): Promise<DataResult<void>>;

  signIn(platform: string, id: string): Promise<DataResult<UserEntity>>;
}
