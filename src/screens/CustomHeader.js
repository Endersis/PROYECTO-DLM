import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader({ title, onPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.menuButton}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E50914',
    height: 80,
    paddingTop: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 30,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});