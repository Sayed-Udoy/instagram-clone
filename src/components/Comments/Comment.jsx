import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4} mt={3} >
      <Image
        src={profilePic}
        alt={username}
        w={10}
        h={10}
        borderRadius={"full"}
      />
      <Flex flexDirection={"column"} gap={2}>
        <Flex gap={3} alignItems={"center"} >
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
