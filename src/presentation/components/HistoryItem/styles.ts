import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

export const CardItem = styled.View`
  flex-direction: row;
  background: ${colors.darker};
  width: 90%;
  padding: 15px;
  justify-content: space-between;
  border-radius: 10px;
`;

export const TypeContent = styled.View`
  flex-direction: column;
  justify-content: center;
`;


export const ValueText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold
`;
export const DateText = styled.Text`
  color: ${colors.primary};
  font-size: 13px;
`;
