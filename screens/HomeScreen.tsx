import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homescreen, styles.iconLayout]}>
      <View style={styles.homescreenChild} />
      <Image
        style={[styles.homescreenItem, styles.groupInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Pressable
        style={styles.fluentsend20Filled}
        onPress={() => navigation.navigate("ChatBox")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fluentsend20filled.png")}
        />
      </Pressable>
      <Image
        style={[styles.homescreenInner, styles.homescreenChildLayout]}
        contentFit="cover"
        source={require("../assets/group-105.png")}
      />
      <Image
        style={[styles.groupIcon, styles.homescreenChildLayout]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <Image
        style={[styles.homescreenChild1, styles.homescreenChildLayout]}
        contentFit="cover"
        source={require("../assets/group-46.png")}
      />
      <Image
        style={[styles.homescreenChild2, styles.homescreenChildLayout]}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
      <Image
        style={[styles.homescreenChild3, styles.homescreenChildLayout]}
        contentFit="cover"
        source={require("../assets/group-48.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={styles.carbonaddIcon}
        contentFit="cover"
        source={require("../assets/carbonadd.png")}
      />
      <View style={styles.frameView} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupItemShadowBox]} />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.adilIjaz}>Adil Ijaz</Text>
          <Text style={styles.userInterfaceDesign}>User Interface design</Text>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <View style={[styles.groupParent, styles.parentPosition]}>
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>212</Text>
          </View>
          <Pressable
            style={[styles.vectorParent, styles.parentPosition]}
            onPress={() => navigation.navigate("Comments")}
          >
            <Image
              style={[styles.vectorIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>121</Text>
          </Pressable>
          <Pressable
            style={styles.vectorGroup}
            onPress={() => navigation.navigate("Share1")}
          >
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>32</Text>
          </Pressable>
        </View>
        <Image
          style={[
            styles.mioptionsVerticalIcon,
            styles.fluentpeople28FilledLayout,
          ]}
          contentFit="cover"
          source={require("../assets/mioptionsvertical.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.rectangleView, styles.groupItemShadowBox]} />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.adilIjaz}>Adil Ijaz</Text>
          <Text style={styles.userInterfaceDesign}>User Interface design</Text>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <View style={[styles.groupParent, styles.parentPosition]}>
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>212</Text>
          </View>
          <View style={[styles.vectorParent, styles.parentPosition]}>
            <Image
              style={[styles.vectorIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>121</Text>
          </View>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>32</Text>
          </View>
        </View>
      </View>
      <View style={[styles.homescreenChild4, styles.groupItemShadowBox]} />
      <Image
        style={styles.homescreenChild5}
        contentFit="cover"
        source={require("../assets/group-56.png")}
      />
      <Pressable
        style={[styles.claritynotificationSolid, styles.bxbxsUserPosition]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/claritynotificationsolid.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bxbxsUser, styles.bxbxsUserPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bxbxsuser.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.fluentpeople28Filled, styles.fluentpeople28FilledLayout]}
        onPress={() => navigation.navigate("ExporeScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fluentpeople28filled.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupInnerLayout: {
    height: 47,
    width: 46,
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 242,
    position: "absolute",
  },
  homescreenChildLayout: {
    height: 70,
    width: 70,
    top: 115,
    position: "absolute",
  },
  groupLayout: {
    height: 356,
    width: 335,
  },
  groupItemShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  parentPosition: {
    bottom: "0.49%",
    top: "94.25%",
    width: "15.08%",
    height: "5.25%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    right: "43.81%",
    width: "56.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentpeople28FilledLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  bxbxsUserPosition: {
    top: 762,
    height: 25,
    width: 25,
    position: "absolute",
  },
  homescreenChild: {
    top: -3,
    backgroundColor: Color.colorDarkslategray,
    height: 227,
    width: 375,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  homescreenItem: {
    top: 48,
    left: 20,
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
  },
  search: {
    top: 13,
    left: 51,
    fontSize: FontSize.size_xs,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  searchIcon: {
    top: 11,
    left: 22,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 50,
    left: 74,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  fluentsend20Filled: {
    left: 326,
    top: 51,
    width: 35,
    height: 35,
    position: "absolute",
  },
  homescreenInner: {
    left: 16,
  },
  groupIcon: {
    left: 96,
  },
  homescreenChild1: {
    left: 176,
  },
  homescreenChild2: {
    left: 256,
  },
  homescreenChild3: {
    left: 336,
  },
  ellipseIcon: {
    top: 81,
    left: 54,
    width: 13,
    height: 13,
    position: "absolute",
  },
  carbonaddIcon: {
    top: 83,
    left: 56,
    width: 9,
    height: 9,
    position: "absolute",
    overflow: "hidden",
  },
  frameView: {
    top: 709,
    left: 154,
    width: 4,
    height: 1,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    height: 356,
    width: 335,
    top: 0,
  },
  groupInner: {
    top: 0,
    left: 0,
  },
  adilIjaz: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    left: 58,
    top: 6,
    textAlign: "left",
    position: "absolute",
  },
  userInterfaceDesign: {
    top: 27,
    color: Color.colorDarkgray_200,
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    left: 58,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rectangleIcon: {
    top: 63,
    left: 1,
    borderRadius: Border.br_3xs,
    width: 304,
    height: 226,
    position: "absolute",
  },
  groupIcon1: {
    height: "94.71%",
    width: "39.13%",
    right: "60.87%",
    bottom: "5.29%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  text: {
    left: 29,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  groupParent: {
    right: "77.7%",
    left: "7.21%",
  },
  vectorIcon: {
    width: "43.48%",
    right: "56.52%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    height: "100%",
  },
  text1: {
    left: 31,
    top: 0,
  },
  vectorParent: {
    right: "43.28%",
    left: "41.64%",
  },
  vectorIcon1: {
    bottom: "0%",
    top: "0%",
    right: "43.81%",
    width: "56.19%",
  },
  text2: {
    left: 29,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 6,
  },
  vectorGroup: {
    height: "7.29%",
    width: "13.77%",
    top: "92.71%",
    right: "12.79%",
    left: "73.44%",
    bottom: "0%",
    position: "absolute",
  },
  ellipseParent: {
    top: 14,
    left: 15,
    width: 305,
    height: 324,
    position: "absolute",
  },
  mioptionsVerticalIcon: {
    top: 26,
    left: 302,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 249,
    left: 20,
    position: "absolute",
  },
  groupIcon2: {
    height: "2.06%",
    width: "1.12%",
    top: "80.3%",
    right: "10.61%",
    bottom: "17.65%",
    left: "88.27%",
  },
  rectangleView: {
    height: 356,
    width: 335,
    top: 0,
  },
  vectorIcon3: {
    top: "43.22%",
    bottom: "-43.22%",
  },
  rectangleContainer: {
    top: 625,
    left: 20,
    position: "absolute",
  },
  homescreenChild4: {
    top: 732,
    height: 80,
    width: 375,
  },
  homescreenChild5: {
    top: 699,
    left: 152,
    width: 65,
    height: 65,
    position: "absolute",
  },
  claritynotificationSolid: {
    left: 237,
  },
  bxbxsUser: {
    left: 310,
  },
  fluentpeople28Filled: {
    left: 106,
    top: 759,
  },
  vectorIcon4: {
    height: "2.57%",
    width: "5.89%",
    top: "93.84%",
    right: "85.04%",
    bottom: "3.58%",
    left: "9.07%",
  },
  homescreen: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default HomeScreen;
