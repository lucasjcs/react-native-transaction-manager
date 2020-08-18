import React, { useState } from 'react';

import DefaultHeader from '@/presentation/components/DefaultHeader';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import TransactionActions from '@/store/reducers/Transaction';
import { useDispatch } from 'react-redux';
import {
  Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { TransactionType } from '@/presentation/models/TransactionType';
import useStorage from '@/hooks/useStorage';

import moment from 'moment';

import {
  Container,
  TitleText,
  MoneyValueText,
  Header,
  DescriptionTextInput,
  ActionFormContent,
  ConfirmTransactionButtom,
  ConfirmText,
  ButtomContent,
} from './styles';


interface Props {
  route: {
    params: {
      transactionType: typeof TransactionType.TRANSFER | typeof TransactionType.DEPOSIT
      value: number,
    }
  };
}

type LocalProps = Props & DefaultProps

const ComfirmTransaction: React.FC<LocalProps> = ({ navigation, route }) => {
  const { value, transactionType } = route.params;
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');

  const { saveTransaction } = useStorage();

  const dispatchAction = transactionType === TransactionType.TRANSFER
    ? TransactionActions.decrementBalance
    : TransactionActions.incrementBalance;

  async function changeBalanceValue() {
    if (description.length > 3 && description !== '') {
      const dispatchObject = {
        value,
        description,
        date: moment(new Date()).format('DD/MM/YYYY'),
        type: transactionType,
      };

      dispatch(
        dispatchAction(dispatchObject),
      );

      Alert.alert('Transação realizada com sucesso!');
      saveTransaction(dispatchObject);

      navigation.navigate('Home');
    } else {
      Alert.alert('Descrição inválida.');
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <DefaultHeader navigation={navigation} />

          <Header>
            <TitleText>
              Você está
              {transactionType === TransactionType.DEPOSIT ? ' depositando' : ' transferindo'}
            </TitleText>
            <MoneyValueText>
              R$
              {value}
            </MoneyValueText>
          </Header>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <ActionFormContent>
              <DescriptionTextInput
                autoFocus
                multiline
                placeholder="Insira uma descrição para essa transação"
                onChangeText={text => setDescription(text)}
              />
            </ActionFormContent>

            <ButtomContent>
              <ConfirmTransactionButtom onPress={changeBalanceValue}>
                <ConfirmText>
                  Confirmar
                </ConfirmText>
              </ConfirmTransactionButtom>
            </ButtomContent>

          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    </>

  );
};

export default ComfirmTransaction;
