import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Comments = () => {
  return (
    <View style={styles.comments}>
      <View style={[styles.commentsChild, styles.commentsChildPosition]} />
      <Image
        style={[styles.commentsItem, styles.ellipseIconPosition]}
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
      <Image
        style={styles.fluentsend20FilledIcon}
        contentFit="cover"
        source={require("../assets/fluentsend20filled.png")}
      />
      <Image
        style={styles.commentsInner}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={styles.carbonaddIcon}
        contentFit="cover"
        source={require("../assets/carbonadd.png")}
      />
      <View style={styles.frameView} />
      <Image
        style={styles.fluentpeople28FilledIcon}
        contentFit="cover"
        source={require("../assets/fluentpeople28filled.png")}
      />
      <View style={[styles.rectangleView, styles.commentsChildPosition]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.lineParent}>
        <View style={[styles.groupItem, styles.lineViewBorder]} />
        <Text style={[styles.comments1, styles.replyTypo]}>Comments</Text>
      </View>
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>Nina Doe</Text>
        <Text style={[styles.hiThatReally, styles.ninaDoePosition]}>
          Hi that really looking amazing!
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.min, styles.minText]}>12 MIN</Text>
        <Text style={[styles.reply, styles.minText]}>Reply</Text>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-181.png")}
        />
        <Text style={[styles.ninaDoe, styles.ninaDoePosition]}>
          Ayesha Ikram
        </Text>
        <Text style={[styles.hiThatReally, styles.ninaDoePosition]}>
          NIce one.
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.min, styles.minText]}>6 MIN</Text>
        <Text style={[styles.reply, styles.minText]}>Reply</Text>
      </View>
      <Image
        style={styles.commentsChild1}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.commentsChild2, styles.commentsChildLayout]}
        contentFit="cover"
        source={require("../assets/group-451.png")}
      />
      <Image
        style={[styles.commentsChild3, styles.commentsChildLayout]}
        contentFit="cover"
        source={require("../assets/group-461.png")}
      />
      <Image
        style={[styles.commentsChild4, styles.commentsChildLayout]}
        contentFit="cover"
        source={require("../assets/group-471.png")}
      />
      <Image
        style={[styles.commentsChild5, styles.commentsChildLayout]}
        contentFit="cover"
        source={require("../assets/group-481.png")}
      />
      <Image
        style={[styles.commentsChild6, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-206.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentsChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 20,
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 242,
    position: "absolute",
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  replyTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ellipseLayout: {
    height: 52,
    width: 330,
    left: 20,
    position: "absolute",
  },
  ninaDoePosition: {
    color: Color.colorBlack,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  minText: {
    color: Color.colorDarkslategray,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  commentsChildLayout: {
    height: 70,
    width: 70,
    top: 111,
    position: "absolute",
  },
  commentsChild: {
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
  commentsItem: {
    top: 48,
    width: 46,
    height: 47,
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
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
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
  fluentsend20FilledIcon: {
    top: 51,
    left: 326,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  commentsInner: {
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
  fluentpeople28FilledIcon: {
    top: 759,
    left: 106,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 198,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 614,
  },
  ellipseIcon: {
    top: 758,
    width: 33,
    height: 34,
  },
  lineView: {
    top: 206,
    left: 97,
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 4,
    width: 176,
    height: 4,
  },
  groupItem: {
    top: 27,
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    width: 290,
    height: 1,
    left: 0,
  },
  comments1: {
    left: 3,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_200,
    textTransform: "capitalize",
    fontWeight: "500",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    top: 762,
    left: 58,
    width: 289,
    height: 27,
    position: "absolute",
  },
  groupInner: {
    top: 3,
    width: 41,
    height: 41,
    left: 0,
    position: "absolute",
  },
  ninaDoe: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  hiThatReally: {
    top: 15,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  groupIcon: {
    height: "23.08%",
    width: "4.08%",
    top: "28.85%",
    right: "0%",
    bottom: "48.08%",
    left: "95.92%",
  },
  min: {
    top: 36,
    fontSize: FontSize.size_3xs,
    left: 50,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsRegular,
  },
  reply: {
    top: 34,
    left: 88,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  ellipseParent: {
    top: 240,
  },
  ellipseGroup: {
    top: 309,
  },
  commentsChild1: {
    top: 115,
    left: 18,
    width: 62,
    height: 62,
    position: "absolute",
  },
  commentsChild2: {
    left: 94,
  },
  commentsChild3: {
    left: 174,
  },
  commentsChild4: {
    left: 254,
  },
  commentsChild5: {
    left: 334,
  },
  commentsChild6: {
    height: "43.3%",
    width: "93.39%",
    top: "72.66%",
    right: "-50.19%",
    bottom: "-15.96%",
    left: "56.8%",
    opacity: 0.4,
  },
  comments: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Comments;
