import React, { useEffect } from 'react';

import {
  FlatList, ScrollView, TouchableOpacity,
} from 'react-native';

import Header from '@/presentation/components/Header';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { useSelector } from 'react-redux';
import { TransactionState } from '@/store/models/TransactionState';
import useStorage from '@/hooks/useStorage';
import HistoryItem from '@/presentation/components/HistoryItem';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '@/assets';

import Immutable from 'seamless-immutable';

import {
  Container,
  TransactionsTitle,
  ListContent,
  TitleArea,
  EmptyListIcon,
  EmptyList,
  EmptyText,
} from './styles';

const Main: React.FC<DefaultProps> = ({ navigation }) => {
  const { balance, transactions } = useSelector(
    (state: TransactionState) => state.transaction,
  );


  const sortableTransactions = Immutable.asMutable(transactions);

  const { clearTransactions, sendStorageToRedux } = useStorage();


  async function clearHistory() {
    await clearTransactions();
    sendStorageToRedux();
  }

  useEffect(() => {
    sendStorageToRedux();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} balance={balance} />
      <TitleArea>
        <TransactionsTitle>Histórico</TransactionsTitle>
        <TouchableOpacity onPress={clearHistory}>
          <Icon name="trash" size={25} color={colors.white}>
            {' '}
          </Icon>
        </TouchableOpacity>
      </TitleArea>
      <ScrollView>
        {!transactions.length && (
          <EmptyList testID="empty-list">
            <EmptyListIcon source={require('@/assets/images/clean.png')} />
            <EmptyText>Você não possui histórico de transações</EmptyText>
          </EmptyList>
        )}

        <ListContent>
          <FlatList
            testID="history-list"
            data={sortableTransactions.reverse()}
            keyExtractor={() => String(Math.random())}
            renderItem={item => HistoryItem(item)}
          />
        </ListContent>
      </ScrollView>
    </Container>
  );
};

export default Main;
