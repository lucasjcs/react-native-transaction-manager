import 'react-native-gesture-handler';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { Provider } from 'react-redux';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './presentation/navigation/Routes';
import store from './store';
import { colors } from './assets';


Icon.loadFont();
Feather.loadFont();

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
]);

const App: React.FC = () => (
  <Provider store={store}>
    <StatusBar
      backgroundColor={colors.primary}
      barStyle="light-content"
    />
    <Routes />
  </Provider>
);

export default App;
