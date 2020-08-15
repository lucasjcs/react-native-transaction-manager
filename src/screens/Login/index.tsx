import React from 'react';

import {
  Container,
  FormContent,
  InputPassword,
  InputUserName,
  SignInBotton,
  ButtonSignInText,
} from './styles';

const Login: React.FC = () => (
  <Container>
    <FormContent>
      <InputUserName
        placeholder="Escolha um apelido"
      />
      <InputPassword
        placeholder="Defina uma senha"
      />
      <SignInBotton>
        <ButtonSignInText>
          ACESSAR
        </ButtonSignInText>
      </SignInBotton>
    </FormContent>
  </Container>
);

export default Login;
