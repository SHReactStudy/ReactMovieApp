export default class Result<T> {
  public isSuccessful: boolean;
  public value?: T;
  public error?: Error;
  public message?: string;

  private constructor(
    isSuccessful: boolean,
    value?: T,
    error?: Error,
    message?: string
  ) {
    this.isSuccessful = isSuccessful;
    this.value = value;
    this.error = error;
    this.message = message;
  }

  static Success<T>(value: T): Result<T> {
    return new Result<T>(true, value);
  }

  static Failure<T>(error: unknown, message?: string): Result<T> {
    const resultError = error instanceof Error ? error : Error(String(error));
    const resultMessage = message !== undefined ? message : resultError.message;
    return new Result<T>(false, undefined, resultError, resultMessage);
  }
}
