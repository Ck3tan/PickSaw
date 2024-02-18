import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Carbonadd = () => {
  return (
    <View style={styles.carbonadd}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "50%",
    width: "50%",
    top: "25.2%",
    right: "24.8%",
    bottom: "24.8%",
    left: "25.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  carbonadd: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
});

export default Carbonadd;
