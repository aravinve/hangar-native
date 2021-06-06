import { Splashscreen } from "components/Splashscreen";
import { View } from "react-native";
import React from "react";

export default function SplashscreenPage({ children, navigationProps }) {
  return (
    <View style={splashScreenStyle}>
      <Splashscreen {...navigationProps} loginProp={children} />
    </View>
  );
}

const splashScreenStyle = { width: "100%", height: "100%" };
