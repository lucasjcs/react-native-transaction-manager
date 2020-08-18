import styled from 'styled-components/native';
import { colors } from '@/assets';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  height: 250px;
  padding-top: 10px;
  background: ${colors.primary};
  margin-bottom: 20px;
`;

export const BalanceContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 5}px;

`;

export const BalanceTitle = styled.Text`
  color: ${colors.lighter};
  margin-bottom: 10px;
  font-size: 16px;
`;

export const BalanceValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.white};
`;

export const ActionContent = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const ActionTransaction = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-width: 0.5px;
  border-color: ${colors.lighter};
  border-radius: 10px;
  margin-right: 10px;
  flex-direction: row;
`;

export const ActionText = styled.Text`
  color: white;
`;

export const IconImage = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`;
