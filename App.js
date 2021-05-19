import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Modal, Text } from "react-native";
import config from "./src/config";
import SplashscreenPage from "./src/pages/SplashscreenPage";

const App = () => {
  const [isApiReachable, setIsApiReachable] = useState(false);

  useEffect(() => {
    fetch(`https://${config.hostname}/health`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setIsApiReachable(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <SafeAreaView style={styles.appContainer}>
      <SplashscreenPage />
      {!isApiReachable ? (
        <Modal
          animationType="fade"
          visible={!isApiReachable}
          transparent={true}
        >
          <Text>Unable to reach Hangar server</Text>
        </Modal>
      ) : null}
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
