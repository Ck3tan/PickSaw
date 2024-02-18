import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={styles.resetPassword}>
      <Image
        style={[styles.resetPasswordChild, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/group-372.png")}
      />
      <Image
        style={[styles.resetPasswordItem, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/group-2010.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.passwordUpdate, styles.passwordFlexBox]}>
          Password Update
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.resetPassword1, styles.passwordFlexBox]}>
        Reset Password
      </Text>
      <View style={styles.resetPasswordInner} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.password, styles.passwordFlexBox]}>Password</Text>
        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../assets/lock1.png")}
        />
        <Image
          style={[styles.invisibleIcon, styles.invisibleIconLayout]}
          contentFit="cover"
          source={require("../assets/invisible1.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.password, styles.passwordFlexBox]}>
          Old Password
        </Text>
        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../assets/lock1.png")}
        />
        <Image
          style={[styles.invisibleIcon, styles.invisibleIconLayout]}
          contentFit="cover"
          source={require("../assets/invisible1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.password, styles.passwordFlexBox]}>
          Password Confirmation
        </Text>
        <Image
          style={[styles.lockIcon2, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../assets/lock1.png")}
        />
        <Image
          style={[styles.invisibleIcon2, styles.invisibleIconLayout]}
          contentFit="cover"
          source={require("../assets/invisible1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resetLayout: {
    opacity: 0.4,
    width: "97.84%",
    height: "45.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 332,
    left: 22,
    position: "absolute",
  },
  lockIconLayout: {
    height: 21,
    width: 22,
    left: 19,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  invisibleIconLayout: {
    height: 19,
    width: 20,
    left: 295,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  resetPasswordChild: {
    top: "26.6%",
    right: "-50.37%",
    bottom: "28.2%",
    left: "52.53%",
  },
  resetPasswordItem: {
    top: "-20.2%",
    right: "47.49%",
    bottom: "75%",
    left: "-45.33%",
  },
  groupChild: {
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
  passwordUpdate: {
    top: 10,
    left: 90,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  rectangleParent: {
    top: 718,
    left: 25,
    height: 43,
    width: 325,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.22%",
    width: "2.4%",
    top: "5.67%",
    right: "92.27%",
    bottom: "92.12%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  resetPassword1: {
    top: 43,
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  resetPasswordInner: {
    top: 78,
    left: 20,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    height: 45,
    width: 332,
    borderStyle: "solid",
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
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  password: {
    left: 57,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray_100,
    width: 175,
    top: 12,
  },
  lockIcon: {
    top: 12,
  },
  invisibleIcon: {
    top: 13,
  },
  rectangleGroup: {
    top: 166,
  },
  rectangleContainer: {
    top: 101,
  },
  lockIcon2: {
    top: 13,
  },
  invisibleIcon2: {
    top: 12,
  },
  groupView: {
    top: 231,
  },
  resetPassword: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ResetPassword;
