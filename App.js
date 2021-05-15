import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SplashscreenPage from "./src/pages/SplashscreenPage";

const App = () => {
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
