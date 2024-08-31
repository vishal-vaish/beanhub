import { UserLoginRequest } from "@/types/request/UserLoginRequest";
import { UserLoginResponse } from "@/types/response/UserLoginResponse";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const signIn = async (
    autheticateBody:UserLoginRequest,
): Promise<UserLoginResponse> => {
    try {
      const response = await axios.post(`${baseURL}/user/signIn`, autheticateBody);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };