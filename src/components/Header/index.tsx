import React from 'react';

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

const Header: React.FC = () => (
  <>
    <Container>
      <BalanceContent>
        <BalanceTitle>
          Saldo disponível
        </BalanceTitle>
        <BalanceValue>
          R$ 1.550,07
        </BalanceValue>
      </BalanceContent>

      <ActionContent>
        <ActionTransaction>
          <IconImage
            source={require('@/assets/images/deposit.png')}
          />
          <ActionText>Depositar</ActionText>
        </ActionTransaction>
        <ActionTransaction>
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
