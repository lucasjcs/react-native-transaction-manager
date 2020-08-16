import 'react-native-gesture-handler';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Routes from './presentation/navigation/Routes';


Icon.loadFont();
Feather.loadFont();
// import { Container } from './styles';

const App: React.FC = () => <Routes />;

export default App;
