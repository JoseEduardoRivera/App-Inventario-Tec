import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { InventoryParams } from "../navigation";
import {
  CategoryComponent,
  CoverImageComponent,
  DescriptionComponent,
} from "../components";
import { Ionicons } from "@expo/vector-icons";

interface Props extends StackScreenProps<InventoryParams, "ProductScreen"> {}

export function ProductScreen({ navigation, route }: Props) {
  const { product } = route.params;
  const { attributes } = product;
  const { categoria } = attributes;
  const categoryName = categoria.data.attributes.nombre;

  const images = product.attributes.imagenes.data;
  return (
    <View>
      <Ionicons
        name="arrow-back-circle-outline"
        size={50}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <CoverImageComponent images={images} />
      <DescriptionComponent attributes={attributes} />
      <CategoryComponent nombre={categoryName} />
    </View>
  );
}
