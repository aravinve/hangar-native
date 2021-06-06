import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";

function LoginIconComponent({ icon, label, bgColor, labelColor }) {
  const styles = loginButtonStyle(bgColor, labelColor);
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <FontAwesomeIcon icon={icon} size={30} style={styles.buttonIcon} />
        <Text testID="loginButtonLabel" style={styles.labelText}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

function loginButtonStyle(bgColor, labelColor) {
  return StyleSheet.create({
    buttonContainer: {
      alignSelf: "center",
      width: "85%",
      backgroundColor: bgColor,
      color: labelColor,
      padding: 10,
      display: "flex",
      justifyContent: "center",
      marginTop: 20,
      borderRadius: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      flexDirection: "row",
      alignItems: "center",
    },
    buttonIcon: {
      color: labelColor,
    },
    labelText: {
      marginLeft: 10,
      color: labelColor,
      fontSize: 24,
    },
  });
}

LoginIconComponent.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
};

export default LoginIconComponent;
