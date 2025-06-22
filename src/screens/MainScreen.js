import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView,Pressable } from 'react-native'; 
import { StatusBar } from 'expo-status-bar';
import { COLORS, SIZES } from '../content/theme'; 
import CustomHeader from './CustomHeader';

const icon = require('../../assets/dml-logo.png'); 

const MainScreen = () => {
    const handleImagePress = () => {
        console.log('Imagen presionada! Debería navegar a la pantalla de Login.');
      };
    

  return (
    <><SafeAreaView style={styles.safeArea}>
          <StatusBar style="light" backgroundColor={COLORS.primaryBlack} />
          <Pressable onPress={handleImagePress}>
          <View style={styles.container}>
              <Image
                  source={icon}
                  style={styles.logo} />
          </View>
          </Pressable>

      </SafeAreaView><Text style={styles.brandText}>DLM</Text></>
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

export default MainScreen;