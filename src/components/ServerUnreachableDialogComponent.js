import { BackHandler, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";

export default function ServerUnreachableDialogComponent() {
  return (
    <View style={styles.modalView}>
      <Modal
        style={styles.innerModal}
        testID="serverErrorModal"
        isVisible={true}
      >
        <View style={styles.modalContent}>
          <Text testID="dialogTitle" style={styles.dialogText}>
            Unable to reach Hangar server
          </Text>
          <Pressable
            testID="dialogExitButton"
            style={styles.dismissButton}
            onPress={() => {
              BackHandler.exitApp();
            }}
          >
            <Text style={styles.dismissText}>EXIT</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 0,
  },
  innerModal: {
    margin: 0,
    justifyContent: "flex-end",
    borderRadius: 5,
  },
  modalContent: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  dialogText: {
    fontSize: 22,
    color: "gray",
    margin: 10,
    padding: 30,
    textAlign: "center",
  },
  dismissButton: {
    backgroundColor: "#843BF2",
  },
  dismissText: {
    color: "#FFFFFF",
    textAlign: "center",
    padding: 14,
    fontSize: 20,
  },
});
