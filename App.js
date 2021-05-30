import { AxiosClient } from "./src/ApiClient";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { UserLoginOrRegisterComponent } from "./src/components/UserLoginOrRegisterComponent";
import React, { useEffect, useState } from "react";
import ServerUnreachableDialogComponent from "./src/components/ServerUnreachableDialogComponent";
import SplashscreenPage from "./src/screens/SplashscreenScreen";

const App = () => {
  const [isApiReachable, setIsApiReachable] = useState(false);

  useEffect(() => {
    AxiosClient.get("/health", {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        const { health } = res.data;
        if (health === "Up") {
          setIsApiReachable(true);
        }
      })
      .catch(() => {
        setIsApiReachable(false);
      });
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <SplashscreenPage>
          {!isApiReachable ? (
            <ServerUnreachableDialogComponent />
          ) : (
            <UserLoginOrRegisterComponent />
          )}
        </SplashscreenPage>
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
