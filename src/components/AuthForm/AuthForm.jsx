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
import { useNavigate } from "react-router";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if(!inputs.email || !inputs.password){
      alert("Please fill all the fields")
      return;
    }
    navigate('/')
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spaceY={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email:e.target.value })}
            type="email"
            placeholder="Email"
            fontSize={"14px"}
          />
          <Input
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            type="password"
            placeholder="Password"
            fontSize={"14px"}
          />
          {!isLogin ? (
            <Input
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              type="password"
              placeholder="Confirm Password"
              fontSize={"14px"}
            />
          ) : null}
          <Button
            onClick={handleAuth}
            w={"full"}
            backgroundColor={"blue"}
            color={"white"}
            fontSize={14}
            size={"sm"}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

          {/* -------------- OR -------------- */}
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

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems="center" justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {" "}
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
