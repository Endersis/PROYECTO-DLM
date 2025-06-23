// src/screens/Perfil/GeneralTabScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// ... (tus importaciones de iconos y constantes COLORS, SIZES si las tienes aquí o importadas)

// Asumiendo que COLORS y SIZES están definidos o importados, por ejemplo:
const COLORS = { 
  primaryRed: '#E53935', 
  white: '#FFFFFF', 
  lightGray: '#F1F1F1', 
  textBlack: '#222222',
  borderColor: '#DDDDDD',
  // ...otros colores
};
const SIZES = { 
  padding: 20, 
  inputHeight: 50, 
  buttonRadius: 8, 
  fontSize: 16,
  // ...otros tamaños
};

const GeneralTabScreen = ({ userData, onSaveChanges }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setEmail(userData.email || '');
    }
  }, [userData]);

  const handleSave = () => {
    onSaveChanges({ name, email });
    setIsEditing(false); 
  };

  return (
    <View style={styles.container}>
      {/* ... tus TextInput para Name y Email ... */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={[styles.input, !isEditing && styles.disabledInput]}
        value={name}
        onChangeText={setName}
        placeholder="Tu nombre"
        editable={isEditing}
      />

      <Text style={styles.label}>Email</Text>
      <View style={[styles.emailInputContainer, !isEditing && styles.disabledInput]}>
        <TextInput
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          placeholder="tuemail@ejemplo.com"
          keyboardType="email-address"
          editable={isEditing}
        />
        {/* Icono de email si lo tienes */}
      </View>

      {!isEditing ? (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save changes</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  label: {
    fontSize: SIZES.fontSize,
    color: COLORS.textBlack,
    marginBottom: SIZES.padding / 4,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.buttonRadius,
    paddingHorizontal: SIZES.padding / 2,
    fontSize: SIZES.fontSize,
    color: COLORS.textBlack,
    marginBottom: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.buttonRadius,
    marginBottom: SIZES.padding * 1.5,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    paddingHorizontal: SIZES.padding / 2,
  },
  emailInput: {
    flex: 1,
    fontSize: SIZES.fontSize,
    color: COLORS.textBlack,
  },
  disabledInput: {
    backgroundColor: '#E9E9E9',
    color: '#A0A0A0',
  },
  saveButton: { // Este ya era rojo con texto blanco
     backgroundColor: COLORS.primaryRed, // Fondo rojo
    paddingVertical: SIZES.padding / 2,    // Un poco menos de padding vertical para hacerlo más chico en altura
    paddingHorizontal: SIZES.padding * 1.5, // Padding horizontal para el ancho del texto interno
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center', // Para centrar el texto si el padding lo hace más alto
    alignSelf: 'center', // Para que el botón no ocupe todo el ancho, sino que se centre
    // width: '60%', // O puedes darle un ancho porcentual o fijo si prefieres
    marginTop: SIZES.padding /2,// Espacio arriba del botón
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontSize,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: COLORS.primaryRed, 
    paddingVertical: SIZES.padding / 2,    
    paddingHorizontal: SIZES.padding * 1.5, 
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center', 
    alignSelf: 'center', 
    marginTop: SIZES.padding /2, 
   
  },
  editButtonText: {
    color: COLORS.white, 
    fontSize: SIZES.fontSize - 1, 
    fontWeight: 'bold',
  }
});

export default GeneralTabScreen;