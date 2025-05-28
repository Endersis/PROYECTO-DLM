import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView,Pressable, Button,Alert } from 'react-native';  
import { StatusBar } from 'expo-status-bar';
import { COLORS, SIZES } from '../content/theme'; 


const icon = require('../../assets/dml-logo.png'); 

const Button = () => {
    const handleImagePress = () => {
        console.log('Imagen presionada! Debería navegar a la pantalla de Login.');
      };
     const onPress = () => {
    Alert.alert('si muchisimo');
  };

  return (
    
      <View style={styles.container}> <Button  onPress={onPress} style= {styles.brandText}title="diego es gay?" /></View>
          
         
         

    
      

  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  container: {
    
    alignItems: 'center', 
    justifyContent: 'center',
    padding: SIZES.padding, 
    backgroundColor: COLORS.primaryBlack,
  },
  logo: {
    width: SIZES.logoWidth,  
    height: SIZES.logoHeight,  
    marginBottom: SIZES.padding, 
  },
    buttonContainer: {
    margin: 20,
  },
  brandText: {
    position: 'absolute',
    left: 0,
    right: 0, 
    bottom: 80, 
                             
    textAlign: 'center', 
    color: COLORS.black,
    fontSize: SIZES.h1, 
    fontWeight: 'bold',          
   
  },
});

export default Button;