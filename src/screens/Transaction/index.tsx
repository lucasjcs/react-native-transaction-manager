import React, { useState } from 'react';

import { TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '@/assets';
import {
  Container,
  Header,
  ActionBar,
  TransactionText,
  TransactionTextInput,
  InputGroup,
  TextAlert,
  PerformTransaction,
  TransactionTextButtom,
  ButtomContent,
} from './styles';

interface Props {
  transactionType: string;
  navigation: any
}

const Transaction: React.FC<Props> = () => {
  const [money, setMoney] = useState('0,00');

  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} color={colors.white}> </Icon>
          </TouchableOpacity>
        </Header>

        <ActionBar>
          <TransactionText>
            Quanto você deseja transferir?
          </TransactionText>
          <InputGroup>
            <TransactionTextInput
              type="money"
              value={money}
              onChangeText={text => setMoney(text)}
            />
          </InputGroup>

          <TextAlert>
            Saldo disponível R$ 1.547,00
          </TextAlert>
        </ActionBar>
        <ButtomContent>
          <PerformTransaction>
            <TransactionTextButtom onPress={() => alert(money)}>
              Continuar
            </TransactionTextButtom>
          </PerformTransaction>
        </ButtomContent>

      </Container>

    </>
  );
};

export default Transaction;
