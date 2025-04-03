import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Image
          src="/profilepic.png"
          alt="marley udoy"
          w={10}
          h={10}
          rounded="full"
        />
        <Box fontSize={12} fontWeight={"bold"}>
          <Text>marley udoy</Text>
        </Box>
      </Flex>
      <ChakraLink
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        <Link to="/auth">
            Log Out
        </Link>
      </ChakraLink>
    </Flex>
  );
};

export default SuggestedHeader;
