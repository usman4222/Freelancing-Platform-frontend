import { deleteCookie, getCookie, setCookie } from "@/utils/cookies";

export const getToken = (name = "access_token") => {
  const token = getCookie(name);
  return token ?? null;
};

export const saveToken = async (token, name = "access_token") => {
  setCookie(name, token);
};

export const clearToken = (name = "access_token") => {
  deleteCookie(name);
};