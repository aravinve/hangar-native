import * as Animated from "react-native-animatable";
import { LoginIconComponent } from "./LoginIconComponent/index";
import { View } from "react-native";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function UserLoginOrRegisterComponent() {
  const buttonProps = [
    {
      buttonIcon: faGoogle,
      labelText: "google",
      bgColor: "#f0f0f0",
      labelColor: "#424242",
    },
    {
      buttonIcon: faFacebook,
      labelText: "facebook",
      bgColor: "#6059c9",
      labelColor: "#f6f6f6",
    },
    {
      buttonIcon: faTwitter,
      labelText: "twitter",
      bgColor: "#55afd9",
      labelColor: "#f6f6f6",
    },
  ];

  return (
    <View testID="loginButtons">
      {buttonProps.map(({ buttonIcon, labelText, bgColor, labelColor }) => {
        return (
          <Animated.View animation="bounceInUp" duration={1800} key={labelText}>
            <LoginIconComponent
              icon={buttonIcon}
              label={labelText}
              bgColor={bgColor}
              labelColor={labelColor}
            />
          </Animated.View>
        );
      })}
    </View>
  );
}
