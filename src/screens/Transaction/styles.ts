import styled from 'styled-components/native';
import { colors } from '@/assets';
import { Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background: ${colors.black};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 5}px;
  margin-left: 15px;
  height: 50px;
  justify-content: center;
`;

export const ActionBar = styled.View`
  margin-top: 50px;
  padding: 30px;
`;

export const TransactionText = styled.Text`
  color: ${colors.lighter};
  font-size: 19px;
`;

export const TransactionTextInput = styled(TextInputMask).attrs({
  options: {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$  ',
    suffixUnit: '',
  },
})`
  padding: 10px;
  font-size: 28px;
  color: ${colors.lighter};
`;

export const TransactionTextGroup = styled.Text`
  color: ${colors.lighter};
  font-size: 18px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

export const TextAlert = styled.Text`
  color: ${colors.lighter};
`;

export const ButtomContent = styled.View`
  margin-bottom: 15px;
  justify-content: flex-end;
  flex: 1;
`;

export const PerformTransaction = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: ${colors.primary};
  padding: 10px;
  padding-bottom: 20px;
`;

export const TransactionTextButtom = styled(TransactionText)`
  font-weight: bold;
`;
