import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/screens/Login';
import Main from '@/screens/Main';
import Transaction from '@/screens/Transaction';
import ComfirmTransaction from '@/screens/Transaction/ComfirmTransaction';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ConfirmTransaction"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="ConfirmTransaction" component={ComfirmTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
