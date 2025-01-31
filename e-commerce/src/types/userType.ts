export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// user type
export type TUser = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  key: string;
  _id: string;
  name: TUserName;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  age: number;
  gender: string;
  contact: string;
  address: string;
  role: "user" | "admin";
  status: "active" | "blocked";
  profileImgUrl?: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
