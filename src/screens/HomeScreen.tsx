import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Categories, Category } from "../interfaces/category-interface";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InventoryParams } from "../navigation";
import { categoryCtrl } from "../api/category";

export function HomeScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const navigation =
    useNavigation<StackNavigationProp<InventoryParams, "CategoryScreen">>();

  const getCategories = async () => {
    try {
      const response = await categoryCtrl.getAll();
      const categories = response?.data;
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.log(`Error HomeScreen ${error}`);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        NUESTRAS CATEGORIAS
      </Text>
      {loading ? (
        <Text>Cargando categorías...</Text>
      ) : (
        categories.map((category) => (
          <>
            <Text key={category.id}>{category.attributes.name}</Text>
            <Image
              source={{ uri: category.attributes.img.data?.attributes.url }}
              style={{ height: 50, width: 50 }}
            />
            <Text>
              Cantidad de productos: {category.attributes.products.data.length}
            </Text>
          </>
          // Asegúrate de que "attributes" y "nombre" coincidan con la estructura de tus datos reales.
        ))
      )}
      <Text onPress={() => navigation.navigate("CategoryScreen")}>
        Ir a detalles
      </Text>
    </View>
  );
}
