import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { IS_LOGGED_IN, UPDATE_USER_LOGIN } from "../../redux/slice/AuthSlice";

import React from "react";
import { useDispatch } from "react-redux";

export default function CustomDrawerComponent(props) {
  const dispatch = useDispatch();

  function _QuitDashboard() {
    dispatch([UPDATE_USER_LOGIN({}), IS_LOGGED_IN(false)]);
    props.navigation.navigate("LoginScreen");
  }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={() => _QuitDashboard()} />
    </DrawerContentScrollView>
  );
}
