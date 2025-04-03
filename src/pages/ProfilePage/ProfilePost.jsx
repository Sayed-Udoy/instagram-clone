import Modal from "@/components/ui/Modal";
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  GridItem,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfilePost = ({ img }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <GridItem
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        cursor={"pointer"}
        aspectRatio={1 / 1}
      >
        <Flex
        onClick={()=>setIsModal(!isModal)}
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent="center" gap={50}>
            <Flex alignItems={"center"}>
              <AiFillHeart />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <FaComment />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
    </>
  );
};

export default ProfilePost;
