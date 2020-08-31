import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { DefaultProps } from '@/presentation/models/DefaultProps';
import { TransactionType } from '@/presentation/models/TransactionType';


import {
  Container,
  BalanceValue,
  BalanceTitle,
  ActionContent,
  BalanceContent,
  ActionTransaction,
  IconImage,
  ActionText,
} from './styles';

type Props = {
  balance: number;
}

type LocalProps = Props & DefaultProps

const Header: React.FC<LocalProps> = ({ navigation, balance }) => {
  const formatedBalance = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BRL' }).format(balance);

  return (
    <>
      <Container>
        <BalanceContent>
          <BalanceTitle>
            Saldo disponível
          </BalanceTitle>
          <BalanceValue testID="balance-value">
            {formatedBalance}
          </BalanceValue>
        </BalanceContent>

        <ActionContent>
          <ActionTransaction
            testID="deposit-buttom"
            onPress={() => navigation.navigate('Transaction', {
              transactionType: TransactionType.DEPOSIT,
            })}
          >
            <IconImage
              source={require('@/assets/images/deposit.png')}
            />
            <ActionText>Depositar</ActionText>
          </ActionTransaction>
          <ActionTransaction
            testID="transfer-buttom"
            onPress={() => navigation.navigate('Transaction', {
              transactionType: TransactionType.TRANSFER,
            })}
          >
            <IconImage
              source={require('@/assets/images/payment.png')}
            />
            <ActionText>Transferir</ActionText>
          </ActionTransaction>
        </ActionContent>
      </Container>
    </>
  );
};
export default Header;
