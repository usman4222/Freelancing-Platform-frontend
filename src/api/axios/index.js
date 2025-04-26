import { BACKEND_URL } from "@/config/config";
import { getToken } from "./token";

import axios from "axios";

const http = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((res) => {
  return res.data ?? res;
});

export default http;
