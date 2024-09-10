export interface GetUserProfileResponse {
  id: string;
  username: string;
  email: string;
  role: Role[];
}

export type Role = [
  {
    id: string;
    name: string;
  }
]