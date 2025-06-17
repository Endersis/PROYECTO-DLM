// src/screens/Perfil/ProfileScreen.js
import React, { useState } from 'react'; // Removí useEffect si no se usa aquí
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// --- Constantes ---
const COLORS = {
  primaryRed: '#E53935',
  white: '#FFFFFF',
  lightGray: '#F1F1F1',
  textBlack: '#333333',
  tabActiveText: '#FFFFFF',
  tabInactiveText: '#555555',
  borderColor: '#DDDDDD'
};

const SIZES = {
  padding: 20,
  avatarSize: 100,
  tabHeight: 45,               
  tabBorderRadius: 8,           
  tabBarHorizontalMargin: 20,    
  tabSpacingBetweenItems: 8,     

  h1: 30, 
  fontSize: 16, 
};


const { width } = Dimensions.get('window');

import GeneralTabScreen from './GeneralTapScreen';
import SenasTabScreen from './SenasTapScreen';   

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: 'Usuario Ejemplo',
    email: 'usuario@ejemplo.com',
    avatarUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=User',
    senasCount: 200,
  });

  const handleSaveChanges = (updatedData) => { console.log('Saving changes:', updatedData); setUserData(prevData => ({ ...prevData, ...updatedData })); };
  const handleChangeAvatar = () => { console.log('Change avatar clicked'); };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={handleChangeAvatar}>
          <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabSystemContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <View style={[
                styles.tabItemBox, // La caja coloreada
                { backgroundColor: focused ? COLORS.primaryRed : COLORS.lightGray }
              ]}>
                <Text style={{
                  color: focused ? COLORS.tabActiveText : COLORS.tabInactiveText,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                  {route.name}
                </Text>
              </View>
            ),
            tabBarStyle: styles.customTabBarStyle, // Estilo para la barra completa
            tabBarItemStyle: styles.customTabBarItemStyle, // Estilo para cada "slot" de pestaña
            tabBarIndicatorStyle: { backgroundColor: 'transparent', height: 0 },
            tabBarPressColor: 'transparent',
            tabBarPressOpacity: 0.8, // O 1 si no quieres opacidad
          })}
        >
          <Tab.Screen name="General">
            {props => <GeneralTabScreen {...props} userData={userData} onSaveChanges={handleSaveChanges} />}
          </Tab.Screen>
          <Tab.Screen name="SEÑAS">
            {props => <SenasTabScreen {...props} senasCount={userData.senasCount} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 150,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SIZES.padding,
  },
  avatar: {
    width: SIZES.avatarSize,
    height: SIZES.avatarSize,
    borderRadius: SIZES.avatarSize / 2,
    marginBottom: SIZES.padding / 2,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
  },
  tabSystemContainer: {
    flex: 1, // Para que el contenido de las pestañas tenga espacio
    // backgroundColor: 'pink', // Para depurar
  },
  customTabBarStyle: { // Estilo para la BARRA que contiene los items de las pestañas
    marginHorizontal: SIZES.tabBarHorizontalMargin, // <-- Para que no llegue a los bordes
    borderRadius: SIZES.tabBorderRadius,
    backgroundColor: COLORS.white, // Fondo detrás de las pestañas (puede ser transparente)
    elevation: 0,
    shadowOpacity: 0,
    overflow: 'hidden', // Importante para que el borderRadius afecte a los items
  },
  customTabBarItemStyle: { // Estilo para el ÁREA asignada a cada pestaña por el navegador
    flex: 1, // Para que las pestañas compartan el espacio disponible en la barra
    // El padding aquí crea el espacio ENTRE las cajas de las pestañas
    paddingHorizontal: SIZES.tabSpacingBetweenItems / 2,
    paddingVertical: SIZES.padding / 4, // Espacio vertical alrededor de la caja
    alignItems: 'stretch', // Para que tabItemBox pueda usar width: '100%'
  },
  tabItemBox: { // La "caja" visual (roja o gris)
    width: '100%', // Ocupa todo el ancho que le da customTabBarItemStyle
    height: SIZES.tabHeight,
    borderRadius: SIZES.tabBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Quité userNameText ya que no estaba siendo usado en el JSX que me pasaste.
  // Si lo necesitas, puedes volver a agregarlo.
});

export default ProfileScreen;