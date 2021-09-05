import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

//? Added this in for referenec:
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Platform, Button, Alert } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import colors from "./app/config/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { landscape, portrait } = useDeviceOrientation();
  const { screen } = useDimensions();
  const { height, width } = screen;
  const { OS } = Platform;

  console.log({ height, width, OS });

  //* Testing is device is landscape or portrait by consts^ returns true/false
  //* Testing if device platform is android or ios with const ^
  //* ICONS ARE SHOWN LIKE THIS: <MaterialIcons name='email' size={200} color="dodgerblue"/>
  //! Better way is to have a [name of file].android.js or a [name of file].ios.js to import a Text component and vs code picks the correct one
  const styles = {
    colors,
    text: {
      ...Platform.select({
        ios: {
          fontSize: 20,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
        },
      }),
      color: colors.dark,
      fontSize: 18,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    edges: {
      margin: 0,
      padding: 0,
      height: portrait ? "100%" : "30%",
      borderWidth: 8,
      borderColor: "blue",
      borderRadius: 0,
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
    },
    position: {
      alignItems: "center",
      flex: 0,
      justifyContent: "center",
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AppNavigator /> */}
      <SafeAreaView style={[styles.edges, styles.position]}>
        <Button
          style={styles.text}
          onPress={(e) => {
            e.preventDefault();
            alert("clllicked");
          }}
          title="Log In 😄"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </NavigationContainer>
  );
}
