import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const DEFAULT_LANGUAGE = "ko-KR";
const TIME_OUT_SECONDS = 5000;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT_SECONDS,
  params: {
    language: DEFAULT_LANGUAGE,
  },
});

export default axiosInstance;
