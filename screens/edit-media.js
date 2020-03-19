import React, { useEffect, useState, useRef } from "react";
import * as ImageManipulator from "expo-image-manipulator";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  Dimensions
} from "react-native";

export default function EditMedia({ route }) {
  const canvasEl = useRef(null);
  const [canvasLayout, setCanvasLayout] = useState({ width: 0, height: 0 });

  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  const { selectedImgs } = route.params;
  const [img, setImg] = useState(selectedImgs[0]);

  const cropImage = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      img.uri,
      [{ rotate: 90 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImg(manipResult);
  };

  useEffect(() => {
    // cropImage();
  }, []);

  const pad = 0.9;
  const width = screenWidth * pad;
  const ratio = width / img.width;
  const height = img.height * ratio - 80;

  // const canvasWidth = 100;
  const canvasHeight = 100;

  return (
    <View style={{ width: "100%", backgroundColor: "green", alignItems: 'center' }}>
      <View
        onLayout={event => setCanvasLayout(event.nativeEvent.layout)}
        style={{
          width: "90%",
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
        {/* <Image
        source={{ uri: img.uri }}
        style={{ width: img.width / 12, height: img.height / 12 }}
      /> */}
      </View>
    </View>
  );
}
