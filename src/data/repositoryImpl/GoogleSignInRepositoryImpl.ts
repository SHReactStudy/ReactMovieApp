import User from "../../domain/model/user/User";
import { GoogleSignInRepository } from "../../domain/repository/GoogleSignInRepository";
import Result from "../../domain/Result";
import type { GoogleSignInDataSource } from "../datasource/GoogleSignInDataSource";

export class GoogleSignInRepositoryImpl implements GoogleSignInRepository {
  private dataSource: GoogleSignInDataSource;

  public constructor(dataSource: GoogleSignInDataSource) {
    this.dataSource = dataSource;
  }

  async authenticateWithGoogle(): Promise<Result<User>> {
    try {
      const result = await this.dataSource.authenticateWithGoogle();
      if (result.isSuccessful) return Result.Success(result.value!);
      else return Result.Failure(result.error!);
    } catch (error) {
      return Result.Failure(error);
    }
  }
}
