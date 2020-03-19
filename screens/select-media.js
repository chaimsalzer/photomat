import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SelectMedia({ navigation }) {
  const [assets, setAssets] = useState([]);
  const [selectedImgs, setSelectedImgs] = useState([]);

  const requestPermissions = async () => {
    MediaLibrary.requestPermissionsAsync();
    const albums = await MediaLibrary.getAlbumsAsync();
    const cameraImgs = albums.find(a => a.title === "Camera");
    const whatsAppImgs = albums.find(a => a.title === "WhatsApp Images");
    const cameraRes = await MediaLibrary.getAssetsAsync({
      first: 10000,
      album: cameraImgs
    });
    const whatsAppRes = await MediaLibrary.getAssetsAsync({
      first: 10000,
      album: whatsAppImgs
    });
    const combinedAssets = [...cameraRes.assets].sort(
      (a, b) => b.creationTime - a.creationTime
    );
    setAssets(combinedAssets);
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const onImgPressHandler = item => {
    setSelectedImgs([item]);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.sss </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("EditMedia", { selectedImgs })}
      />
      <FlatList
        numColumns={2}
        data={assets}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onImgPressHandler(item)}>
            <Image
              source={{ uri: item.uri }}
              style={{
                width: 150,
                height: 150,
                borderColor: "black",
                borderWidth: selectedImgs.includes(item) ? 5 : 0
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    width: "100%",
    backgroundColor: "blue",
    flex: 1
  }
});
