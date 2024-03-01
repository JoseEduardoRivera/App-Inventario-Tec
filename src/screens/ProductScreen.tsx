import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { InventoryParams } from "../navigation";

interface Props extends StackScreenProps<InventoryParams, "ProductScreen"> {}

export function ProductScreen({ navigation, route }: Props) {
  const { product } = route.params;

  const images = product.attributes.imagenes.data.length;
  return (
    <View>
      <Text>{product.attributes.nombre}</Text>
      <Text>{images}</Text>
    </View>
  );
}
