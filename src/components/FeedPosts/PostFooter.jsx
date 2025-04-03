import { CommentLogo, NotificationsLogo, UnlikeLogo } from "@/assets/contants";
import { Box, Button, Flex, Group, Input, Span, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box>
      <Flex alignItems={"center"} gap={4} w="full" pt={0} mb={2} mt={2}>
        <Box onClick={handleLike} cursor={"pinter"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}{" "}
            <Text as={Span} fontSize={"sm"} color={"gray"}>
              Feeling good
            </Text>
          </Text>
          <Text color={"gray"} fontSize={"sm"}>
            View all 1,000 comments
          </Text>
        </>
      )}
      <Flex
        gap={2}
        alignItems="center"
        justifyContent={"space-between"}
        w="full"
      >
        <Group w="full" attached>
          <Input
            flex={1}
            variant={"flushed"}
            placeContent={"Add a comment...."}
            fontSize={14}
          />
          <Button variant="outline" px={2} py={2}>
            Post
          </Button>
        </Group>
      </Flex>
    </Box>
  );
};

export default PostFooter;
