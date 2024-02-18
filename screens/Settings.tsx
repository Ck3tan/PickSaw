import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settings}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Text style={styles.settings1}>Settings</Text>
      <Image
        style={styles.cisettingsFilledIcon}
        contentFit="cover"
        source={require("../assets/cisettingsfilled1.png")}
      />
      <Image
        style={[styles.settingsChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-203.png")}
      />
      <Pressable
        style={[styles.vectorParent, styles.groupPosition]}
        onPress={() => navigation.navigate("EditScreen")}
      >
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.editProfile, styles.groupChildPosition]}>
          Edit Profile
        </Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </Pressable>
      <Pressable
        style={[styles.vectorGroup, styles.groupPosition]}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.editProfile, styles.groupChildPosition]}>
          Reset Password
        </Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </Pressable>
      <Pressable
        style={[styles.vectorContainer, styles.groupPosition]}
        onPress={() => navigation.navigate("TermAndConditions")}
      >
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text
          style={[styles.editProfile, styles.groupChildPosition]}
        >{`Terms & Conditions`}</Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPosition]}
        onPress={() => navigation.navigate("FAQ")}
      >
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.editProfile, styles.groupChildPosition]}>FAQ</Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </Pressable>
      <View style={[styles.groupView, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.editProfile, styles.groupChildPosition]}>
          About Application
        </Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    right: "5.33%",
    width: "89.33%",
    height: "3.33%",
    left: "5.33%",
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    top: "5.79%",
    right: "92.27%",
    bottom: "92%",
    width: "2.4%",
    height: "2.22%",
    left: "5.33%",
    position: "absolute",
  },
  settings1: {
    top: 44,
    left: 43,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  cisettingsFilledIcon: {
    top: 45,
    left: 332,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  settingsChild: {
    height: "43.3%",
    width: "93.39%",
    top: "71.55%",
    right: "-49.12%",
    bottom: "-14.85%",
    left: "55.73%",
    opacity: 0.4,
    position: "absolute",
  },
  vectorIcon: {
    height: "55.56%",
    width: "2.39%",
    top: "11.11%",
    right: "0%",
    bottom: "33.33%",
    left: "97.61%",
    position: "absolute",
  },
  editProfile: {
    top: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  groupChild: {
    top: 27,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  vectorParent: {
    top: "11.21%",
    bottom: "85.47%",
  },
  vectorGroup: {
    top: "17%",
    bottom: "79.68%",
  },
  vectorContainer: {
    top: "22.78%",
    bottom: "73.89%",
  },
  groupPressable: {
    top: "28.57%",
    bottom: "68.1%",
  },
  groupView: {
    top: "34.36%",
    bottom: "62.32%",
  },
  settings: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
