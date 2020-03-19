import React, { useEffect, useState, useRef } from "react";
import * as ImageManipulator from "expo-image-manipulator";
import { View, Image, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";

export const Photo = ({ img, canvasLayout }) => {
  return (
    <View
      style={{
        width: canvasLayout.width,
        height: canvasLayout.width * 1.5,
        display: "flex",
        backgroundColor: "blue",
        alignItems: "center"
      }}
    >
      <Image
        source={{ uri: img.uri }}
        style={{
          width: canvasLayout.width,
          height: canvasLayout.height,
          overflow: "hidden"
        }}
        resizeMethod="scale"
      />
    </View>
  );
};
