import {
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  Pressable,
  Stack,
  Text,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const FormSignin = ({
  _loading,
  _errorAlert,
  Signin,
  _titleError,
  navigation,
}) => {
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (data) => Signin(data);

  return (
    <Stack space={5} w="100%" alignItems="center">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              w={{
                base: "50%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              isHovered={false}
              variant="filled"
              bgColor={"amber.100"}
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && (
          <Text marginTop={"1.5"} color={"red.600"}>
            This is required.
          </Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              w={{
                base: "50%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              bgColor={"amber.100"}
              variant="filled"
              placeholder="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text marginTop={"1.5"} color={"red.600"}>
            This is required.
          </Text>
        )}
      </View>
      <Flex direction="row" alignItems={"center"}>
        <Text
          onPress={() => navigation.navigate("SignupScreen")}
          color={"amber.100"}
          fontSize={"md"}
        >
          Already have an account?
        </Text>
        <Icon
          color={"amber.100"}
          size={7}
          as={<MaterialIcons name="arrow-right" />}
        />
      </Flex>
      <Button
        onPress={handleSubmit(onSubmit)}
        isLoading={_loading}
        isLoadingText="Submitting"
        spinnerPlacement="end"
        colorScheme={"amber"}
        variant={"solid"}
      >
        Signin
      </Button>
      {_errorAlert && (
        <Text color={"red.700"} textAlign="center">
          {_titleError}
        </Text>
      )}
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default FormSignin;
