import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.View`
  padding: 10px;
  width: 90%;
  color: ${colors.white};
  border-radius: 6px;
`;

const GenericInput = styled.TextInput.attrs({
  placeholderTextColor: colors.lighter,
})`
  height: 40px;
  background: ${colors.darker};
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const InputUserName = styled(GenericInput)`
  height: 40px;
  background: ${colors.darker};
  border-radius: 6px;
`;

export const InputPassword = styled(GenericInput)`
  margin-bottom: 30px;
`;

export const SignInBotton = styled.TouchableOpacity`
  background: ${colors.primary};
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonSignInText = styled.Text`
  color: ${colors.lighter};
  font-size: 18px;
  font-weight: bold;
`;
