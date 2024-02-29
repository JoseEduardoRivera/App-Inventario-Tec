import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductoData } from "../../interfaces/category-interface";
import { UniqueProduct } from "../../interfaces/product-interface";
import { productCtrl } from "../../api/product";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InventoryParams } from "../../navigation";

interface Props {
  product: ProductoData;
}

export function ProductComponent({ product }: Props) {
  const id = product?.id;

  const [producto, setProducto] = useState<UniqueProduct | null>(null);

  const navigation =
    useNavigation<StackNavigationProp<InventoryParams, "ProductScreen">>();

  const imageUrl =
    producto?.data.attributes.imagenes.data[0]?.attributes.formats.small.url;

  const defaultImage = require("../../../assets/productDefault.png");

  const getProduct = async (id: number) => {
    try {
      const response = await productCtrl.getOne(id);
      setProducto(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  const screenWidth = Dimensions.get("window").width;

  //   TODO: APIENDPOINT A PRODUCTOS POR ID

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductScreen", { product: producto!.data })
      }
      style={{ width: screenWidth / 2, padding: 8, borderRadius: 15 }}
    >
      <Image
        source={{ uri: imageUrl }}
        defaultSource={defaultImage}
        style={{
          height: 100,
          width: "80%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          width: "80%",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          {producto?.data.attributes.nombre.toUpperCase()}
        </Text>
        <Text style={{ fontWeight: "bold", color: "green" }}>
          $ {producto?.data.attributes.precio}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
