import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <Text style={styles.notifications1}>Notifications</Text>
      <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-243.png")}
        />
        <Text style={styles.amnaNaeemLikedContainer}>
          <Text style={styles.amnaNaeem}>{`Amna Naeem `}</Text>
          <Text style={styles.likedYourWork}>liked your work</Text>
        </Text>
        <View style={styles.ellipseGroup}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-244.png")}
          />
          <Text
            style={[
              styles.ayeshaIkramFollowedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.amnaNaeem}>{`Ayesha Ikram `}</Text>
            <Text style={styles.likedYourWork}>followed your profile</Text>
          </Text>
        </View>
        <View style={[styles.ellipseContainer, styles.itemPosition]}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-245.png")}
          />
          <Text
            style={[styles.johnDoeCommentedContainer, styles.containerPosition]}
          >
            <Text style={styles.amnaNaeem}>{`John Doe `}</Text>
            <Text style={styles.likedYourWork}>commented on your picture</Text>
          </Text>
        </View>
        <Text style={styles.min}>6 MIN</Text>
        <Text style={[styles.min1, styles.minTypo]}>3 MIN</Text>
        <Text style={[styles.min2, styles.minTypo]}>3 MIN</Text>
      </View>
      <View style={[styles.groupView, styles.ellipseParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-243.png")}
        />
        <Text style={styles.amnaNaeemLikedContainer}>
          <Text style={styles.amnaNaeem}>{`Amna Naeem `}</Text>
          <Text style={styles.likedYourWork}>liked your work</Text>
        </Text>
        <View style={styles.ellipseGroup}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-244.png")}
          />
          <Text
            style={[
              styles.ayeshaIkramFollowedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.amnaNaeem}>{`Ayesha Ikram `}</Text>
            <Text style={styles.likedYourWork}>followed your profile</Text>
          </Text>
        </View>
        <View style={[styles.ellipseContainer, styles.itemPosition]}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-245.png")}
          />
          <Text
            style={[styles.johnDoeCommentedContainer, styles.containerPosition]}
          >
            <Text style={styles.amnaNaeem}>{`John Doe `}</Text>
            <Text style={styles.likedYourWork}>commented on your picture</Text>
          </Text>
        </View>
        <Text style={styles.min}>6 MIN</Text>
        <Text style={[styles.min1, styles.minTypo]}>3 MIN</Text>
        <Text style={[styles.min2, styles.minTypo]}>3 MIN</Text>
      </View>
      <View style={[styles.ellipseParent3, styles.ellipseParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-243.png")}
        />
        <Text style={styles.amnaNaeemLikedContainer}>
          <Text style={styles.amnaNaeem}>{`Amna Naeem `}</Text>
          <Text style={styles.likedYourWork}>liked your work</Text>
        </Text>
        <View style={styles.ellipseGroup}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-244.png")}
          />
          <Text
            style={[
              styles.ayeshaIkramFollowedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.amnaNaeem}>{`Ayesha Ikram `}</Text>
            <Text style={styles.likedYourWork}>followed your profile</Text>
          </Text>
        </View>
        <View style={[styles.ellipseContainer, styles.itemPosition]}>
          <Image
            style={[styles.groupItem, styles.itemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-245.png")}
          />
          <Text
            style={[styles.johnDoeCommentedContainer, styles.containerPosition]}
          >
            <Text style={styles.amnaNaeem}>{`John Doe `}</Text>
            <Text style={styles.likedYourWork}>commented on your picture</Text>
          </Text>
        </View>
        <Text style={styles.min}>6 MIN</Text>
        <Text style={[styles.min1, styles.minTypo]}>3 MIN</Text>
        <Text style={[styles.min2, styles.minTypo]}>3 MIN</Text>
      </View>
      <Image
        style={styles.notificationsChild}
        contentFit="cover"
        source={require("../assets/group-202.png")}
      />
      <Image
        style={[styles.notificationsItem, styles.itemPosition]}
        contentFit="cover"
        source={require("../assets/group-961.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentLayout: {
    height: 148,
    width: 337,
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    top: 0,
    height: 40,
  },
  itemPosition: {
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    left: 55,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    top: 11,
    textAlign: "left",
    position: "absolute",
  },
  minTypo: {
    left: 310,
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  notifications1: {
    top: 45,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorDarkslategray,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    left: 2,
    height: 40,
    position: "absolute",
  },
  amnaNaeem: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  likedYourWork: {
    fontFamily: FontFamily.poppinsRegular,
  },
  amnaNaeemLikedContainer: {
    left: 57,
    width: 175,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    top: 11,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    height: 40,
    width: 40,
    top: 0,
  },
  ayeshaIkramFollowedContainer: {
    width: 200,
  },
  ellipseGroup: {
    top: 54,
    left: 1,
    width: 255,
    height: 40,
    position: "absolute",
  },
  johnDoeCommentedContainer: {
    width: 224,
  },
  ellipseContainer: {
    top: 108,
    width: 279,
    height: 40,
  },
  min: {
    top: 67,
    left: 309,
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  min1: {
    top: 13,
  },
  min2: {
    top: 120,
  },
  ellipseParent: {
    top: 95,
    left: 18,
  },
  groupView: {
    top: 257,
    left: 20,
    width: 337,
  },
  ellipseParent3: {
    top: 419,
    left: 20,
    width: 337,
  },
  notificationsChild: {
    height: "43.3%",
    width: "93.39%",
    top: "65.39%",
    right: "-52.32%",
    bottom: "-8.69%",
    left: "58.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
  },
  notificationsItem: {
    top: 699,
    width: 375,
    height: 113,
  },
  notifications: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Notifications;
