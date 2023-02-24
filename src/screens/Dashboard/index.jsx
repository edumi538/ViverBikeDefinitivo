import { Flex } from "native-base";
import Header from "./components/heading";
import React from "react";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function Dashboard({ navigation }) {
  const isDrawerOpen = useDrawerStatus() === "open";
  return (
    <Flex w={"100%"} h={"100%"}>
      <Header navigation={navigation} isDrowerOpen={isDrawerOpen} />
    </Flex>
  );
}
