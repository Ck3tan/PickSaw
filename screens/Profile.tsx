import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/group-106.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>79</Text>
      <View style={styles.parent}>
        <Text style={[styles.text1, styles.textTypo]}>129</Text>
        <Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
      </View>
      <Text style={[styles.followers, styles.postsTypo]}>Followers</Text>
      <View style={[styles.profileInner, styles.groupLayout1]}>
        <View style={[styles.group, styles.groupLayout1]}>
          <Text style={[styles.text2, styles.textTypo]}>285</Text>
          <Text style={[styles.posts, styles.postsTypo]}>Following</Text>
        </View>
      </View>
      <Text style={[styles.ayeshaIkram, styles.ayeshaIkramTypo]}>
        Ayesha Ikram
      </Text>
      <Text style={[styles.uiuxDesigner, styles.ayeshaIkramTypo]}>
        UI/UX Designer
      </Text>
      <View style={styles.lineView} />
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
      </View>
      <Image
        style={[styles.profileChild1, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.profileChild2, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Pressable
        style={styles.cisettingsFilled}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/cisettingsfilled.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorFirebrick,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  postsTypo: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    width: 52,
    height: 39,
    position: "absolute",
  },
  ayeshaIkramTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 100,
    width: 100,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  groupLayout: {
    height: 182,
    width: 100,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  groupChildLayout: {
    height: 134,
    width: 100,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  ellipseIconLayout: {
    height: 29,
    width: 29,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  profileChild: {
    width: 375,
    height: 199,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  profileItem: {
    top: 144,
    left: 133,
    width: 110,
    height: 110,
    position: "absolute",
  },
  text: {
    left: 177,
    top: 321,
  },
  text1: {
    left: 0,
    top: 0,
  },
  posts: {
    top: 22,
    left: 0,
  },
  parent: {
    left: 51,
    height: 39,
    width: 29,
    top: 321,
    position: "absolute",
  },
  followers: {
    top: 343,
    left: 162,
  },
  text2: {
    left: 9,
    top: 0,
  },
  group: {
    left: 0,
    top: 0,
  },
  profileInner: {
    left: 272,
    top: 321,
  },
  ayeshaIkram: {
    top: 261,
    left: 139,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
  },
  uiuxDesigner: {
    top: 281,
    left: 137,
    color: "#a6a6a6",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  lineView: {
    top: 377,
    borderStyle: "solid",
    borderColor: "#e4e4e4",
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 192,
    left: 119,
  },
  groupInner: {
    left: 119,
    top: 0,
  },
  rectangleIcon: {
    top: 143,
    left: 235,
  },
  groupChild1: {
    top: 302,
    left: 117,
  },
  groupChild2: {
    left: 237,
    height: 134,
    top: 0,
  },
  groupChild3: {
    top: 250,
    left: 0,
  },
  groupChild4: {
    top: 334,
    left: 237,
    height: 134,
  },
  groupChild5: {
    top: 108,
    left: 0,
  },
  rectangleParent: {
    top: 392,
    width: 337,
    height: 484,
    left: 20,
    position: "absolute",
  },
  profileChild1: {
    top: 792,
    left: 20,
  },
  ellipseIcon: {
    top: 47,
    left: 20,
  },
  profileChild2: {
    top: 45,
    left: 326,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "8.27%",
    top: "6.77%",
    right: "89.87%",
    bottom: "91.5%",
    width: "1.87%",
    height: "1.72%",
    position: "absolute",
  },
  cisettingsFilled: {
    left: 331,
    top: 50,
    width: 20,
    height: 20,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default Profile;
