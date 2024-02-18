import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const WelcomeScreenSplashScreen = () => {
  return (
    <View style={styles.welcomeScreensplashscreen}>
      <Image
        style={styles.slack2Icon}
        contentFit="cover"
        source={require("../assets/slack-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slack2Icon: {
    width: 137,
    height: 137,
  },
  welcomeScreensplashscreen: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreenSplashScreen;
