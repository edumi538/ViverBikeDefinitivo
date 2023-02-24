import { Heading, Icon, Stack } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <Stack marginBottom={10} space={5} w="100%" alignItems="center">
      <Icon
        marginBottom={-10}
        size={65}
        color="amber.100"
        as={<MaterialIcons name="pedal-bike" />}
      />
      <Heading color={"amber.100"} size="lg" fontSize={50} bold>
        Viver Bike
      </Heading>
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Header;
