import {Role} from "@/models/response/GetUserProfileResponse";

export type User = {
  id: string;
  username: string;
  email: string;
  role: Role[];
}