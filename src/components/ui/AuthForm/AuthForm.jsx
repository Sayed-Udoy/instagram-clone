import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spaceY={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
        <Input type="email" placeholder="Email" fontSize={"14px"} />
        <Input type="password" placeholder="Password" fontSize={"14px"} />
        {!isLogin ? (
          <Input
            type="password"
            placeholder="Confirm Password"
            fontSize={"14px"}
          />
        ) : null}
        <Button
          w={"full"}
          backgroundColor={"blue"}
          color={"white"}
          fontSize={14}
          size={"sm"}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
        <Flex
          alignItems="center"
          justifyContent="center"
          my="4"
          gap="1"
          w="full"
        >
          <Box flex="2" h="1px" bg="gray.400" />
          <Text mx="1" color="white">
            OR
          </Text>
          <Box flex="2" h="1px" bg="gray.400" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default AuthForm;
