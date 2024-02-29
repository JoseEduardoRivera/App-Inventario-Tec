import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductoData } from "../../interfaces/category-interface";
import { UniqueProduct } from "../../interfaces/product-interface";
import { productCtrl } from "../../api/product";

interface Props {
  product: ProductoData;
}

export function ProductComponent({ product }: Props) {
  const id = product?.id;

  const [producto, setProducto] = useState<UniqueProduct | null>(null);

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
  }, [id]);

  const screenWidth = Dimensions.get("window").width;

  //   TODO: APIENDPOINT A PRODUCTOS POR ID

  return (
    <TouchableOpacity
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
          {producto?.data.attributes.nombre}
        </Text>
        <Text style={{ fontWeight: "bold", color: "green" }}>
          $ {producto?.data.attributes.precio}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
