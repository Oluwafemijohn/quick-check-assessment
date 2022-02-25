export interface BaseResponse<T = any> {
  [key: string]: any;
  exception?: string;
  message: string;
  error?: string;
  statusCode: number;
  // bodyStatusCode: number;
  data?: T;
  payload?: T;
}
