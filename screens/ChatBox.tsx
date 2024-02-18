import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ChatBox = () => {
  return (
    <View style={styles.chatbox}>
      <View style={[styles.chatboxChild, styles.chatboxPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search2.png")}
        />
      </View>
      <View style={[styles.chatboxItem, styles.chatboxPosition]} />
      <Text style={[styles.hiWhatsYour, styles.helloClr]}>
        Hi! whats your plain for tonight?
      </Text>
      <Text style={[styles.minAgo, styles.minTypo1]}>5 min Ago</Text>
      <Image
        style={[styles.chatboxInner, styles.chatboxChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-183.png")}
      />
      <Text style={[styles.ayeshaIkram, styles.johnLayout]}>Ayesha Ikram</Text>
      <Image
        style={[styles.ellipseIcon, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild3, styles.chatboxChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textTypo]}>3</Text>
      </View>
      <View style={[styles.lineView, styles.chatboxChildLayout]} />
      <Text style={[styles.hiWhatsYour1, styles.helloClr]}>
        Hi! whats your plain for tonight?
      </Text>
      <Text style={[styles.minAgo1, styles.minTypo1]}>5 min Ago</Text>
      <Image
        style={[styles.chatboxChild4, styles.chatboxChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-183.png")}
      />
      <Text style={[styles.ayeshaIkram1, styles.johnLayout]}>Ayesha Ikram</Text>
      <Image
        style={[styles.chatboxChild5, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild6, styles.chatboxChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textTypo]}>3</Text>
      </View>
      <View style={[styles.chatboxChild7, styles.chatboxChildLayout]} />
      <Text style={[styles.hello, styles.helloClr]}>Hello</Text>
      <Text style={[styles.minAgo2, styles.minTypo]}>15 min Ago</Text>
      <Image
        style={[styles.chatboxChild8, styles.chatboxChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <Text style={[styles.johnDoe, styles.johnLayout]}>John Doe</Text>
      <Image
        style={[styles.chatboxChild9, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild10, styles.chatboxChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-201.png")}
      />
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>1</Text>
      </View>
      <View style={[styles.chatboxChild11, styles.chatboxChildLayout]} />
      <Text style={[styles.hello1, styles.helloClr]}>Hello</Text>
      <Text style={[styles.minAgo3, styles.minTypo]}>15 min Ago</Text>
      <Image
        style={[styles.chatboxChild12, styles.chatboxChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <Text style={[styles.johnDoe1, styles.johnLayout]}>John Doe</Text>
      <Image
        style={[styles.chatboxChild13, styles.chatboxChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild14, styles.chatboxChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-201.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>1</Text>
      </View>
      <View style={[styles.chatboxChild15, styles.chatboxChildLayout]} />
      <Text style={[styles.hiHowAre, styles.annaPosition]}>
        HI! How are you?
      </Text>
      <Text style={[styles.minAgo4, styles.minTypo1]}>5 min Ago</Text>
      <Image
        style={[styles.chatboxChild16, styles.chatboxChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-185.png")}
      />
      <Text style={[styles.annaDoe, styles.annaPosition]}>Anna Doe</Text>
      <Image
        style={[styles.chatboxChild17, styles.chatboxChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild18, styles.chatboxChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.chatboxChild19, styles.chatboxChildLayout]} />
      <Text style={[styles.hiHowAre1, styles.annaPosition]}>
        HI! How are you?
      </Text>
      <Text style={[styles.minAgo5, styles.minTypo1]}>5 min Ago</Text>
      <Image
        style={[styles.chatboxChild20, styles.chatboxChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-185.png")}
      />
      <Text style={[styles.annaDoe1, styles.annaPosition]}>Anna Doe</Text>
      <Image
        style={[styles.chatboxChild21, styles.chatboxChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.chatboxChild22, styles.chatboxChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.chatboxChild23, styles.chatboxChildLayout]} />
      <Image
        style={[styles.groupIcon, styles.inboxPosition]}
        contentFit="cover"
        source={require("../assets/group-78.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.inbox, styles.inboxPosition]}>Inbox</Text>
      <Image
        style={[styles.chatboxChild24, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-207.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatboxPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 336,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  helloClr: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  minTypo1: {
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray_200,
    textTransform: "lowercase",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  chatboxChildLayout3: {
    height: 50,
    width: 50,
    left: 21,
    position: "absolute",
  },
  johnLayout: {
    height: 27,
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  chatboxChildLayout2: {
    height: 10,
    width: 10,
    left: 61,
    position: "absolute",
  },
  chatboxChildLayout1: {
    height: 8,
    width: 8,
    left: 62,
    position: "absolute",
  },
  groupLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  textTypo: {
    height: 15,
    width: 6,
    top: 2,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    textAlign: "left",
    position: "absolute",
  },
  chatboxChildLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    width: 336,
    position: "absolute",
  },
  minTypo: {
    left: 301,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray_200,
    textTransform: "lowercase",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupViewPosition: {
    left: 334,
    height: 18,
    width: 18,
    position: "absolute",
  },
  annaPosition: {
    left: 82,
    textAlign: "left",
    position: "absolute",
  },
  chatboxChildPosition1: {
    left: 22,
    height: 50,
    width: 50,
    position: "absolute",
  },
  chatboxChildPosition2: {
    left: 62,
    height: 10,
    width: 10,
    position: "absolute",
  },
  chatboxChildPosition: {
    left: 63,
    height: 8,
    width: 8,
    position: "absolute",
  },
  inboxPosition: {
    top: 46,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chatboxChild: {
    top: -3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 227,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_xl,
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    height: 42,
    width: 336,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  search: {
    top: 12,
    left: 43,
    color: Color.colorGray,
    width: 60,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  searchIcon: {
    top: 11,
    left: 11,
    width: 28,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 99,
    left: 19,
  },
  chatboxItem: {
    top: 161,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 651,
  },
  hiWhatsYour: {
    top: 216,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    left: 81,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  minAgo: {
    top: 193,
    left: 303,
    fontSize: FontSize.size_3xs,
  },
  chatboxInner: {
    top: 189,
  },
  ayeshaIkram: {
    top: 191,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 81,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    top: 224,
  },
  chatboxChild3: {
    top: 225,
  },
  groupItem: {
    borderRadius: Border.br_10xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
  },
  text: {
    left: 6,
  },
  rectangleGroup: {
    top: 214,
    left: 336,
  },
  lineView: {
    top: 247,
    left: 20,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  hiWhatsYour1: {
    top: 420,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    left: 81,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  minAgo1: {
    top: 397,
    left: 304,
  },
  chatboxChild4: {
    top: 393,
  },
  ayeshaIkram1: {
    top: 395,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 81,
    textAlign: "left",
    position: "absolute",
  },
  chatboxChild5: {
    top: 428,
  },
  chatboxChild6: {
    top: 429,
  },
  rectangleContainer: {
    top: 418,
    left: 337,
  },
  chatboxChild7: {
    top: 451,
    left: 20,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  hello: {
    top: 352,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    left: 81,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  minAgo2: {
    top: 329,
  },
  chatboxChild8: {
    top: 325,
  },
  johnDoe: {
    top: 327,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 81,
    textAlign: "left",
    position: "absolute",
  },
  chatboxChild9: {
    top: 360,
  },
  chatboxChild10: {
    top: 361,
  },
  text2: {
    left: 7,
  },
  groupView: {
    top: 350,
  },
  chatboxChild11: {
    top: 383,
    left: 20,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  hello1: {
    top: 556,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    left: 81,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  minAgo3: {
    top: 533,
  },
  chatboxChild12: {
    top: 529,
  },
  johnDoe1: {
    top: 531,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 81,
    textAlign: "left",
    position: "absolute",
  },
  chatboxChild13: {
    top: 564,
  },
  chatboxChild14: {
    top: 565,
  },
  rectangleParent1: {
    top: 554,
  },
  chatboxChild15: {
    top: 587,
    left: 20,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  hiHowAre: {
    top: 284,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
    left: 82,
    fontFamily: FontFamily.poppinsRegular,
  },
  minAgo4: {
    top: 261,
    left: 303,
    fontSize: FontSize.size_3xs,
  },
  chatboxChild16: {
    top: 257,
  },
  annaDoe: {
    top: 259,
    height: 27,
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 82,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  chatboxChild17: {
    top: 292,
  },
  chatboxChild18: {
    top: 293,
  },
  chatboxChild19: {
    top: 315,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    left: 21,
  },
  hiHowAre1: {
    top: 488,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
    left: 82,
    fontFamily: FontFamily.poppinsRegular,
  },
  minAgo5: {
    top: 465,
    left: 303,
    fontSize: FontSize.size_3xs,
  },
  chatboxChild20: {
    top: 461,
  },
  annaDoe1: {
    top: 463,
    height: 27,
    width: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 82,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  chatboxChild21: {
    top: 496,
  },
  chatboxChild22: {
    top: 497,
  },
  chatboxChild23: {
    top: 519,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    left: 21,
  },
  groupIcon: {
    left: 318,
    width: 36,
    height: 36,
  },
  vectorIcon: {
    height: "2.22%",
    width: "2.4%",
    top: "6.77%",
    right: "91.47%",
    bottom: "91.01%",
    left: "6.13%",
  },
  inbox: {
    left: 44,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    top: 46,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  chatboxChild24: {
    height: "43.3%",
    width: "93.39%",
    top: "73.28%",
    right: "-50.45%",
    bottom: "-16.58%",
    left: "57.07%",
    opacity: 0.4,
  },
  chatbox: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default ChatBox;
