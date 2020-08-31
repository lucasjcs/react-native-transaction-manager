import { TransactionType } from '@/presentation/models/TransactionType';

export interface TransactionItem {
  value?: number;
  description?: string;
  date?: string;
  type?: TransactionType.DEPOSIT | TransactionType.TRANSFER;
}
