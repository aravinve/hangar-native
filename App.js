import { AxiosClient } from "./src/ApiClient";
import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ServerUnreachableDialogComponent from "./src/components/ServerUnreachableDialogComponent";
import SplashscreenPage from "./src/pages/SplashscreenPage";

const App = () => {
  const [isApiReachable, setIsApiReachable] = useState(false);

  useEffect(() => {
    AxiosClient.get("/health", {
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      setIsApiReachable(true);
    });
  });

  return (
    <SafeAreaView style={styles.appContainer}>
      <SplashscreenPage />
      {!isApiReachable ? <ServerUnreachableDialogComponent /> : null}
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
