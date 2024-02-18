import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ResetPassword1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.resetPassword, styles.iconLayout]}>
      <Image
        style={[styles.resetPasswordChild, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/group-374.png")}
      />
      <Image
        style={[styles.resetPasswordItem, styles.resetLayout]}
        contentFit="cover"
        source={require("../assets/group-2012.png")}
      />
      <Text style={[styles.resetPassword1, styles.resetTypo]}>
        Reset Password
      </Text>
      <Text style={[styles.setTheNew, styles.passwordTypo]}>
        Set the new password for your account so that you can login and enjoy
        using the app.
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
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.resetPassword2, styles.resetTypo]}>
          Reset Password
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
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
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.password, styles.passwordTypo]}>
            Password Confirmation
          </Text>
          <Image
            style={[styles.lockIcon1, styles.lockIconLayout]}
            contentFit="cover"
            source={require("../assets/lock1.png")}
          />
          <Image
            style={[styles.invisibleIcon1, styles.invisibleIconLayout]}
            contentFit="cover"
            source={require("../assets/invisible1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  resetLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    width: "97.84%",
    height: "45.2%",
    position: "absolute",
    overflow: "hidden",
  },
  resetTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    width: 332,
    left: 0,
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
  resetPassword1: {
    top: 40,
    left: 44,
    fontSize: FontSize.size_13xl,
    width: 162,
    color: Color.colorDarkslategray,
  },
  setTheNew: {
    top: 148,
    left: 45,
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
  resetPassword2: {
    top: 10,
    left: 98,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 718,
    left: 25,
    height: 43,
    width: 325,
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    height: 45,
    width: 332,
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
    top: 0,
    height: 45,
  },
  lockIcon1: {
    top: 13,
  },
  invisibleIcon1: {
    top: 12,
  },
  rectangleContainer: {
    top: 65,
  },
  groupParent: {
    top: 559,
    left: 24,
    height: 110,
    width: 332,
    position: "absolute",
  },
  resetPassword: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default ResetPassword1;
