import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/assets';
import { Header } from './styles';

const DefaultHeader: React.FC = () => (
  <Header>
    <Icon name="arrow-back" size={25} color={colors.white}> </Icon>
  </Header>
);

export default DefaultHeader;
