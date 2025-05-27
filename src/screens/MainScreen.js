import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const icon = require('../../assets/dml-logo.png');

const MainScreen = () => {
  const handleImagePress = () => {
    console.log('Imagen presionada! Debería navegar a la pantalla de Login.');
  };

  return (
    // Usando clases de Tailwind directamente
    <SafeAreaView className="flex-1 bg-neutral-800"> 
      <StatusBar style="light" backgroundColor="rgb(38 38 38)" /> 
      <View className="flex-1 items-center justify-center p-5"> 
        <Pressable onPress={handleImagePress}>
          
          <View className="w-72 h-72"> 
            <Image
              source={icon}
              className="w-full h-full" 
              resizeMode="contain"
              accessibilityLabel="Logo de DLM con fondo integrado, presionar para ir a login"
            />
            <Text 
              className="absolute bottom-2 left-0 right-0 text-center text-white text-2xl font-bold" 
              
            >
              DLM
            </Text>
          </View>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};



export default MainScreen;