import React from 'react';

import DefaultHeader from '@/presentation/components/DefaultHeader';
import { DefaultProps } from '@/presentation/models/DefaultProps';
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


interface Props {
  route: {
    params: {
      value: number,
    }
  };
}


type LocalProps = Props & DefaultProps


const ComfirmTransaction: React.FC<LocalProps> = ({ navigation, route }) => {
  const { value } = route.params;
  return (
    <>
      <Container>
        <DefaultHeader navigation={navigation} />
        <Wrap>
          <Header>
            <TitleText>
              Você está transferindo
            </TitleText>
            <MoneyValueText>
              R$
              {value}
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
};

export default ComfirmTransaction;
