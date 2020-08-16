import React from 'react';

import DefaultHeader from '@/components/DefaultHeader';
import {
  Container,
  TitleText,
  MoneyValueText,
  Header,
  PasswordTextInput,
  ActionFormContent,
  ConfirmTransactionButtom,
  ConfirmText,
  ButtomContent,
  Wrap,
} from './styles';

const ComfirmTransaction: React.FC = () => (
  <>
    <Container>
      <DefaultHeader />
      <Wrap>
        <Header>
          <TitleText>
            Você está transferindo
          </TitleText>
          <MoneyValueText>
            R$ 8.550,00
          </MoneyValueText>
        </Header>

        <ActionFormContent>
          <PasswordTextInput
            autoFocus
            secureTextEntry
            placeholder="Digite sua senha"
          />
        </ActionFormContent>

        <ButtomContent>
          <ConfirmTransactionButtom>
            <ConfirmText>
              Confirmar
            </ConfirmText>
          </ConfirmTransactionButtom>
        </ButtomContent>
      </Wrap>


    </Container>
  </>

);

export default ComfirmTransaction;
