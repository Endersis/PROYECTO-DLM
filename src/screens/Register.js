import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity, 
  SafeAreaView,
  Image, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  primaryRed: '#E53935',
  textBlack: '#222222',
  textGray: '#666666',
  lightGray: '#F1F1F1', 
  white: '#FFFFFF',
  blueLink: '#007AFF',
  borderColor: '#DDDDDD',
};

const SIZES = {
  padding: 20,
  base: 8,
  fontSize: 16,
  h1: 30,
  h2: 22,
  inputHeight: 50,
  buttonRadius: 8,
};

const RegisterScreen = ({ navigation }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt with:', username, password,email);
    
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google attempt');
    
  };

  const navigateToSignup = () => {
    console.log('Navigate to Signup screen');
    
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              placeholderTextColor={COLORS.textGray}
              value={email}
              onChangeText={setUsername}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Enter Your Username"
              placeholderTextColor={COLORS.textGray}
              value={username}
              onChangeText={setUsername}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Your Password"
                placeholderTextColor={COLORS.textGray}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color={COLORS.textGray}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

           

            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
             
              <Image
                source={require('../../assets/2000px-Google_G_Logo.svg_.png')} 
                style={styles.googleLogo}
              />
              <Text style={styles.googleButtonText}>Signup with Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center', 
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 1.5, 
    paddingVertical: SIZES.padding,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.textBlack,
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.h2,
    color: COLORS.textGray,
    marginBottom: SIZES.padding * 2,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.buttonRadius,
    paddingHorizontal: SIZES.padding,
    fontSize: SIZES.fontSize,
    color: COLORS.textBlack,
    marginBottom: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.buttonRadius,
    marginBottom: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    fontSize: SIZES.fontSize,
    color: COLORS.textBlack,
  },
  eyeIcon: {
    padding: SIZES.padding / 2,
    marginRight: SIZES.base,
  },
  loginButton: {
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.primaryRed,
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.padding,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontSize + 2,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 1.5,
  },
  signupText: {
    fontSize: SIZES.fontSize - 1,
    color: COLORS.textGray,
  },
  signupLink: {
    fontSize: SIZES.fontSize - 1,
    color: COLORS.blueLink,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.buttonRadius,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: SIZES.base * 1.5,
  },
  googleButtonText: {
    color: COLORS.textBlack,
    fontSize: SIZES.fontSize,
    fontWeight: '500',
  },
});

export default RegisterScreen;