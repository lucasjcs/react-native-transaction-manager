import React from 'react';

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

const Header: React.FC<DefaultProps> = ({ navigation }) => (
  <>
    <Container>
      <BalanceContent>
        <BalanceTitle>
          Saldo disponível
        </BalanceTitle>
        <BalanceValue>
          R$ 13.550,07
        </BalanceValue>
      </BalanceContent>

      <ActionContent>
        <ActionTransaction onPress={() => navigation.navigate('Transaction', {
          transactionType: TransactionType.DEPOSIT,
        })}
        >
          <IconImage
            source={require('@/assets/images/deposit.png')}
          />
          <ActionText>Depositar</ActionText>
        </ActionTransaction>
        <ActionTransaction onPress={() => navigation.navigate('Transaction', {
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
export default Header;
