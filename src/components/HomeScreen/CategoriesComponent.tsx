import { Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import { Category } from "../../interfaces/category-interface";
import { CategoryComponent } from "./CategoryComponent";

interface Props {
  categories: Category[];
  onRefresh: () => void; //funcion para manejar el loader
  refreshing: boolean;
}

export function Categories({ categories, onRefresh, refreshing }: Props) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CategoryComponent category={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={
        <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
          Mas categorias en camino :D
        </Text>
      }
    />
  );
}
