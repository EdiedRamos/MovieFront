import axios, { AxiosResponse } from "axios";

type UserT = {
  email: string;
  id: string;
  password: string;
  username: string;
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
};
