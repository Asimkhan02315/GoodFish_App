/* eslint-disable prettier/prettier */

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigatior';
import { useSelector } from 'react-redux';
import BlockUserScreen from '../screens/user/BlockUserScreen';
const AppNavigator = () => {
  const auth = useSelector(state => state.auth)
  const Stack = createNativeStackNavigator();

  const ScreenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#1d6495',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Block Users'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth?.isLogin ? 'DrawerStack' : 'SignupScreen'}
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={ScreenOptions} name="BlockUsers" component={BlockUserScreen} />
        <Stack.Screen name="DrawerStack" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

