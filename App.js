import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import SelectMedia from "./screens/select-media";
import EditMedia from "./screens/edit-media";

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectMedia">
        <Stack.Screen name="SelectMedia" component={SelectMedia} />
        <Stack.Screen name="EditMedia" component={EditMedia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
