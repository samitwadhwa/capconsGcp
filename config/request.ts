import axios from "axios";
import SecurityClient from "@/util/SecurityClient";

export const apiRequest = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.request.use((config) => {
  const accessToken = SecurityClient.getAuthAccessToken();

  if (config.headers) {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});
