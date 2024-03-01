import { View, Text } from "react-native";
import React from "react";
import { PurpleAttributes } from "../../interfaces/product-interface";

interface Props {
  attributes: PurpleAttributes;
}

export function DescriptionComponent({ attributes }: Props) {
  const { nombre, descripcion, precio, existencias, disponible } = attributes;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{nombre}</Text>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>{descripcion}</Text>
      <Text> Precio: ${precio}</Text>
      <Text> existencias: {existencias}</Text>
      {disponible ? (
        <Text style={{ color: "green" }}>Disponible</Text>
      ) : (
        <Text style={{ color: "red" }}>No disponible</Text>
      )}
    </View>
  );
}
