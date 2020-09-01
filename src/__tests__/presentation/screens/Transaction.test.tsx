import React from 'react';
import { Alert } from 'react-native';

import { render, fireEvent } from '@testing-library/react-native';
import { useSelector } from 'react-redux';

import Transaction from '@/presentation/screens/Transaction';
import { TransactionType } from '@/presentation/models/TransactionType';
import { DefaultProps } from '@/presentation/models/DefaultProps';


const TransactionRouteProps = {
  params: {
    transactionType: TransactionType.TRANSFER,
  },
};

jest.mock('react-redux');
jest.spyOn(Alert, 'alert');


const { navigation }: DefaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('TransactionScreen', () => {
  it('should show modal error if try transfer a invalid value', async () => {
    const { getByTestId, getByText } = render(
      <Transaction navigation={navigation} route={TransactionRouteProps} />,
    );

    // @ts-ignore
    useSelector.mockImplementation(() => 50);

    fireEvent.changeText(getByTestId('money-input'), 'R$100,00');
    fireEvent.press(getByText('Continuar'));

    expect(Alert.alert).toHaveBeenCalledWith('Valor inválido.');
  });

  it('should go to confirm screen with a correct transfer value', async () => {
    const { getByTestId, getByText } = render(
      <Transaction navigation={navigation} route={TransactionRouteProps} />,
    );

    // @ts-ignore
    useSelector.mockImplementation(() => 50);

    fireEvent.changeText(getByTestId('money-input'), 'R$25,00');
    fireEvent.press(getByText('Continuar'));

    expect(navigation.navigate).toHaveBeenCalledWith('ConfirmTransaction', {
      value: '25,00',
      balance: 50,
      transactionType: TransactionType.TRANSFER,
    });
  });

  it('should show the balance available on screem', async () => {
    const { getByText } = render(
      <Transaction navigation={navigation} route={TransactionRouteProps} />,
    );
    // @ts-ignore
    useSelector.mockImplementation(() => 50);

    expect(getByText('Saldo disponível R$ 50.00')).toBeTruthy();
  });
});
