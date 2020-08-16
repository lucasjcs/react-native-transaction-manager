import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '@/assets';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { TransactionType } from '@/presentation/models/TransactionType';
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
  route: {
    params: {
      transactionType: typeof TransactionType.TRANSFER | typeof TransactionType.DEPOSIT
    }
  };
}

type LocalProps = DefaultProps & Props;


const Transaction: React.FC<LocalProps> = ({ navigation, route }) => {
  const [money, setMoney] = useState('0,00');
  const { transactionType } = route.params;

  const convertMoney = (moneyValue: string) => {
    setMoney(moneyValue.split('R$').join('').trim());
  };

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
            Quanto você deseja
            {transactionType === TransactionType.DEPOSIT ? ' depositar ' : ' transferir '}

            ?
          </TransactionText>
          <InputGroup>
            <TransactionTextInput
              type="money"
              value={money}
              onChangeText={text => convertMoney(text)}
            />
          </InputGroup>

          <TextAlert>
            Saldo disponível R$ 1.547,00
          </TextAlert>
        </ActionBar>
        <ButtomContent>
          <PerformTransaction
            onPress={() => navigation.navigate('ConfirmTransaction', {
              value: money,
            })}
          >
            <TransactionTextButtom>
              Continuar
            </TransactionTextButtom>
          </PerformTransaction>
        </ButtomContent>

      </Container>

    </>
  );
};

export default Transaction;
