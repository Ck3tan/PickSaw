import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#f1faee",
    width: 28,
    height: 28,
  },
});

export default Rectangle1;
