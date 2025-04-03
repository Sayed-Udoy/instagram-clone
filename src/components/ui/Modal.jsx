import {
  Box,
  CloseButton,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Comment from "../Comments/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const Modal = ({ isModal, setIsModal }) => {
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);
  return (
    <Container
      maxH={"100vw"}
      bg={"blackAlpha.700"}
      zIndex={10}
      p={10}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <Container
        scrollSnapStrictness={"mandatory"}
        rounded="md"
        bg={"black"}
        maxW={"1000px"}
        mt={10}
      >
        <CloseButton
          position={"absolute"}
          onClick={() => setIsModal(false)}
          right={0}
        />
        <Flex overflowY={"scroll"} flexDirection={{ base: "column", md: "row" }} p={5} gap={5}>
          <Box borderRadius={10} overflow={"hidden"} flex={1}>
            <Image src="/img1.png" />
          </Box>
          <Box flex={1}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex
                alignItems={"center"}
                gap={3}
                justifyContent={"space-between"}
              >
                <Image src="/profilepic.png" w={10} h={10} rounded={"full"} />
                <Text fontWeight={"bold"} fontSize={12}>
                  Marley Udoy
                </Text>
              </Flex>
              <Box
                _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                cursor={"pointer"}
                borderRadius={4}
                p={1}
              >
                <MdDelete />
              </Box>
            </Flex>
            <hr />
            <VStack
              w={"full"}
              alignItems={"start"}
              maxH={300}
              overflowY={"auto"}
            >
              <Comment
                createdAt="1d ago"
                username="Marley Udoy"
                profilePic="/profilepic.png"
                text="nice pic"
              />
              <Comment
                createdAt="1d ago"
                username="Marley Udoy"
                profilePic="/img1.png"
                text="nice pic"
              />
              <Comment
                createdAt="1d ago"
                username="Marley Udoy"
                profilePic="/img2.png"
                text="nice pic"
              />
            </VStack>
            <hr style={{ marginTop: "5px" }} />
            <Box marginTop={{base:"170px"}}>
              <PostFooter isProfilePage={true} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default Modal;
