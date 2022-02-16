export interface IUser {
  firstname: string;
  email: string;
  lastname: string;
  password: string;
  // phoneNumber: string;
}

export interface IVerifyUser {
  email: string;
  verificationToken: string;
}
export interface IVerifyUserPasswordReset {
  email: string;
  verificationToken: string;
  type: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISendOtp {
  email: string;
}

export interface ILoginResponse {
  errors: any;
  message: string;
  payload: IUserData;
  statusCode: number;
  token: string;
}

export interface IUserData {
  createdAt: string;
  email: string;
  firstname: string;
  isVerified: boolean;
  lastname: string;
  role: string;
}
