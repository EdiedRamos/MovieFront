import { UserInfoT } from "@/Types";
import axios, { AxiosResponse } from "axios";

type UserT = {
  email: string;
  id: string;
  password: string;
  username: string;
  photo: string;
};

type UserResponseT = UserT[];

export const User = {
  getAll: async (): Promise<UserResponseT> => {
    try {
      const response: AxiosResponse<UserResponseT> =
        await axios.get<UserResponseT>(
          "https://react-redux-crud-75194-default-rtdb.firebaseio.com/users.json"
        );
      return response.data;
    } catch {
      return [];
    }
  },
  cleanInfo: (user: UserT): UserInfoT => {
    const cleaned: UserInfoT = {
      id: user.id,
      username: user.username,
      photo: user.photo,
    };
    return cleaned;
  },
};
