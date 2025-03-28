import { InstagramLogo, InstagramMobileLogo } from "@/assets/contants";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router";
import { Link as ChakraLink } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" h="full">
        <ChakraLink
          pl={2}
          display={{ base: "none", md: "block" }}
          cusrsor="pointer"
          asChild
        >
          <Link to={"/"}>
            <InstagramLogo />
          </Link>
        </ChakraLink>
        <ChakraLink
          pl={2}
          display={{ base: "block", md: "none" }}
          cusrsor="pointer"
          asChild
        >
          <Link to={"/"}>
            <InstagramMobileLogo />
          </Link>
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Sidebar;
