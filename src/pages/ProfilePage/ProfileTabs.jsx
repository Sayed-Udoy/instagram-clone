import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w="full"
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"} borderTop="1px solid white" >
        <Box>
            <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{base:"none" , sm:"block"}}>
            Posts
        </Text>
      </Flex>
      <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"} >
        <Box>
            <BsBookmark />
        </Box>
        <Text fontSize={12} display={{base:"none" , sm:"block"}}>
            Saved
        </Text>
      </Flex>
      <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"} >
        <Box>
            <BsSuitHeart />
        </Box>
        <Text fontSize={12} display={{base:"none" , sm:"block"}}>
            Likes
        </Text>
      </Flex>

    </Flex>
  );
};

export default ProfileTabs;
