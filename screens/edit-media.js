import React, { useEffect, useState, useRef } from "react";
import * as ImageManipulator from "expo-image-manipulator";
import { View, Image, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { Photo } from "../components/photo";

export default function EditMedia({ route }) {
  const [canvasLayout, setCanvasLayout] = useState({ width: 0, height: 0 });

  const { selectedImgs } = route.params;
  const onLayoutHandler = e => {
    setCanvasLayout(e.nativeEvent.layout);
  };

  // const cropImage = async () => {
  //   const manipResult = await ImageManipulator.manipulateAsync(
  //     img.uri,
  //     [{ rotate: 90 }],
  //     { compress: 1, format: ImageManipulator.SaveFormat.PNG }
  //   );
  //   setImg(manipResult);
  // };

  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      {selectedImgs.map(img => (
        <View style={styles.page} key={img.id}>
          <View onLayout={onLayoutHandler} style={styles.imgWrapper}>
            <Photo img={img} canvasLayout={canvasLayout} />
          </View>
        </View>
      ))}
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    width: "100%",
    backgroundColor: "green",
    alignItems: "center"
  },
  page: {
    width: "100%",
    backgroundColor: "green",
    alignItems: "center"
  },
  imgWrapper: { width: "90%", backgroundColor: "yellow" }
});
