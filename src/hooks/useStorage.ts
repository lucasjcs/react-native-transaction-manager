import AsyncStorage from '@react-native-community/async-storage';

import { TransactionItem } from '@/hooks/models/TransactionItem';
import { useDispatch } from 'react-redux';
import TransactionActions from '@/store/reducers/Transaction';
import { StorageKeys } from './models/StorageKeys';


const useStorage = () => {
  const dispatch = useDispatch();

  async function saveTransaction(params: TransactionItem) {
    const storagedTransactions = await getTransactions();
    storagedTransactions.push(params);
    dispatch(
      TransactionActions.setTransactions({
        transactions: storagedTransactions,
      }),
    );
    await AsyncStorage.setItem(StorageKeys.TRANSACTIONS, JSON.stringify(storagedTransactions));
  }

  async function sendStorageToRedux() {
    const storagedTransactions = await getTransactions();
    const storagedBalance = parseFloat(await AsyncStorage.getItem(StorageKeys.BALANCE));

    if (storagedTransactions) {
      dispatch(
        TransactionActions.setTransactions({
          transactions: storagedTransactions,
        }),
      );
    }
    if (storagedBalance && storagedBalance > 0) {
      dispatch(
        TransactionActions.setBalance({
          balance: storagedBalance,
        }),
      );
    }
  }

  async function getTransactions() {
    const storagedTransactions = JSON.parse(
      await AsyncStorage.getItem(
        StorageKeys.TRANSACTIONS,
      ),
    ) as TransactionItem[] || [];


    return storagedTransactions;
  }

  async function clearTransactions() {
    await AsyncStorage.removeItem(StorageKeys.TRANSACTIONS);
  }

  async function saveBalance(balance: number) {
    await AsyncStorage.setItem(StorageKeys.BALANCE, String(balance));
  }

  return {
    sendStorageToRedux,
    saveTransaction,
    clearTransactions,
    saveBalance,
  };
};

export default useStorage;
