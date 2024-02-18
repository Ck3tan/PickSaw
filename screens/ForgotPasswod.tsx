import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ForgotPasswod = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.forgotPasswod, styles.iconLayout]}>
      <Image
        style={[styles.forgotPasswodChild, styles.forgotLayout]}
        contentFit="cover"
        source={require("../assets/group-373.png")}
      />
      <Image
        style={[styles.forgotPasswodItem, styles.forgotLayout]}
        contentFit="cover"
        source={require("../assets/group-2011.png")}
      />
      <Text style={[styles.forgotPassword, styles.sendResetLinkTypo]}>
        Forgot Password
      </Text>
      <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
        Enter your email to verify your account. A verification code will be
        sent to the provided email for verification
      </Text>
      <Pressable
        style={styles.evaarrowIosBackFill}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/evaarrowiosbackfill.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.johndoegmailcom, styles.enterYourEmailTypo]}>
          johndoe@gmail.com
        </Text>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/mail1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.sendResetLink, styles.sendResetLinkTypo]}>
          Send Reset Link
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  forgotLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    width: "97.84%",
    height: "45.2%",
    position: "absolute",
    overflow: "hidden",
  },
  sendResetLinkTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  enterYourEmailTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 332,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  groupLayout: {
    height: 43,
    width: 325,
    position: "absolute",
  },
  forgotPasswodChild: {
    top: "26.6%",
    right: "-50.37%",
    bottom: "28.2%",
    left: "52.53%",
  },
  forgotPasswodItem: {
    top: "-20.2%",
    right: "47.49%",
    bottom: "75%",
    left: "-45.33%",
  },
  forgotPassword: {
    top: 40,
    left: 44,
    fontSize: FontSize.size_13xl,
    width: 162,
    color: Color.colorDarkslategray,
  },
  enterYourEmail: {
    top: 156,
    left: 42,
    fontFamily: FontFamily.poppinsRegular,
    width: 296,
    color: Color.colorDarkslategray,
  },
  icon: {
    height: "100%",
  },
  evaarrowIosBackFill: {
    left: 6,
    top: 45,
    width: 38,
    height: 38,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    height: 45,
    width: 332,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  johndoegmailcom: {
    top: 12,
    left: 57,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray_100,
    width: 175,
  },
  mailIcon: {
    top: 9,
    left: 16,
    width: 28,
    height: 26,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleParent: {
    top: 265,
    left: 22,
  },
  groupItem: {
    backgroundColor: Color.colorFirebrick,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  sendResetLink: {
    top: 10,
    left: 107,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  rectangleGroup: {
    top: 718,
    left: 25,
  },
  forgotPasswod: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default ForgotPasswod;
