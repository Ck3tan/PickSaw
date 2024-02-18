import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Share1 = () => {
  return (
    <View style={styles.share}>
      <View style={[styles.shareChild, styles.sharePosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.search, styles.searchFlexBox]}>Search</Text>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Image
        style={styles.fluentsend20FilledIcon}
        contentFit="cover"
        source={require("../assets/fluentsend20filled.png")}
      />
      <Image
        style={styles.shareItem}
        contentFit="cover"
        source={require("../assets/group-77.png")}
      />
      <View style={[styles.shareInner, styles.sharePosition]} />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.shareChild1, styles.lineViewBorder]} />
      <Text style={[styles.searchFriend, styles.searchFlexBox]}>
        Search Friend
      </Text>
      <View style={[styles.vectorParent, styles.vectorParentPosition1]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Nina Doe</Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Nina Doe</Text>
      </View>
      <View style={[styles.vectorContainer, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Nina Doe</Text>
      </View>
      <View style={[styles.groupView, styles.vectorParentPosition1]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-181.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>
          Ayesha Ikram
        </Text>
      </View>
      <View style={[styles.vectorParent1, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-181.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>
          Ayesha Ikram
        </Text>
      </View>
      <View style={[styles.vectorParent2, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-181.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>
          Ayesha Ikram
        </Text>
      </View>
      <View style={styles.vectorParent3}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-182.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Ali Ahmad</Text>
      </View>
      <View style={[styles.vectorParent4, styles.vectorParentPosition1]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-182.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Ali Ahmad</Text>
      </View>
      <View style={[styles.vectorParent5, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.userInterfaceDesign, styles.ninaDoePosition]}>
          User Interface design
        </Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-182.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Ali Ahmad</Text>
      </View>
      <Image
        style={styles.shareChild2}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.groupIcon, styles.shareChildLayout]}
        contentFit="cover"
        source={require("../assets/group-451.png")}
      />
      <Image
        style={[styles.shareChild3, styles.shareChildLayout]}
        contentFit="cover"
        source={require("../assets/group-461.png")}
      />
      <Image
        style={[styles.shareChild4, styles.shareChildLayout]}
        contentFit="cover"
        source={require("../assets/group-471.png")}
      />
      <Image
        style={[styles.shareChild5, styles.shareChildLayout]}
        contentFit="cover"
        source={require("../assets/group-481.png")}
      />
      <Image
        style={styles.bytesizesearchIcon}
        contentFit="cover"
        source={require("../assets/bytesizesearch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sharePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 242,
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  searchFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  vectorParentPosition1: {
    left: "5.33%",
    right: "4.11%",
    width: "90.56%",
    height: "5.05%",
    position: "absolute",
  },
  ninaDoePosition: {
    left: 52,
    textAlign: "left",
    position: "absolute",
  },
  vectorParentPosition: {
    left: "5.6%",
    right: "3.84%",
    width: "90.56%",
    height: "5.05%",
    position: "absolute",
  },
  shareChildLayout: {
    height: 70,
    width: 70,
    top: 111,
    position: "absolute",
  },
  shareChild: {
    top: -3,
    backgroundColor: Color.colorDarkslategray,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 227,
    borderRadius: Border.br_xl,
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    height: 42,
    width: 242,
    borderRadius: Border.br_xl,
  },
  search: {
    top: 13,
    left: 51,
    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
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
    position: "absolute",
  },
  fluentsend20FilledIcon: {
    top: 51,
    left: 326,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  shareItem: {
    top: 48,
    width: 47,
    height: 47,
    left: 20,
    position: "absolute",
  },
  shareInner: {
    top: 198,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 614,
  },
  lineView: {
    top: 206,
    left: 97,
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 4,
    width: 176,
    height: 4,
  },
  shareChild1: {
    top: 267,
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 20,
  },
  searchFriend: {
    top: 242,
    left: 45,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGainsboro_200,
    width: 101,
    textTransform: "capitalize",
  },
  vectorIcon: {
    height: "57.56%",
    width: "6.95%",
    top: "14.63%",
    right: "0%",
    bottom: "27.8%",
    left: "93.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userInterfaceDesign: {
    top: 21,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray_200,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
  },
  groupItem: {
    width: 41,
    height: 41,
  },
  ninaDoe: {
    top: 3,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  vectorParent: {
    top: "35.34%",
    bottom: "59.61%",
  },
  vectorGroup: {
    top: "56.03%",
    bottom: "38.92%",
  },
  vectorContainer: {
    top: "76.72%",
    bottom: "18.23%",
  },
  groupView: {
    top: "42.24%",
    bottom: "52.71%",
  },
  vectorParent1: {
    top: "62.93%",
    bottom: "32.02%",
  },
  vectorParent2: {
    top: "83.62%",
    bottom: "11.33%",
  },
  vectorParent3: {
    top: "49.14%",
    right: "4.37%",
    bottom: "45.81%",
    left: "5.07%",
    width: "90.56%",
    height: "5.05%",
    position: "absolute",
  },
  vectorParent4: {
    top: "69.83%",
    bottom: "25.12%",
  },
  vectorParent5: {
    top: "90.52%",
    bottom: "4.43%",
  },
  shareChild2: {
    top: 115,
    left: 18,
    width: 62,
    height: 62,
    position: "absolute",
  },
  groupIcon: {
    left: 94,
  },
  shareChild3: {
    left: 174,
  },
  shareChild4: {
    left: 254,
  },
  shareChild5: {
    left: 334,
  },
  bytesizesearchIcon: {
    top: 246,
    left: 24,
    width: 13,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  share: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Share1;
