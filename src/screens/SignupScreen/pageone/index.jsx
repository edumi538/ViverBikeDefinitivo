import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";

import { Center } from "native-base";
import FormSignup from "./components/Form";

const SignupScreen = () => {


  return (
    <Center w="100%" h="100%" backgroundColor={"amber.700"}>
      <FormSignup />
    </Center>
  );
};

export default SignupScreen;
