import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ExporeScreen = () => {
  return (
    <View style={styles.exporeScreen}>
      <View style={styles.exporeScreenChild} />
      <View style={styles.exporeScreenItem} />
      <Text style={styles.explore}>Explore</Text>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={styles.exporeScreenInner} />
      <Text style={[styles.all, styles.allTypo]}>All</Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.nature, styles.allTypo]}>Nature</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <View style={[styles.rectangleContainer, styles.groupContainerLayout]}>
          <View style={[styles.groupItem, styles.groupContainerLayout]} />
        </View>
        <Text style={[styles.nature, styles.allTypo]}>Business</Text>
      </View>
      <View style={[styles.groupView, styles.groupContainerLayout]}>
        <View style={[styles.rectangleContainer, styles.groupContainerLayout]}>
          <View style={[styles.groupItem, styles.groupContainerLayout]} />
        </View>
        <Text style={[styles.nature, styles.allTypo]}>Computer</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Text style={[styles.ayeshaIkram, styles.amnaNaeemTypo]}>
          Ayesha Ikram
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-301.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-241.png")}
        />
        <Text style={[styles.ayeshaIkram, styles.amnaNaeemTypo]}>John Doe</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
        <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-302.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Text style={[styles.ayeshaIkram, styles.amnaNaeemTypo]}>
          Ayesha Ikram
        </Text>
      </View>
      <View style={[styles.exporeScreenChild1, styles.groupChildShadowBox]} />
      <Image
        style={[styles.exporeScreenChild2, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-303.png")}
      />
      <Image
        style={[styles.exporeScreenChild3, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-242.png")}
      />
      <Text style={[styles.amnaNaeem, styles.amnaNaeemTypo]}>Amna Naeem</Text>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild7, styles.groupChildShadowBox]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-304.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-242.png")}
        />
        <Text style={[styles.ayeshaIkram, styles.amnaNaeemTypo]}>
          Amna Naeem
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild10, styles.groupChildShadowBox]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-305.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-242.png")}
        />
        <Text style={[styles.ayeshaIkram, styles.amnaNaeemTypo]}>
          Amna Naeem
        </Text>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-96.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 92,
    height: 38,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  groupContainerLayout: {
    width: 105,
    height: 38,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderRadius: Border.br_3xs,
    height: 180,
    width: 156,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 138,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    width: 156,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  amnaNaeemTypo: {
    height: 17,
    width: 99,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    top: 401,
    height: 180,
    width: 156,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 601,
    height: 180,
    width: 156,
    position: "absolute",
  },
  exporeScreenChild: {
    width: 376,
    height: 123,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  exporeScreenItem: {
    top: 48,
    backgroundColor: Color.colorSlategray,
    width: 335,
    height: 42,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  explore: {
    top: 61,
    left: 57,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray,
    width: 60,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon: {
    top: 60,
    left: 29,
    width: 28,
    height: 20,
    position: "absolute",
  },
  exporeScreenInner: {
    height: 38,
    top: 143,
    width: 60,
    left: 20,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  all: {
    top: 152,
    left: 41,
    color: Color.colorWhite,
  },
  groupChild: {
    width: 92,
    height: 38,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  nature: {
    top: 9,
    left: 22,
    color: Color.colorDarkslategray,
  },
  groupParent: {
    left: 89,
    top: 143,
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 190,
    top: 143,
  },
  groupView: {
    left: 304,
    top: 143,
  },
  rectangleView: {
    left: 0,
    top: 0,
  },
  rectangleIcon: {
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 146,
    left: 13,
  },
  ayeshaIkram: {
    top: 150,
    left: 47,
  },
  rectangleParent: {
    height: 180,
    width: 156,
    top: 201,
    left: 20,
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    left: 20,
  },
  groupChild4: {
    left: 0,
    top: 0,
  },
  rectangleParent1: {
    left: 199,
  },
  exporeScreenChild1: {
    left: 199,
    top: 201,
  },
  exporeScreenChild2: {
    left: 199,
    top: 201,
  },
  exporeScreenChild3: {
    top: 347,
    left: 212,
  },
  amnaNaeem: {
    top: 351,
    left: 246,
  },
  groupChild7: {
    left: 0,
    top: 0,
  },
  rectangleParent2: {
    left: 20,
  },
  groupChild10: {
    left: 0,
    top: 0,
  },
  rectangleParent3: {
    left: 199,
  },
  groupIcon: {
    top: 699,
    width: 375,
    height: 113,
    left: 0,
    position: "absolute",
  },
  exporeScreen: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default ExporeScreen;
