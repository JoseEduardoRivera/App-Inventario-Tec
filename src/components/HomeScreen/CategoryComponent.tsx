import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Category } from "../../interfaces/category-interface";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InventoryParams } from "../../navigation";

interface Props {
  category: Category;
}

export function CategoryComponent({ category }: Props) {
  const navigation =
    useNavigation<StackNavigationProp<InventoryParams, "CategoryScreen">>();

  const { nombre, imagen, productos } = category.attributes;
  const imageUrl = imagen.data.attributes.url;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryScreen", { category: category })
      }
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.quantity}>
          Cantidad de productos: {productos.data.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "white",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  content: {
    flexDirection: "column",
    width: "100%",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  quantity: {
    fontWeight: "bold",
    color: "blue",
  },
});
