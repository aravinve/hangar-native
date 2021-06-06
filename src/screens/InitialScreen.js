import { AxiosClient } from "../ApiClient";
import { SafeAreaView, StyleSheet } from "react-native";
import { UserLoginOrRegisterComponent } from "components/UserLoginOrRegisterComponent";
import React, { useEffect, useState } from "react";
import ServerUnreachableDialogComponent from "components/ServerUnreachableDialogComponent";
import SplashScreen from "./SplashscreenScreen";

export default function InitialScreen({ navigationProps }) {
  const [isApiReachable, setIsApiReachable] = useState(false);

  useEffect(() => {
    AxiosClient.get("/health")
      .then((res) => {
        const { health } = res.data;
        if (health === "Up") {
          setIsApiReachable(true);
        }
      })
      .catch(() => {
        setIsApiReachable(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <SplashScreen navigationProps={navigationProps}>
        {!isApiReachable ? (
          <ServerUnreachableDialogComponent key="serverUnreachableComponent" />
        ) : (
          <UserLoginOrRegisterComponent key="userLoginComponent" />
        )}
      </SplashScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
  },
});
