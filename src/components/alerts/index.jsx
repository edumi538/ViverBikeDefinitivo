import { View } from "react-native";
import React from "react";
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Stack,
  VStack,
  Text,
} from "native-base";

export default function Alerts({ status, title }) {
  return (
    <Stack space={3} w="100%" maxW="400">
      <Alert w="100%" status={status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {title}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: "coolGray.600",
              }}
            />
          </HStack>
        </VStack>
      </Alert>
    </Stack>
  );
}
