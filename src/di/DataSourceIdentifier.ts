/**
 * @deprecated DI : Context API 사용
 */

const DATASOURCE_TYPES = {
  Movie: Symbol.for("MovieDataSource"),
  GoogleSignIn: Symbol.for("GoogleSignInDataSource"),
  User: Symbol.for("UserDataSource"),
};

export default DATASOURCE_TYPES;
