// src/navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';    
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';   

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen 
        name="Main"
        component={MainScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login"
        component={LoginScreen} 
        options={{ title: 'Iniciar Sesión' }} 
      />
      <Stack.Screen
        name="Signup" 
        component={ RegisterScreen}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;