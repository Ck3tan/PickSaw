import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AboutApplication = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.aboutApplication}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Text style={styles.aboutApplication1}>About Application</Text>
      <Image
        style={styles.cisettingsFilledIcon}
        contentFit="cover"
        source={require("../assets/cisettingsfilled1.png")}
      />
      <Image
        style={[styles.aboutApplicationChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-205.png")}
      />
      <Text
        style={[
          styles.contraryToPopularContainer,
          styles.aboutApplicationItemLayout,
        ]}
      >
        <Text
          style={styles.contraryToPopular}
        >{`Contrary to popular belief, Lorem Ipsum.
`}</Text>
        <Text
          style={styles.itHasRoots}
        >{`It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 

`}</Text>
        <Text style={styles.contraryToPopular}>{`The first line of Lorem Ipsum.
`}</Text>
        <Text
          style={styles.itHasRoots}
        >{` "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
 This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}</Text>
      </Text>
      <View
        style={[styles.aboutApplicationItem, styles.aboutApplicationItemLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  aboutApplicationItemLayout: {
    width: 336,
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
    width: "2.4%",
    height: "2.22%",
    position: "absolute",
  },
  aboutApplication1: {
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
  aboutApplicationChild: {
    height: "43.3%",
    width: "93.39%",
    top: "71.55%",
    right: "-49.12%",
    bottom: "-14.85%",
    left: "55.73%",
    opacity: 0.4,
    position: "absolute",
  },
  contraryToPopular: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  itHasRoots: {
    fontFamily: FontFamily.poppinsRegular,
  },
  contraryToPopularContainer: {
    top: 87,
    left: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    height: 510,
    textAlign: "left",
  },
  aboutApplicationItem: {
    top: 78,
    left: 19,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    height: 1,
  },
  aboutApplication: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutApplication;
