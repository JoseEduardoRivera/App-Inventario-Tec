import { Text } from "react-native";
import React from "react";
import { Productos } from "../../interfaces/category-interface";
import { FlatList } from "react-native-gesture-handler";
import { ProductComponent } from "./ProductComponent";

interface Props {
  products: Productos;
}

export function ProductsComponent({ products }: Props) {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={products.data}
      numColumns={2}
      ListEmptyComponent={() => (
        <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
          No hay productos para esta categoría
        </Text>
      )}
      renderItem={({ item }) => (
        <ProductComponent product={item} key={item.id} />
      )}
    />
  );
}
