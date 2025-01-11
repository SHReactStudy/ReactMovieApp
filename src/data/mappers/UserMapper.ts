import UserEntity from "../entities/UserEntity";
import User from "../../domain/model/user/User";

/**
 * 현재는 두 타입이 완벽하게 일치하지만,
 * UserEntity에 추가적인 정보가 적재될 수도 있어서 선구현
 */

function mapUserEntityToUser(entity: UserEntity): User {
  return {
    nickname: entity.nickname,
    id: entity.id,
    platform: entity.platform,
    email: entity.email,
  };
}

function mapUserToUserEntity(user: User): UserEntity {
  return {
    nickname: user.nickname,
    id: user.id,
    platform: user.platform,
    email: user.email,
  };
}

export { mapUserEntityToUser, mapUserToUserEntity };
