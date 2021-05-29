import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import Logo from "../../assets/logo.png";
import React from "react";

export default function Splashscreen() {
  return (
    <SafeAreaView style={styles.splashContainer}>
      <Image testID="logoImage" style={styles.logoStyle} source={Logo} />
      <Text testID="logoLabel" style={styles.labelStyle}>
        Hangar
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logoStyle: {
    alignContent: "center",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  labelStyle: {
    textAlign: "center",
    fontSize: 32,
    marginTop: 20,
    color: "#000000",
  },
});
