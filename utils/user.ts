import { UserResponse } from "./contracts/user";

export const fetchUser = (username: string): Promise<UserResponse> => {
  return $fetch<UserResponse>(
    `https://www.duolingo.com/2017-06-30/users?username=${username}`
  );
};
