import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Rectangle5 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.colorFirebrick,
    width: 28,
    height: 28,
  },
});

export default Rectangle5;
