import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { TransactionType as ETransactionType } from '@/presentation/models/TransactionType';

import { Data } from '../models/TransactionState';

const { Types, Creators } = createActions({
  incrementBalance: ['param'],
  decrementBalance: ['param'],
  setTransactions: ['param'],
  setBalance: ['param'],
});

export const TransactionTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable<Data>({
  balance: 0.00,
  description: '',
  value: 0,
  transactions: [],
});

export const incrementBalance = (state, action) => {
  const actionBalance = action.param.value.replace('.', '').replace(',', '.');
  const incrementedBalance = parseFloat(actionBalance) + parseFloat(state.balance);

  return state.merge({
    value: actionBalance,
    balance: incrementedBalance,
    description: action.param.description,
    type: ETransactionType.DEPOSIT,
  });
};

export const decrementBalance = (state, action) => {
  const actionBalance = action.param.value.replace('.', '').replace(',', '.');
  const decrementedBalance = parseFloat(state.balance) - parseFloat(actionBalance);
  return state.merge({
    value: actionBalance,
    balance: decrementedBalance,
    description: action.param.description,
    type: ETransactionType.TRANSFER,
  });
};

export const setTransactions = (state, action) => {
  const { transactions } = action.param;
  return state.merge({ transactions });
};

export const setBalance = (state, action) => {
  const { balance } = action.param;
  return state.merge({ balance });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT_BALANCE]: incrementBalance,
  [Types.DECREMENT_BALANCE]: decrementBalance,
  [Types.SET_TRANSACTIONS]: setTransactions,
  [Types.SET_BALANCE]: setBalance,
});
