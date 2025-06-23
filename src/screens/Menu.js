import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import CustomHeader from "./CustomHeader";
import { Image } from "react-native"; 


const Separator = () => <View style={styles.separator} />;
const user = {
  nombre: "Mario Pérez",
  rol: "SEÑANTE",
   avatar: require('../../assets/Ejemplo1.png'),
};

const Menu = ({navigation}) => {
  const drawer = useRef(null);
  const navigationView = () => (
    <SafeAreaView style={[styles.container, styles.navigationContainer]}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.nombre}>{user.nombre}</Text>
      <Text style={styles.rol}>{user.rol}</Text>

      <Separator />
      <Pressable
        
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, // ← estilo condicional
        ]}
      >
        <MaterialIcons name="person" size={24} color="#4F4F4F" />
        <Text style={styles.buttonText}>Perfil</Text>
      </Pressable>
      <Pressable
     
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, // ← estilo condicional
        ]}
      >
        <MaterialIcons name="folder" size={24} color="#4F4F4F" />
        <Text style={styles.buttonText}>DLM</Text>
      </Pressable>
      <Pressable

        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, // ← estilo condicional
        ]}
      >
        <MaterialIcons name="groups" size={24} color="#4F4F4F" />
        <Text style={styles.buttonText}>Destacados</Text>
      </Pressable>
      <Pressable
      
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, // ← estilo condicional
        ]}
      >
        <MaterialIcons name="close" size={24} color="#4F4F4F" />
        <Text style={styles.buttonText}>Salir</Text>
      </Pressable>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={navigationView}
      >
        <SafeAreaView style={styles.container}>
          <CustomHeader
            title="PERFIL"
            onPress={() => drawer.current.openDrawer()}
          />
        </SafeAreaView>
      </DrawerLayoutAndroid>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20, // Si gap no funciona en tu versión, usa marginRight en el icono o Text
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
    backgroundColor: "#E0E0E0", // gris claro
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

export default Menu;
