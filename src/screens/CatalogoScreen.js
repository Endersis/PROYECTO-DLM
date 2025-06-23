import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Menu from "./Menu";
const { width } = Dimensions.get("window");

const SENAS_DATA = [
  {
    id: "1",
    nombre: "Bien",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#sentir", "#positivo"],
  },
  {
    id: "2",
    nombre: "Mal",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#sentir", "#malestar"],
  },
  {
    id: "3",
    nombre: "Hola",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#saludo"],
  },
  {
    id: "4",
    nombre: "Doctor",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#salud", "#profesión"],
  },
  {
    id: "5",
    nombre: "Gracias",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#cortesía"],
  },
  {
    id: "6",
    nombre: "Adiós",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#despedida"],
  },
   {
    id: "7",
    nombre: "Bien",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#sentir", "#positivo"],
  },
  {
    id: "8",
    nombre: "Mal",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#sentir", "#malestar"],
  },
  {
    id: "9",
    nombre: "Hola",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#saludo"],
  },
  {
    id: "10",
    nombre: "Doctor",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#salud", "#profesión"],
  },
  {
    id: "11",
    nombre: "Gracias",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#cortesía"],
  },
  {
    id: "12",
    nombre: "Bye",
    imagen: require("../../assets/Ejemplo2.png"),
    hashtags: ["#despedida"],
  },
];

export default function CatalogoScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(SENAS_DATA);

  useEffect(() => {
    if (search.trim() === "") {
      setData(SENAS_DATA);
    } else {
      const query = search.toLowerCase();
      const filtered = SENAS_DATA.filter(
        (item) =>
          item.nombre.toLowerCase().includes(query) ||
          item.hashtags.some((tag) => tag.toLowerCase().includes(query))
      );
      setData(filtered);
    }
  }, [search]);

  const leftColumn = data.filter((_, i) => i % 2 === 0);
  const rightColumn = data.filter((_, i) => i % 2 !== 0);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar señas o hashtags..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.columns}>
          <View style={styles.column}>
            {leftColumn.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.imagen} style={styles.image} />
                <Text style={styles.title}>{item.nombre}</Text>
                <Text style={styles.hashtags}>{item.hashtags.join(" ")}</Text>
              </View>
            ))}
          </View>
          <View style={[styles.column, { marginTop: 40 }]}>
            {rightColumn.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.imagen} style={styles.image} />
                <Text style={styles.title}>{item.nombre}</Text>
                <Text style={styles.hashtags}>{item.hashtags.join(" ")}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    padding: 12,
    backgroundColor: "#fff",
  },
  search: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  columns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: (width - 40) / 2,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingTop: 6,
  },
  hashtags: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontSize: 12,
    color: "#666",
  },
});
