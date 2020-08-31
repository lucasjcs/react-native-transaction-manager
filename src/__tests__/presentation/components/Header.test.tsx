import '@testing-library/jest-native/extend-expect';

import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Header from '@/presentation/components/Header';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { TransactionType } from '@/presentation/models/TransactionType';


describe('Header', () => {
  it('should show a formated balance', () => {
    const { getByText } = render(<Header navigation={null} balance={200} />);
    expect(getByText('R$ 200.00')).toBeTruthy();
  });

  it('should call deposit screen', () => {
    const { navigation }: DefaultProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const { getByTestId } = render(<Header navigation={navigation} balance={200} />);

    fireEvent.press(getByTestId('deposit-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('Transaction', {
      transactionType: TransactionType.DEPOSIT,
    });
  });

  it('should call transfer screen', () => {
    const { navigation }: DefaultProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const { getByTestId } = render(<Header navigation={navigation} balance={200} />);

    fireEvent.press(getByTestId('transfer-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('Transaction', {
      transactionType: TransactionType.TRANSFER,
    });
  });
});
