import '@testing-library/jest-native/extend-expect';

import React from 'react';

import { render } from '@testing-library/react-native';

import { TransactionItem } from '@/hooks/models/TransactionItem';
import { TransactionType } from '@/presentation/models/TransactionType';
import HistoryItem from '@/presentation/components/HistoryItem';

const TransferHistoryItem: TransactionItem = {
  date: '11/09/2020',
  description: 'Transferência padrão',
  type: TransactionType.TRANSFER,
  value: 85.55,
};

describe('Header', () => {
  it('should render transfer history item', () => {
    const { getByText } = render(<HistoryItem item={TransferHistoryItem} />);

    expect(getByText('R$ 85.55')).toBeTruthy();
    expect(getByText('TRANSFERÊNCIA')).toBeTruthy();
    expect(getByText('11/09/2020')).toBeTruthy();
  });
});
