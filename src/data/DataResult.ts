export default class DataResult<T> {
  public isSuccessful: boolean;
  public value?: T;
  public error?: Error;

  private constructor(isSuccessful: boolean, value?: T, error?: Error) {
    this.isSuccessful = isSuccessful;
    this.value = value;
    this.error = error;
  }

  static Success<T>(value: T): DataResult<T> {
    return new DataResult<T>(true, value);
  }

  static Failure<T>(error: unknown): DataResult<T> {
    return new DataResult<T>(
      false,
      undefined,
      error instanceof Error ? error : Error(String(error))
    );
  }
}
