import DrawerStack from "./drawerStack";
import LoginScreen from "../screens/LoginScreen";
import React from "react";
import SignupScreen from "../screens/SignupScreen/pageone";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

export default function NativeStack({ bgImage }) {
  const UserSelector = useSelector((state) => state.AuthSlice);
  const Stack = createNativeStackNavigator();
  const { user } = UserSelector;
  return (
    <Stack.Navigator
      initialRouteName={user.token ? "Dashboard" : "LoginScreen"}
    >
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen">
        {(props) => <LoginScreen {...props} Background={bgImage} />}
      </Stack.Screen>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DrawerStack}
      />
    </Stack.Navigator>
  );
}
