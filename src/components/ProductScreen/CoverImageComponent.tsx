import { View, Text } from "react-native";
import React from "react";

interface Props {
  images: any;
}

export function CoverImageComponent({ images }: Props) {
  console.log(images);

  return (
    <View>
      {/* {images.map((image: any) => {
        <View></View>;
      })} */}
    </View>
  );
}
