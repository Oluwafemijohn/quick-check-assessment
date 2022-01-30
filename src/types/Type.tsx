export interface IUser {
  firstName: string;
  email: string;
  lastName: string;
}

export interface IVerifyUser {
  email: string;
  otp: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
