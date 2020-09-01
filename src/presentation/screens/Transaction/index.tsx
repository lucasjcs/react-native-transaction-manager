import React, { useState } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '@/assets';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { TransactionType } from '@/presentation/models/TransactionType';
import { useSelector } from 'react-redux';
import { TransactionState } from '@/store/models/TransactionState';
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

  const balance = useSelector((state: TransactionState) => state.transaction.balance);
  const formatedBalance = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BRL' }).format(balance);


  const convertMoney = (moneyValue: string) => {
    setMoney(moneyValue.split('R$').join('').trim());
  };

  const validateTransactionValue = () => {
    const transformedMoney = parseFloat(money.replace('.', '').replace(',', '.').trim());
    if (
      transactionType === TransactionType.TRANSFER
      && (transformedMoney > balance || transformedMoney < 1)
    ) {
      Alert.alert('Valor inválido.');
    } else {
      navigation.navigate('ConfirmTransaction', {
        value: money,
        balance,
        transactionType,
      });
    }
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
              testID="money-input"
              type="money"
              value={money}
              onChangeText={text => convertMoney(text)}
              onSubmitEditing={validateTransactionValue}
            />
          </InputGroup>
          {transactionType === TransactionType.TRANSFER && (
            <TextAlert>
              {`Saldo disponível ${formatedBalance}`}
            </TextAlert>
          )}
        </ActionBar>
        <ButtomContent>
          <PerformTransaction
            onPress={validateTransactionValue}
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
