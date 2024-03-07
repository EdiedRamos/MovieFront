import type { LoginValuesT, LoginResponseT } from "@/Types";
import { User } from "..";

export const Auth = {
  login: async (values: LoginValuesT): Promise<LoginResponseT> => {
    try {
      const allUsers = await User.getAll();
      const searchUser = allUsers.filter(
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
  verifyUser: async (userId: string): Promise<boolean> => {
    const allUsers = await User.getAll();
    return allUsers.some((user) => user.id === userId);
  },
};
