import { StyleSheet, Text, View } from "react-native";

import CustomDrawerComponent from "../components/customDrawerComponent";
import Dashboard from "../screens/Dashboard";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function DrawerStack() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
    >
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Dashboard}
      />
    </Drawer.Navigator>
  );
}
