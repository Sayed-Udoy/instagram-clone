import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
      >
        <Image
          src="/profilepic.png"
          alt="profile pic"
          w={20}
          h={20}
          rounded="full"
          border="1px solid"
          borderColor={"gray.600"}
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx="auto" flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w="full"
        >
            <Text fontSize={{base:"sm",md:"lg"}} >
                Marley udoy
            </Text>
            <Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                <Button bg="white" color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}} >
                    Edit Profile
                </Button>
            </Flex>
        </Flex>
        <Flex alignItems="center" gap={{base:2,md:4}} >
            <Text fontSize={{base:"sx" ,md :"sm"}} >
                <Text as="span" fontWeight={"bold"} mr={1}>149</Text>
                Posts
            </Text>
            <Text fontSize={{base:"sx" ,md :"sm"}}  >
                <Text as="span" fontWeight={"bold"} mr={1}>149</Text>
                Followers
            </Text>
            <Text fontSize={{base:"sx" ,md :"sm"}} >
                <Text as="span" fontWeight={"bold"} mr={1}>199</Text>
                Following
            </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4} >
            <Text fontSize="sm" fontWeight={"bold"} >
                Marley Udoy
            </Text>
        </Flex>
        <Text fontSize="sm" >Tutorial That are menat to level up your skills as a programmer</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
