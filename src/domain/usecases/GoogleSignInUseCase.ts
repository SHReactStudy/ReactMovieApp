import User from "../model/user/User";
import type { GoogleSignInRepository } from "../repository/GoogleSignInRepository";
import type { UserRepository } from "../repository/UserRepository";
import Result from "../Result";

export class GoogleSignInUseCase {
  private userRepository: UserRepository;
  private signInRepository: GoogleSignInRepository;

  constructor(
    userRepository: UserRepository,
    signInRepository: GoogleSignInRepository
  ) {
    this.userRepository = userRepository;
    this.signInRepository = signInRepository;
  }

  async execute(): Promise<Result<User>> {
    try {
      const result = await this.signInRepository.authenticateWithGoogle();
      if (result.isSuccessful)
        return await this.userRepository.signIn(result.value!);
      else throw result.error;
    } catch (error) {
      return Result.Failure(error, "구글 로그인 중 오류가 발생했습니다.");
    }
  }
}
