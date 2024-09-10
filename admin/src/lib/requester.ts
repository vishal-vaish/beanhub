import {AxiosError, AxiosRequestConfig} from "axios";
import axios from "axios";

export const baseUrl = "http://localhost:8080/api";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: baseUrl,
};

const requester = axios.create(config);

requester.interceptors.response.use(
  (response) => {
    return response.data;
  },

  function (error: AxiosError) {
    if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error') || !error.response) {
      console.error("connection error");
    } else if (error.response) {
      // if (error.response.status === 401 &&
      //   !(error.response.config.url === "/user/signIn")
      // ) {
      //   window.location.href = "/login"
      // }
      return Promise.reject(error);
    }
  }
);

export default requester;