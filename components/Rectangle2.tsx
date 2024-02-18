import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle2 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#a8dadc",
    width: 28,
    height: 28,
  },
});

export default Rectangle2;
