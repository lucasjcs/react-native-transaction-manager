import { TransactionType } from '@/presentation/models/TransactionType';

export interface TransactionState {
  transaction: Data;
}

export interface Data {
  value: number;
  balance: number;
  description: string;
  transactions?: [];
  type?: TransactionType.DEPOSIT | TransactionType.TRANSFER;
}
