import type { LoginValuesT, LoginResponseT } from "@/Types";

export const Auth = {
  async login(values: LoginValuesT): Promise<LoginResponseT> {
    if (values) {
      //
    }
    return {
      status: false,
      content: "",
    };
  },
};
