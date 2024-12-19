import axiosInstance from "../api/MovieAxiosInstance";
import MovieResponse from "../model/MovieResponse";
import requestPath from "../api/RequestPath";
import DataResult from "../../DataResult";

const API_KEY = "b0ac4ee644bbcafb01decc587dc1d92e";
const LANGUAGE = "ko-kr";
/**
 * 410 대한민국
 * 840 미국
 * 250 프랑스
 */
const REGION = "840";

async function getMovieOrigin(
  pageId: number
): Promise<DataResult<MovieResponse>> {
  try {
    const response = await axiosInstance.get<MovieResponse>(
      requestPath.topRatedMovie,
      {
        params: {
          language: LANGUAGE,
          api_key: API_KEY,
          page: pageId,
          region: REGION,
        },
      }
    );
    return DataResult.Success(response.data);
  } catch (error) {
    return DataResult.Failure(
      error instanceof Error ? error.message : String(error)
    );
  }
}

export { getMovieOrigin };
