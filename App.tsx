const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import Carbonadd from "./components/Carbonadd";
import Rectangle from "./components/Rectangle";
import Rectangle1 from "./components/Rectangle1";
import Rectangle2 from "./components/Rectangle2";
import Rectangle3 from "./components/Rectangle3";
import Rectangle4 from "./components/Rectangle4";
import Rectangle5 from "./components/Rectangle5";
import WelcomeScreenSplashScreen from "./screens/WelcomeScreenSplashScreen";
import LoginScreen from "./screens/LoginScreen";
import ExporeScreen from "./screens/ExporeScreen";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import TermAndConditions from "./screens/TermAndConditions";
import AboutApplication from "./screens/AboutApplication";
import FAQ from "./screens/FAQ";
import Comments from "./screens/Comments";
import Share1 from "./screens/Share1";
import ChatBox from "./screens/ChatBox";
import SignupScreen from "./screens/SignupScreen";
import EditScreen from "./screens/EditScreen";
import ResetPassword from "./screens/ResetPassword";
import ForgotPasswod from "./screens/ForgotPasswod";
import ResetPassword1 from "./screens/ResetPassword1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreenSplashScreen"
              component={WelcomeScreenSplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExporeScreen"
              component={ExporeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermAndConditions"
              component={TermAndConditions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutApplication"
              component={AboutApplication}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Comments"
              component={Comments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Share1"
              component={Share1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBox"
              component={ChatBox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditScreen"
              component={EditScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswod"
              component={ForgotPasswod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword1"
              component={ResetPassword1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
