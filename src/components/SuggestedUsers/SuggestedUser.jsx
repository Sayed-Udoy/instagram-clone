import { Box, Button, Flex, Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ follwoers, avatar, name }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w="full">
      <Flex alignItems={"center"} gap="4">
        <Image src={avatar} alt={name} w={10} h={10} rounded={"full"} />
        <VStack alignItems={"flex-start"} >
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={"bold"} color={"gray.500"}>
            {follwoers} Followers
          </Box>
        </VStack>
      </Flex>
      <Button
      onClick={()=> setIsFollowed(!isFollowed)}
        fontSize={14}
        bg={"transparent"}
        p={0}
        h="max-content"
        fontWeight={"medium"}
        variant="plain"
        color={"blue.400"}
        _hover={{ color: "white" }}
      >
        {
            isFollowed ? "UnFollow" : "Follow"
        }
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
