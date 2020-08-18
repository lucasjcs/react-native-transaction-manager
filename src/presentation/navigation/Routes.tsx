import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '@/presentation/screens/Main';
import ComfirmTransaction from '@/presentation/screens/Transaction/ComfirmTransaction';
import Transaction from '@/presentation/screens/Transaction';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="ConfirmTransaction" component={ComfirmTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
