import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import UserLoginService from "./userLogin.service";

export default function Splashscreen({ loginProp, navigation }) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    UserLoginService.checkLoginStatus()
      .then((res) => {
        const { userLoginData } = res;
        const { userId } = userLoginData;

        if (userId && loginProp.key !== "serverUnreachableComponent") {
          navigation.navigate("HomeScreen", { userId });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [loginProp, navigation]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <Image testID="logoImage" style={styles.logoStyle} source={Logo} />
      <Text testID="logoLabel" style={styles.labelStyle}>
        Hangar
      </Text>
      <View>{loginProp}</View>
      {isError ? (
        <View>
          <Text>Unable to fetch user data</Text>
        </View>
      ) : null}
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
