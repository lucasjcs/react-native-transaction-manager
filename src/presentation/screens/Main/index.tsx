import React from 'react';

import Header from '@/presentation/components/Header';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { Container } from './styles';


const Main: React.FC<DefaultProps> = ({ navigation }) => (
  <Container>
    <Header navigation={navigation} />
  </Container>
);

export default Main;
