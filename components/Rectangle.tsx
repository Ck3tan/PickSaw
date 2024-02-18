import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#e63946",
    width: 28,
    height: 28,
  },
});

export default Rectangle;
