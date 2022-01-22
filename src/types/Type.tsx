export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IVerifyUser {
  email: string;
  otp: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
