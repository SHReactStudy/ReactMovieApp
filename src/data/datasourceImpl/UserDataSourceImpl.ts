import { UserDataSource } from "../datasource/UserDataSource";
import DataResult from "../DataResult";
import UserEntity from "../entities/UserEntity";
import { ref, child, get, set } from "firebase/database";
import database from "../../data/firebase/RealTimeDatabase";
import UserNotExistError from "../exception/UserNotExistError";
import { call } from "../Call";
import { injectable } from "inversify";

@injectable()
export default class UserDataSourceImpl implements UserDataSource {
  dbRef = ref(database);

  async signUp(user: UserEntity): Promise<DataResult<void>> {
    return call(
      set(ref(database, `/users/${user.platform}/${user.id}`), {
        nickname: user.nickname,
        id: user.id,
        email: user.email,
        platform: user.platform,
      })
    );
  }

  async signIn(platform: string, id: string): Promise<DataResult<UserEntity>> {
    try {
      const snapshot = await get(child(this.dbRef, `/users/${platform}/${id}`));
      if (!snapshot.exists())
        return DataResult.Failure(new UserNotExistError());
      return DataResult.Success(snapshot.val());
    } catch (error) {
      return DataResult.Failure(error);
    }
  }
}

export { UserDataSourceImpl };
