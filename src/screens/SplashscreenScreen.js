import { Splashscreen } from "components/Splashscreen";
import { View } from "react-native";
import React from "react";

export default function SplashscreenPage(props) {
  return (
    <View style={splashScreenStyle}>
      <Splashscreen loginProp={props.children} />
    </View>
  );
}

const splashScreenStyle = { width: "100%", height: "100%" };
