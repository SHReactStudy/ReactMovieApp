import User from "../model/user/User";
import Result from "../Result";

export interface UserRepository {
  signIn(user: User): Promise<Result<User>>;
}
