import type { LoginValuesT, LoginResponseT } from "@/Types";
import axios, { AxiosResponse } from "axios";

type UserT = {
  email: string;
  id: string;
  password: string;
  username: string;
};

type UserResponseT = UserT[];

export const Auth = {
  login: async (values: LoginValuesT): Promise<LoginResponseT> => {
    try {
      const response: AxiosResponse<UserResponseT> =
        await axios.get<UserResponseT>(
          "https://react-redux-crud-75194-default-rtdb.firebaseio.com/users.json"
        );
      const searchUser = response.data.filter(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (searchUser.length === 1) {
        return { status: true, content: searchUser[0].id };
      } else {
        return { status: false, content: "" };
      }
    } catch {
      return { status: false, content: "ERROR" };
    }
  },
};
