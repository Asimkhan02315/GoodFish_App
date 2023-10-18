/* eslint-disable prettier/prettier */

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigatior';

const AppNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignupScreen'
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DrawerStack" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

