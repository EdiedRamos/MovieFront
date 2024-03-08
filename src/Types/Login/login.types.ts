export type LoginValuesT = {
  email: string;
  password: string;
};

export type UserInfoT = {
  username: string;
  photo: string;
  id: string;
};

export type LoginResponseT = {
  status: boolean;
  content: UserInfoT | string;
};
