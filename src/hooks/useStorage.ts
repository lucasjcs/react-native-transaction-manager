import AsyncStorage from '@react-native-community/async-storage';

import { TransactionItem } from '@/hooks/models/TransactionItem';
import { useDispatch, useSelector } from 'react-redux';
import TransactionActions from '@/store/reducers/Transaction';
import { TransactionState } from '@/store/models/TransactionState';
import { StorageKeys } from './models/StorageKeys';


const useStorage = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state: TransactionState) => state.transaction.balance);

  async function saveTransaction(params: TransactionItem) {
    const storagedTransactions = await getTransactions();
    storagedTransactions.push(params);

    dispatch(
      TransactionActions.setTransactions({
        transactions: storagedTransactions,
      }),
    );
    await AsyncStorage.setItem(StorageKeys.BALANCE, String(balance));
    await AsyncStorage.setItem(StorageKeys.TRANSACTIONS, JSON.stringify(storagedTransactions));
  }

  async function sendStorageToRedux() {
    const storagedTransactions = await getTransactions();

    if (storagedTransactions) {
      dispatch(
        TransactionActions.setTransactions({
          transactions: storagedTransactions,
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


  return {
    sendStorageToRedux,
    saveTransaction,
    clearTransactions,
  };
};

export default useStorage;
