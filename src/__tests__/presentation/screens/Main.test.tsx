import React from 'react';

import { render } from '@testing-library/react-native';

import Main from '@/presentation/screens/Main';

import { useSelector } from 'react-redux';

import { TransactionItem } from '@/hooks/models/TransactionItem';
import { TransactionType } from '@/presentation/models/TransactionType';

jest.mock('react-redux');

describe('MainScreen', () => {
  it('should return a empty history list', () => {
    // @ts-ignore
    useSelector.mockImplementation(() => ({
      transactions: [],
      balance: 0,
    }));

    const { getByText, getByTestId } = render(<Main navigation={null} />);
    expect(getByTestId('empty-list'))
      .toContainElement(
        getByText('Você não possui histórico de transações'),
      );
  });

  it('should return a history list from redux', () => {
    const transactionItem: TransactionItem[] = [
      {
        value: 200,
        description: 'default description',
        date: '19/04/2020',
        type: TransactionType.DEPOSIT,
      },
      {
        value: 150,
        description: 'default description',
        date: '19/04/2020',
        type: TransactionType.TRANSFER,
      },
    ];

    // @ts-ignore
    useSelector.mockImplementation(() => ({
      transactions: transactionItem,
    }));

    const { getAllByTestId } = render(<Main navigation={null} />);

    expect(getAllByTestId('history-item').length).toBe(2);
  });
});
