import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({avatar,username}) => {
  return (
    <Flex w="full" justifyContent={"space-between"} alignItems={"center"} my={2}>
        <Flex alignItems={"center"} gap={2} >
            <Image src={avatar} alt='uer profile pic' w="40px" h={"40px"} rounded="full" />
            <Flex fontSize={12} fontWeight={"bold"} gap={2} >
               {username}
                <Box color={"gray.500"} >
                    .1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor="pointer" >
            <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{
                color: "white"
            }} transition={"0.2s ease-in-out"}  >
                Unfollow
            </Text>
        </Box>
    </Flex>

  )
}

export default PostHeader