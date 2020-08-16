import React from 'react';

import { DefaultProps } from '@/presentation/models/DefaultProps';

import {
  Container,
  FormContent,
  InputPassword,
  InputUserName,
  SignInBotton,
  ButtonSignInText,
} from './styles';

const Login: React.FC<DefaultProps> = props => (
  <Container>
    <FormContent>
      <InputUserName
        placeholder="Escolha um apelido"
      />
      <InputPassword
        secureTextEntry
        placeholder="Defina uma senha"
      />
      <SignInBotton onPress={() => props.navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
            params: { someParam: 'Param1' },
          },
        ],
      })}
      >
        <ButtonSignInText>
          ACESSAR
        </ButtonSignInText>
      </SignInBotton>
    </FormContent>
  </Container>
);

export default Login;
