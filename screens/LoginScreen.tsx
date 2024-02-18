import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginScreen}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </View>
      <View style={styles.frame}>
        <Image
          style={styles.slack2Icon}
          contentFit="cover"
          source={require("../assets/slack-21.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
      </View>
      <View style={styles.frame1}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-201.png")}
        />
        <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPasswod")}
        >
          <Text style={[styles.forgotPassword1, styles.signupTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
        <View style={styles.signupParent}>
          <Text style={[styles.signup, styles.signupTypo]}>Signup!</Text>
          <Text style={styles.dontHaveAn}>Don’t Have an Account?</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild1, styles.rectangleLayout]} />
          <Text style={[styles.password, styles.passwordPosition]}>
            Password
          </Text>
          <Image
            style={[styles.lockIcon, styles.passwordPosition]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <Image
            style={styles.invisibleIcon}
            contentFit="cover"
            source={require("../assets/invisible.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 45,
    left: 0,
    width: 325,
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorDarkgray_100,
    left: 55,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  signupTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  passwordPosition: {
    top: 12,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 43,
    width: 325,
    position: "absolute",
  },
  login: {
    top: 10,
    left: 136,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 718,
    height: 43,
    width: 325,
    left: 25,
    position: "absolute",
  },
  slack2Icon: {
    top: 271,
    left: 298,
    width: 137,
    height: 137,
    position: "absolute",
  },
  frameItem: {
    height: "89.95%",
    width: "84.34%",
    right: "15.66%",
    bottom: "10.05%",
    left: "0%",
  },
  frame: {
    top: -172,
    left: -179,
    width: 435,
    height: 408,
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
    height: "79.78%",
    width: "69.24%",
    right: "0%",
    bottom: "20.22%",
    left: "30.76%",
  },
  login1: {
    top: 179,
    fontSize: FontSize.size_13xl,
    width: 95,
    color: Color.colorDarkslategray,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleView: {
    top: 264,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    height: 45,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  username: {
    top: 276,
    width: 78,
    position: "absolute",
  },
  mailIcon: {
    top: 273,
    left: 16,
    width: 28,
    height: 26,
    position: "absolute",
  },
  forgotPassword1: {
    width: 133,
    color: Color.colorDarkslategray,
  },
  forgotPassword: {
    left: 192,
    top: 387,
    position: "absolute",
  },
  signup: {
    left: 170,
    color: Color.colorFirebrick,
    width: 58,
    top: 0,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
    width: 179,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  signupParent: {
    top: 439,
    left: 52,
    width: 227,
    height: 21,
    position: "absolute",
  },
  frameChild1: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    height: 45,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  password: {
    width: 74,
    color: Color.colorDarkgray_100,
    left: 55,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  lockIcon: {
    left: 18,
    width: 22,
    height: 21,
    borderRadius: Border.br_xl,
  },
  invisibleIcon: {
    top: 14,
    left: 283,
    width: 20,
    height: 19,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleGroup: {
    top: 329,
  },
  frame1: {
    top: 227,
    width: 530,
    height: 460,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  loginScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginScreen;
