import styled from 'styled-components/native';
import { colors } from '@/assets';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  Container as TransactionContainer,
  ButtomContent as ButtomTransaction,
} from '../styles';

export const Wrap = styled.View`
  align-items: center;
  flex: 1;
`;

export const Container = styled(TransactionContainer)`

`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 70}px;
  margin-bottom: 100px; 

  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  color: ${colors.lighter};
  letter-spacing: 3px;
`;

export const MoneyValueText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${colors.primary};
`;

export const ActionFormContent = styled.View`
  width: 90%;
  background: ${colors.darker};
  border-radius: 6px;
`;

export const PasswordTextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  max-width: 60%;
  padding: 15px;
  color: ${colors.lighter};
`;

export const ButtomContent = styled(ButtomTransaction)`
  width: 100%;
`;

export const ConfirmTransactionButtom = styled.TouchableOpacity`
  border-top-width: 0.5px;
  border-top-color: ${colors.primary};
  padding: 20px;
  align-items: center;
`;
export const ConfirmText = styled.Text`
  color: ${colors.lighter};
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 1px;
`;
