import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
`;

export const ListContent = styled.View`
  margin-bottom: 50px;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TransactionsTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 25px;
  margin-bottom: 20px;
`;

export const EmptyList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;

export const EmptyListIcon = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  color: ${colors.lighter}
`;
