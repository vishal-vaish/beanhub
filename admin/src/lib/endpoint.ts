import {UserLoginRequest} from "@/models/request/UserLoginRequest";
import requester from "@/lib/requester";



const loginEndPoint = "/auth/token"

export const getHeaders = (
  accessToken?: string,
  accept?: string,
) => {
  const headers: {
    "Content-Type": string;
    withCredentials: boolean;
    Authorization?: string;
    Accept?: string;
  } = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: accept ? accept : "",
    withCredentials: true,
  };
  if (accessToken) {
    headers.Authorization = "Bearer " + accessToken;
  }

  return headers;
};

export const authenticateUser = async (
  loginRequest: UserLoginRequest,
  authHeader: string
): Promise<never> => {
  const headers = getHeaders();
  headers.Authorization = authHeader;
  return requester.get(loginEndPoint, {
    headers,
  });
};