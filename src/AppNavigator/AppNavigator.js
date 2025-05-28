// src/navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';    
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
      {/* Aquí puedes seguir agregando más pantallas a este stack o incluso otros navegadores anidados */}
    </Stack.Navigator>
  );
};

export default AppNavigator;