import { BaseResponse } from './models/BaseResponse';

export type AuthenticationParams = {
  username: string,
  password: string,
}


export interface Authentication {
  signIn(params: AuthenticationParams): Promise<BaseResponse>;
}
