import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("C:_reposlearning-react-nativeappassets\background.jpg")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 3,
  },
});

export default WelcomeScreen;
