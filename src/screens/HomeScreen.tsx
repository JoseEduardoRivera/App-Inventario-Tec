import { View, Text, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { Category } from "../interfaces/category-interface";
import { categoryCtrl } from "../api/category";
import { Categories } from "../components";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export function HomeScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getCategories = async () => {
    try {
      const response = await categoryCtrl.getAll();
      const categories = response.data;
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.log(`Error HomeScreen ${error}`);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleRefresing = async () => {
    setRefreshing(true);
    await getCategories();
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 15 }}>
          NUESTRAS CATEGORIAS
        </Text>
        <Categories
          categories={categories}
          onRefresh={handleRefresing}
          refreshing={refreshing}
        />
      </View>
      <View
        style={{
          backgroundColor: "black",
          paddingBottom: 15,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          paddingHorizontal: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", paddingVertical: 15 }}
        >
          {" "}
          CONTACTANOS
        </Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="facebook"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/LaMediaInglesa/?locale=es_ES"
              )
            }
          />
          <MaterialIcons
            name="email"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
            onPress={() => Linking.openURL("mailto:tu_correo@dominio.com")}
          />
          <MaterialIcons
            name="local-phone"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
            onPress={() => Linking.openURL("tel:+123456789")}
          />
          <FontAwesome
            name="whatsapp"
            size={24}
            color="white"
            onPress={() => Linking.openURL("https://wa.me/123456789")}
          />
        </View>
      </View>
    </View>
  );
}
