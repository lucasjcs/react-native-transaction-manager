import { AuthenticationParams } from '@/domain/Authentication';
import { BaseResponse } from '@/domain/models/BaseResponse';

export interface StorageClient {
  save(params: AuthenticationParams): Promise<BaseResponse>;
}
