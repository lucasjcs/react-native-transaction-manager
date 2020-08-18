import React from 'react';

import { TransactionItem } from '@/hooks/models/TransactionItem';
import { TransactionType } from '@/presentation/models/TransactionType';
import {
  Container,
  CardItem,
  ValueText,
  TypeContent,
  DateText,
} from './styles';

type Props = {
  item: TransactionItem
}

const HistoryItem: React.FC<Props> = ({ item }) => (
  <Container>
    <CardItem>
      <TypeContent>
        <DateText>
          {item.date}
        </DateText>
        <ValueText>
          { item.type === TransactionType.DEPOSIT ? 'DEPÓSITO' : 'TRANSFERÊNCIA' }
        </ValueText>
      </TypeContent>

      <TypeContent>
        <ValueText>
          R$
          {' '}
          {item.value}
        </ValueText>
      </TypeContent>

    </CardItem>
  </Container>
);

export default HistoryItem;
