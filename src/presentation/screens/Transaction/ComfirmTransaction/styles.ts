import styled from 'styled-components/native';
import { colors } from '@/assets';

import { getStatusBarHeight } from 'react-native-status-bar-height';


export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
  justify-content: center;
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

export const DescriptionTextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  padding: 15px;
  color: ${colors.lighter};
`;

export const ButtomContent = styled.View`
  width: 100%;
  justify-content: flex-end;
  flex: 1;
  margin-top: 80px;

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
