import User from "../../domain/model/user/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import Result from "../../domain/Result";
import type { UserDataSource } from "../datasource/UserDataSource";
import UserNotExistError from "../exception/UserNotExistError";
import {
  mapUserEntityToUser,
  mapUserToUserEntity,
} from "../mappers/UserMapper";

export class UserRepositoryImpl implements UserRepository {
  private dataSource: UserDataSource;

  public constructor(dataSource: UserDataSource) {
    this.dataSource = dataSource;
  }

  async signIn(user: User): Promise<Result<User>> {
    try {
      const signIn = await this.dataSource.signIn(user.platform, user.id);
      if (signIn.isSuccessful) {
        return Result.Success(mapUserEntityToUser(signIn.value!));
      } else {
        if (signIn.error instanceof UserNotExistError) {
          await this.dataSource.signUp(mapUserToUserEntity(user));
          return Result.Success(user);
        }
        throw signIn.error;
      }
    } catch (error) {
      return Result.Failure("회원가입실패 : " + error);
    }
  }
}
