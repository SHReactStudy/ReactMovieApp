import DataResult from "./DataResult";

export async function call<T>(job: Promise<T>): Promise<DataResult<T>> {
  try {
    return DataResult.Success(await job);
  } catch (error) {
    return DataResult.Failure(error);
  }
}
