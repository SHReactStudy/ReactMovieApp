/**
 * @deprecated DI : Context API 사용
 */

const REPOSITORY_TYPEPS = {
  GoogleSignIn: Symbol.for("GoogleSignInRepository"),
  Movie: Symbol.for("MovieRepository"),
  User: Symbol.for("UserRepository"),
};

export default REPOSITORY_TYPEPS;
