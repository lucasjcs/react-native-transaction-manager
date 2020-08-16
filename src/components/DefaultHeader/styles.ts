import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Header = styled.TouchableOpacity`
  margin-top: ${getStatusBarHeight() + 10}px;
  margin-left: 20px;
`;
