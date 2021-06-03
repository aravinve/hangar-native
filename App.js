import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import InitialScreen from "./src/screens/InitialScreen";
import React from "react";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <InitialScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
  },
});

export default App;
