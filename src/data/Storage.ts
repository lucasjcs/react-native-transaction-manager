import { AuthenticationParams } from '@/domain/Authentication';
import { BaseResponse } from '@/domain/models/BaseResponse';
import bcrypt from 'bcrypt';
import AsyncStorage from '@react-native-community/async-storage';
import { StorageClient } from './services/StorageClient';

export class Storage implements StorageClient {
  async save(params: AuthenticationParams): Promise<BaseResponse> {
    const { username, password } = params;

    try {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const userData = JSON.stringify({
        username,
        password: encryptedPassword,
      });

      await AsyncStorage.setItem('@TransactionManager/USER_DATA', userData);

      return {
        success: true,
        errorMessage: null,
      };
    } catch (error) {
      return {
        success: false,
        errorMessage: error,
      };
    }
  }
}
