import { TransactionType } from '@/presentation/models/TransactionType';

export interface Transaction {
  type: TransactionType.DEPOSIT | TransactionType.TRANSFER
  value: string;
  date: string;
  name: string;
}
