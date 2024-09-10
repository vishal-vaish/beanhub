import requester from "@/lib/requester";
import {LoginResponse} from "@/models/response/LoginResponse";
import {GetUserProfileResponse} from "@/models/response/GetUserProfileResponse";

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
  authHeader: string
): Promise<LoginResponse> => {
  const headers = getHeaders();
  headers.Authorization = authHeader;
  return requester.post(loginEndPoint, {},{
    headers,
  });
};

export const getUserProfile = async (
  accessToken: string
):Promise<GetUserProfileResponse> => {
  const headers = getHeaders(accessToken);
  return requester.get("/users/me", {headers}
  );
}