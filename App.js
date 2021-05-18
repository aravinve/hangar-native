import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import config from "./src/config";
import SplashscreenPage from "./src/pages/SplashscreenPage";

const App = () => {
  useEffect(() => {
    fetch(`https://${config.hostname}/health`, {
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.json());
    });
  });

  return (
    <SafeAreaView style={styles.appContainer}>
      <SplashscreenPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
  },
});

export default App;
