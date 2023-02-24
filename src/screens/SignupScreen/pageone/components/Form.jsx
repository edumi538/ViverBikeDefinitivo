import { Button, Flex, Icon, Input, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { ServiceUtil } from "../../../../services/servicesUtils";
import TextMask from "react-text-mask";

const FormSignup = () => {
  const { control, errors, setValue, getValues } = useForm();

  const handlePhoneChange = (value) => {
    const serviceUtil = new ServiceUtil();

    if (serviceUtil.isPhoneValid(value)) {
      setValue("phone", serviceUtil.applyPhoneMask(value), true);
    } else {
      setValue("phone", getValues("phone") + "", true);
    }
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      marginTop="80%"
      rounded="60"
      backgroundColor="white"
      h="80%"
      w="100%"
    >
      <VStack space={5}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Input
              fontSize="2xl"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              w={{
                base: "80%",
                md: "50%",
              }}
              h={{ base: "16" }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons />}
                  size={8}
                  ml="2"
                  color="muted.400"
                />
              }
              size={"2xl"}
              variant="rounded"
              placeholder="Full Name Here"
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Input
              fontSize="2xl"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              w={{
                base: "80%",
                md: "50%",
              }}
              h={{ base: "16" }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  size={8}
                  ml="2"
                  color="muted.400"
                />
              }
              size={"2xl"}
              variant="rounded"
              placeholder="Email Here"
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Input
              fontSize="2xl"
              w={{
                base: "80%",
                md: "50%",
              }}
              h={{ base: "16" }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={8}
                  ml="2"
                  color="muted.400"
                />
              }
              size={"2xl"}
              keyboardType="phone-pad"
              variant="rounded"
              placeholder="Phone Here"
              onBlur={field.onBlur}
              value={field.value}
              onChangeText={handlePhoneChange}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Input
              fontSize="2xl"
              w={{
                base: "80%",
                md: "50%",
              }}
              h={{ base: "16" }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={8}
                  ml="2"
                  color="muted.400"
                />
              }
              size={"2xl"}
              keyboardType="phone-pad"
              variant="rounded"
              placeholder="Confirm Phone"
              onBlur={field.onBlur}
              value={field.value}
              onChangeText={handlePhoneChange}
            />
          )}
        />
        <Button
          isLoadingText="Submitting"
          spinnerPlacement="end"
          colorScheme={"amber"}
          variant={"solid"}
        >
          Signup
        </Button>
      </VStack>
    </Flex>
  );
};

const styles = StyleSheet.create({});

export default FormSignup;
