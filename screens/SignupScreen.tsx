import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SignupScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.signupScreen, styles.iconLayout]}>
      <Image
        style={[styles.signupScreenChild, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/group-37.png")}
      />
      <Image
        style={[styles.signupScreenItem, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/group-208.png")}
      />
      <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign up</Text>
      <View style={styles.loginParent}>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login!</Text>
        </Pressable>
        <Text style={[styles.alreadyHaveAn, styles.bySigningUpTypo]}>
          Already Have an Account?
        </Text>
      </View>
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
      <Text style={[styles.bySigningUpContainer, styles.signUpFlexBox]}>
        <Text
          style={styles.bySigningUpTypo}
        >{`By signing up you’re agree to our `}</Text>
        <Text style={styles.login1Typo}>{`Terms & Conditions`}</Text>
        <Text style={styles.bySigningUpTypo}>{` and `}</Text>
        <Text style={styles.login1Typo}>Privacy Policy</Text>
      </Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        </View>
        <Text style={[styles.firstName, styles.firstNameTypo]}>First Name</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        </View>
        <Text style={[styles.firstName, styles.firstNameTypo]}>Last Name</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupViewLayout]}>
        <View style={[styles.groupInner, styles.groupViewLayout]} />
        <Text style={[styles.johndoegmailcom, styles.firstNameTypo]}>
          johndoe@gmail.com
        </Text>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/mail1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.johndoegmailcom, styles.firstNameTypo]}>
          Password
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
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupViewLayout]} />
        <Text style={[styles.johndoegmailcom, styles.firstNameTypo]}>
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
      <Image
        style={styles.signupScreenInner}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.signup, styles.signUpFlexBox]}>Signup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  signupLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    width: "97.84%",
    height: "45.2%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  login1Typo: {
    color: Color.colorFirebrick,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bySigningUpTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
  },
  groupLayout: {
    height: 45,
    width: 157,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
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
    backgroundColor: Color.colorWhite,
  },
  firstNameTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupViewLayout: {
    width: 332,
    height: 45,
    position: "absolute",
  },
  lockIconLayout: {
    width: 22,
    left: 19,
    borderRadius: Border.br_xl,
    height: 21,
    position: "absolute",
  },
  invisibleIconLayout: {
    height: 19,
    width: 20,
    left: 295,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 43,
    width: 325,
    position: "absolute",
  },
  signupScreenChild: {
    top: "26.6%",
    right: "-50.37%",
    bottom: "28.2%",
    left: "52.53%",
  },
  signupScreenItem: {
    top: "-20.2%",
    right: "47.49%",
    bottom: "75%",
    left: "-45.33%",
  },
  signUp: {
    top: 40,
    left: 44,
    fontSize: FontSize.size_13xl,
    width: 162,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  login1: {
    width: 58,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  login: {
    left: 192,
    top: 0,
    position: "absolute",
  },
  alreadyHaveAn: {
    width: 201,
    left: 0,
    top: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  loginParent: {
    top: 88,
    left: 45,
    width: 250,
    height: 21,
    position: "absolute",
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
  bySigningUpContainer: {
    top: 619,
    fontSize: FontSize.size_xs,
    width: 329,
    left: 25,
  },
  groupChild: {
    height: 45,
    width: 157,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  firstName: {
    left: 14,
    width: 88,
    top: 13,
  },
  groupParent: {
    left: 22,
    top: 359,
    width: 157,
  },
  groupItem: {
    height: 45,
    width: 157,
    position: "absolute",
  },
  groupContainer: {
    left: 197,
    top: 359,
    width: 157,
  },
  groupInner: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
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
    backgroundColor: Color.colorWhite,
  },
  johndoegmailcom: {
    left: 57,
    width: 175,
    top: 12,
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
    top: 424,
    left: 22,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
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
    backgroundColor: Color.colorWhite,
  },
  lockIcon: {
    top: 12,
  },
  invisibleIcon: {
    top: 13,
  },
  rectangleGroup: {
    top: 489,
    left: 22,
  },
  groupChild1: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
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
    backgroundColor: Color.colorWhite,
  },
  lockIcon1: {
    top: 13,
  },
  invisibleIcon1: {
    top: 12,
  },
  groupView: {
    top: 554,
    left: 22,
  },
  signupScreenInner: {
    top: 179,
    left: 134,
    width: 115,
    height: 112,
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorFirebrick,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 325,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  signup: {
    top: 10,
    left: 136,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  rectangleParent1: {
    top: 718,
    left: 25,
  },
  signupScreen: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default SignupScreen;
