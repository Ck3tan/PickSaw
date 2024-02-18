import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TermAndConditions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.termAndConditions}>
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
      <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
      <Image
        style={styles.cisettingsFilledIcon}
        contentFit="cover"
        source={require("../assets/cisettingsfilled1.png")}
      />
      <Image
        style={[styles.termAndConditionsChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-204.png")}
      />
      <Text
        style={[styles.contraryToPopular, styles.contraryTypo]}
      >{`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}</Text>
      <Text
        style={[styles.contraryToPopular1, styles.contraryToPopular1Position]}
      >{`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}</Text>
      <View
        style={[
          styles.termAndConditionsItem,
          styles.contraryToPopular1Position,
        ]}
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
  contraryTypo: {
    height: 510,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  contraryToPopular1Position: {
    left: 19,
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
  termsConditions: {
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
  termAndConditionsChild: {
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
    top: 87,
    left: 20,
    width: 336,
    height: 510,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  contraryToPopular1: {
    top: 597,
    height: 510,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 19,
  },
  termAndConditionsItem: {
    top: 78,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    height: 1,
  },
  termAndConditions: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TermAndConditions;
