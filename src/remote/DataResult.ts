export default class DataResult<T> {
  public isSuccessful: boolean;
  public value?: T;
  public error?: string;

  private constructor(isSuccessful: boolean, value?: T, error?: string) {
    this.isSuccessful = isSuccessful;
    this.value = value;
    this.error = error;
  }

  static Success<T>(value: T): DataResult<T> {
    return new DataResult<T>(true, value);
  }

  static Failure<T>(error: string): DataResult<T> {
    return new DataResult<T>(false, undefined, error);
  }
}
