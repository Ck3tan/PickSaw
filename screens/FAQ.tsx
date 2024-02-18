import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FAQ = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.faq}>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Text style={styles.faq1}>FAQ</Text>
      <Image
        style={styles.cisettingsFilledIcon}
        contentFit="cover"
        source={require("../assets/cisettingsfilled1.png")}
      />
      <Image
        style={[styles.faqChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-205.png")}
      />
      <View style={[styles.faqItem, styles.faqItemLayout]} />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.innerGroupShadowBox]} />
        <Text style={[styles.whatIsPicksaw, styles.whatClr]}>
          What is PickSaw?
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.faqInner, styles.rectanglePosition]} />
      <Text style={[styles.whatIsPicksaw1, styles.whatClr]}>
        What is PickSaw?
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Text style={[styles.whatIsPicksaw2, styles.whatClr]}>
        What is PickSaw?
      </Text>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.innerGroupShadowBox]} />
        <Text style={[styles.whatIsPicksaw, styles.whatClr]}>
          What is PickSaw?
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.innerGroupShadowBox]} />
        <Text style={[styles.whatIsPicksaw, styles.whatClr]}>
          What is PickSaw?
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.innerGroupShadowBox]} />
        <Text style={[styles.whatIsPicksaw, styles.whatClr]}>
          What is PickSaw?
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild2, styles.innerGroupShadowBox]} />
        <Text style={[styles.whatIsPicksaw, styles.whatClr]}>
          What is PickSaw?
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.lineView, styles.faqItemLayout]} />
      <Text style={[styles.contraryToPopular, styles.whatClr]}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    width: "2.4%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  faqItemLayout: {
    height: 1,
    width: 336,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 334,
    height: 49,
    position: "absolute",
  },
  innerGroupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  whatClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    left: 21,
    width: 334,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.33%",
    top: "5.79%",
    right: "92.27%",
    bottom: "92%",
    height: "2.22%",
  },
  faq1: {
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
  faqChild: {
    height: "43.3%",
    width: "93.39%",
    top: "71.55%",
    right: "-49.12%",
    bottom: "-14.85%",
    left: "55.73%",
    opacity: 0.4,
    position: "absolute",
  },
  faqItem: {
    top: 78,
    left: 19,
  },
  groupChild: {
    left: 0,
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 49,
    width: 334,
    position: "absolute",
  },
  whatIsPicksaw: {
    top: 14,
    left: 14,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  vectorIcon: {
    height: "30.61%",
    top: "34.69%",
    right: "3.59%",
    bottom: "34.69%",
    left: "94.01%",
    width: "2.4%",
    position: "absolute",
  },
  rectangleParent: {
    top: 98,
    height: 49,
    left: 20,
  },
  faqInner: {
    top: 167,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    height: 49,
  },
  whatIsPicksaw1: {
    top: 181,
    left: 35,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  vectorIcon1: {
    height: "1.85%",
    width: "2.13%",
    top: "22.66%",
    right: "8.53%",
    bottom: "75.49%",
    left: "89.33%",
    position: "absolute",
  },
  rectangleView: {
    top: 236,
    height: 160,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  whatIsPicksaw2: {
    top: 249,
    left: 34,
    width: 122,
    height: 78,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  groupItem: {
    left: 0,
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 49,
    width: 334,
    position: "absolute",
  },
  rectangleGroup: {
    top: 416,
    height: 49,
  },
  groupInner: {
    left: 0,
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 49,
    width: 334,
    position: "absolute",
  },
  rectangleContainer: {
    top: 485,
    height: 49,
    left: 19,
  },
  groupChild1: {
    left: 0,
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 49,
    width: 334,
    position: "absolute",
  },
  groupView: {
    top: 554,
    height: 49,
    left: 20,
  },
  groupChild2: {
    left: 0,
    top: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 49,
    width: 334,
    position: "absolute",
  },
  rectangleParent1: {
    top: 623,
    height: 49,
    left: 20,
  },
  lineView: {
    top: 279,
    left: 20,
  },
  contraryToPopular: {
    top: 285,
    left: 31,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 314,
    height: 121,
  },
  faq: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FAQ;
