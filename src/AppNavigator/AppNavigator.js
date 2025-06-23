// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa createDrawerNavigator

// Importa tus pantallas
import MainScreen from '../screens/MainScreen';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import CatalogoScreen from '../screens/CatalogoScreen';
import ProfileScreen from '../screens/Perfil/ProfileScreen';
// Asegúrate de que las rutas a tus pantallas son correctas
// Puedes crear pantallas dummy por ahora si no las tienes todas
// import DLMScreen from '../screens/DLMScreen';
// import DestacadosScreen from '../screens/DestacadosScreen';

// Importa CustomHeader y componentes para el Drawer
import CustomHeader from '../screens/CustomHeader'; // Asegúrate de la ruta correcta a CustomHeader
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Crea tu Drawer Navigator

// --- Contenido del cajón lateral (CustomDrawerContent) ---
// Define Separator y user aquí o impórtalos si ya los tienes en un archivo de utilidades
const Separator = () => <View style={customDrawerStyles.separator} />;
const user = {
  nombre: "Mario Pérez",
  rol: "SEÑANTE",
  avatar: require('../../assets/Ejemplo1.png'), // Ruta correcta a tu imagen
};

// Este componente renderizará el contenido personalizado de tu cajón lateral
function CustomDrawerContent({ navigation }) {
  return (
    <SafeAreaView style={[customDrawerStyles.container, customDrawerStyles.navigationContainer]}>
      <Image source={user.avatar} style={customDrawerStyles.avatar} />
      <Text style={customDrawerStyles.nombre}>{user.nombre}</Text>
      <Text style={customDrawerStyles.rol}>{user.rol}</Text>

      <Separator />
      <Pressable
        onPress={() => {
          navigation.navigate('Perfil'); // Navega a la ruta 'Perfil' del Drawer
          navigation.closeDrawer();
        }}
        style={({ pressed }) => [
          customDrawerStyles.button,
          pressed && customDrawerStyles.buttonPressed,
        ]}
      >
        <MaterialIcons name="person" size={24} color="#4F4F4F" />
        <Text style={customDrawerStyles.buttonText}>Perfil</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('DLM'); // Navega a la ruta 'DLM' del Drawer
          navigation.closeDrawer();
        }}
        style={({ pressed }) => [
          customDrawerStyles.button,
          pressed && customDrawerStyles.buttonPressed,
        ]}
      >
        <MaterialIcons name="folder" size={24} color="#4F4F4F" />
        <Text style={customDrawerStyles.buttonText}>DLM</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Destacados'); // Navega a la ruta 'Destacados' del Drawer
          navigation.closeDrawer();
        }}
        style={({ pressed }) => [
          customDrawerStyles.button,
          pressed && customDrawerStyles.buttonPressed,
        ]}
      >
        <MaterialIcons name="groups" size={24} color="#4F4F4F" />
        <Text style={customDrawerStyles.buttonText}>Destacados</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          // Lógica para cerrar sesión, por ejemplo:
          // Esto te llevaría de nuevo a la pantalla Main/Login
          navigation.reset({
            index: 0,
            routes: [{ name: 'AuthStack' }], // Reinicia al stack de autenticación
          });
          navigation.closeDrawer();
        }}
        style={({ pressed }) => [
          customDrawerStyles.button,
          pressed && customDrawerStyles.buttonPressed,
        ]}
      >
        <MaterialIcons name="close" size={24} color="#4F4F4F" />
        <Text style={customDrawerStyles.buttonText}>Salir</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const customDrawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 22,
    paddingHorizontal: 12,
    color: "#4F4F4F",
  },
  buttonText: {
    fontSize: 18,
    color: "#4F4F4F",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonPressed: {
    backgroundColor: "#E0E0E0",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  rol: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
});

// --- Drawer Navigator para las pantallas principales ---
const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Deshabilita el encabezado por defecto de React Navigation
        drawerPosition: "left",
        drawerStyle: {
          width: 300,
        },
      }}
    >
      {/* Las pantallas que serán accesibles desde el Drawer */}
      <Drawer.Screen
        name="Catalogo" // Esta será la pantalla principal cuando el usuario esté logueado
        component={CatalogoScreen}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              title="CATÁLOGO DE SEÑAS"
              onPress={() => navigation.openDrawer()} // Abre el cajón
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              title="PERFIL DE USUARIO"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
      {/* Añade tus otras pantallas aquí */}
      <Drawer.Screen
        name="DLM"
        component={CatalogoScreen} // Reemplaza con tu componente DLMScreen
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              title="DICTADO DE LENGUAJE DE SEÑAS"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Destacados"
        component={CatalogoScreen} // Reemplaza con tu componente DestacadosScreen
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              title="SEÑAS DESTACADAS"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

// --- Stack Navigator principal (para autenticación y el Drawer) ---
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* Pantallas de autenticación */}
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
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        {/* Esta es la pantalla que contendrá tu Drawer Navigator */}
        <Stack.Screen
          name="HomeDrawer" // Un nombre para la ruta que contiene el Drawer
          component={MainDrawerNavigator}
          options={{ headerShown: false }} // El Drawer Navigator ya maneja su propio header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;