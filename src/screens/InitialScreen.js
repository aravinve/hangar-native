import { AxiosClient } from "../ApiClient";
import { UserLoginOrRegisterComponent } from "components/UserLoginOrRegisterComponent";
import React, { useEffect, useState } from "react";
import ServerUnreachableDialogComponent from "components/ServerUnreachableDialogComponent";
import SplashScreen from "./SplashscreenScreen";

export default function InitialScreen() {
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
    <SplashScreen>
      {!isApiReachable ? (
        <ServerUnreachableDialogComponent />
      ) : (
        <UserLoginOrRegisterComponent />
      )}
    </SplashScreen>
  );
}
