import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { InventoryParams } from "../navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { ProductsComponent } from "../components";

interface Props extends StackScreenProps<InventoryParams, "CategoryScreen"> {}

export function CategoryScreen({ route, navigation }: Props) {
  const { category } = route.params;

  const products = category.attributes.productos;
  const imageUrl = category.attributes.imagen.data.attributes.url;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle-outline"
          size={50}
          color="black"
          style={styles.backButton}
        />
      </View>
      <View style={styles.categoryInfoContainer}>
        <Text style={styles.categoryName}>{category.attributes.nombre}</Text>
        <Divider />
        <View>
          <ProductsComponent products={products} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
    opacity: 0.8,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
  },
  categoryInfoContainer: {
    backgroundColor: "black",
    height: "100%",
    padding: 20,
    marginTop: -15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  categoryName: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    paddingVertical: 5,
  },
});
