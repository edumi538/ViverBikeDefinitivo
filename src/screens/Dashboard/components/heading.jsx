import { Box, Center, Flex, Heading, Icon, IconButton } from "native-base";

import { Entypo } from "@expo/vector-icons";
import React from "react";

const Header = ({ navigation, isDrowerOpen }) => {
  return (
    <Box
      width={"100%"}
      h={"30%"}
      bgColor="amber.700"
      _android={{ h: "30%", borderBottomRadius: 60 }}
      _ios={{
        borderBottomRadius: 50,
      }}
    >
      <Flex
        _ios={{ marginTop: "15%" }}
        _android={{ marginTop: "20%" }}
        flexDirection={"row"}
        w="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          onPress={() => navigation.toggleDrawer()}
          icon={
            <Icon
              as={Entypo}
              name={!isDrowerOpen ? "chevron-left" : "chevron-right"}
            />
          }
          borderRadius="full"
          _icon={{
            color: "white",
            size: "3xl",
          }}
        />
      </Flex>
      <Center
        position={"absolute"}
        height={"100%"}
        marginLeft={30}
        marginTop={16}
      >
        <Heading
          _android={{ fontSize: "2xl" }}
          _ios={{ fontSize: "4xl" }}
          color={"white"}
        >
          Dashboard
        </Heading>
      </Center>
    </Box>
  );
};

export default Header;
