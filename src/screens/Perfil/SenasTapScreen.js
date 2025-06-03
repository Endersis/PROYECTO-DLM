// src/screens/SenasTabScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para las estrellas

const COLORS = { textBlack: '#222', textGray: '#666', primaryRed: '#E53935', white: '#FFF' };
const SIZES = { padding: 20, fontSize: 16, h2: 20 };

const SenasTabScreen = ({ senasCount }) => { // senasCount vendría como prop
  const MAX_STARS = 3;
  let starsToDisplay = 0;

  // Lógica simple para las estrellas (ajusta según tus criterios)
  if (senasCount >= 100) starsToDisplay = 3;
  else if (senasCount >= 50) starsToDisplay = 2;
  else if (senasCount >= 10) starsToDisplay = 1;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name={i < starsToDisplay ? "star" : "star-outline"}
          size={30}
          color={i < starsToDisplay ? COLORS.primaryRed : COLORS.textGray}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SEÑAS EMITIDAS</Text>
      <Text style={styles.descriptionText}>
        {/* Podrías hacer este texto dinámico si lo deseas */}
        La cantidad de señas emitidas por este usuario es {senasCount > 100 ? "mayor a 100" : `de ${senasCount}`}.
      </Text>
      <Text style={styles.levelHeader}>LEVEL</Text>
      <View style={styles.starsContainer}>
        {renderStars()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.textBlack,
    marginBottom: SIZES.padding / 2,
  },
  descriptionText: {
    fontSize: SIZES.fontSize,
    color: COLORS.textGray,
    textAlign: 'center',
    marginBottom: SIZES.padding * 1.5,
    lineHeight: SIZES.fontSize * 1.4,
  },
  levelHeader: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.textBlack,
    marginBottom: SIZES.padding / 2,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: SIZES.padding / 4,
  },
});

export default SenasTabScreen;