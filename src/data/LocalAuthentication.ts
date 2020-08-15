import { Authentication, AuthenticationParams } from '@/domain/Authentication';
import { BaseResponse } from '@/domain/models/BaseResponse';
import { Storage } from './Storage';


export class LocalAuthentication implements Authentication {
  signIn(params: AuthenticationParams): Promise<BaseResponse> {
    const storage = new Storage();
    return storage.save(params);
  }
}
