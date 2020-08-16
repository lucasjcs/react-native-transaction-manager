import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/assets';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { Header } from './styles';

const DefaultHeader: React.FC<DefaultProps> = ({ navigation }) => (
  <Header onPress={() => navigation.goBack()}>
    <Icon name="arrow-back" size={25} color={colors.white}> </Icon>
  </Header>
);

export default DefaultHeader;
