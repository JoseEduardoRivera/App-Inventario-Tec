import { View, Text } from "react-native";
import React from "react";

interface Props {
  nombre: string;
}

export function CategoryComponent({ nombre }: Props) {
  return (
    <View style={{ backgroundColor: "black", padding: 20 }}>
      <Text style={{ color: "white", alignSelf: "center", fontWeight: "bold" }}>
        CategoryComponent
      </Text>
    </View>
  );
}
