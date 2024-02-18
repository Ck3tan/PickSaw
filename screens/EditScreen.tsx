import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EditScreen = () => {
  return (
    <View style={styles.editScreen}>
      <Image
        style={[styles.editScreenChild, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/group-371.png")}
      />
      <Image
        style={[styles.editScreenItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/group-209.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        </View>
        <Text style={[styles.firstName, styles.firstNameTypo]}>First Name</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={styles.rectangleWrapper}>
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
          +855 764891293
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupViewLayout]} />
        <Text style={[styles.johndoegmailcom, styles.firstNameTypo]}>
          Gender
        </Text>
      </View>
      <Image
        style={styles.editScreenInner}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.updateProfile, styles.profileTypo]}>
          Update Profile
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.editProfile, styles.profileTypo]}>Edit Profile</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  editLayout: {
    opacity: 0.4,
    width: "97.84%",
    height: "45.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupViewLayout: {
    width: 332,
    height: 45,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 43,
    width: 325,
    position: "absolute",
  },
  profileTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "11.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editScreenChild: {
    top: "26.6%",
    right: "-50.37%",
    bottom: "28.2%",
    left: "52.53%",
  },
  editScreenItem: {
    top: "-20.2%",
    right: "47.49%",
    bottom: "75%",
    left: "-45.33%",
  },
  groupChild: {
    height: 45,
    width: 157,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    height: 45,
    width: 157,
    position: "absolute",
  },
  firstName: {
    top: 13,
    left: 14,
    width: 88,
  },
  groupParent: {
    left: 22,
    top: 373,
    width: 157,
  },
  groupItem: {
    height: 45,
    width: 157,
    position: "absolute",
  },
  groupContainer: {
    left: 197,
    top: 373,
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
    top: 12,
    left: 57,
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
    top: 438,
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
  rectangleGroup: {
    top: 503,
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
  groupView: {
    top: 568,
    left: 24,
  },
  editScreenInner: {
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
  updateProfile: {
    top: 10,
    left: 105,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
  },
  rectangleParent1: {
    top: 718,
    left: 25,
  },
  vectorIcon: {
    width: "2.4%",
    top: "5.67%",
    right: "92.27%",
    bottom: "92.12%",
    left: "5.33%",
    height: "2.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editProfile: {
    top: 43,
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray,
  },
  vectorIcon1: {
    height: "2.5%",
    width: "5.41%",
    top: "63.42%",
    right: "83.39%",
    bottom: "34.08%",
  },
  vectorIcon2: {
    width: "4.8%",
    top: "71.67%",
    right: "84%",
    bottom: "26.11%",
    height: "2.22%",
  },
  lineView: {
    top: 78,
    left: 20,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  editScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EditScreen;
