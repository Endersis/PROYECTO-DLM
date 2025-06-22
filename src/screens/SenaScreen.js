import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// Objeto que simula datos desde una base de datos
const sena = {
  nombre: "MAL",
  hashtags: ["#sentir", "#malestar"],
  descripcion:
    "Seña utilizada principalmente para descripción, de sentirse mal.",
  imagen: require("../../assets/Ejemplo2.png"),
  avatar: { uri: "https://randomuser.me/api/portraits/women/1.jpg" },
};

export default function SenaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SEÑA</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Feather
            name="share-2"
            size={24}
            color="white"
            style={styles.iconSpacing}
          />
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>

      {/* Tarjeta con contenido dinámico */}
      <View style={styles.card}>
        <View style={styles.userInfo}>
          <Image source={sena.avatar} style={styles.avatar} />
          <View style={styles.textInfo}>
            <Text style={styles.name}>{sena.nombre}</Text>
            <Text style={styles.tags}>{sena.hashtags.join(", ")}</Text>
          </View>
          <Feather name="share-2" size={20} color="#333" />
        </View>

        <Image source={sena.imagen} style={styles.signImage} />

        <View style={styles.description}>
          <Text style={styles.descTitle}>Descripción</Text>
          <Text style={styles.descText}>{sena.descripcion}</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.customButton,
          pressed && styles.customButtonPressed,
        ]}
        onPress={() => alert("Botón presionado")}
      >
        <Text style={styles.customButtonText}>COMENZAR</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#E50914",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconSpacing: {
    marginHorizontal: 12,
  },
  card: {
    marginTop: 10,
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tags: {
    fontSize: 12,
    color: "#666",
  },
  signImage: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
    marginBottom: 16,
  },
  description: {
    marginBottom: 20,
  },
  descTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  descText: {
    color: "#333",
    fontSize: 14,
  },
  button: {
    color: "#D3D3D3",
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  customButton: {
  backgroundColor: "#D3D3D3", // gris claro (normal)
  paddingVertical: 12,
  marginHorizontal: 90,
  borderRadius: 4,
  alignItems: "center",
  marginTop: 16,
},

customButtonPressed: {
  backgroundColor: "#B0B0B0", // gris más oscuro al presionar
},

customButtonText: {
  color: "#000", // texto negro
  fontSize: 16,
  fontWeight: "bold",
},

});
