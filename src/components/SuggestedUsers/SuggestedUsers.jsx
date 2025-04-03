import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack>
        <SuggestedHeader />

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
            <Box fontSize={12} fontWeight="bold" color={"gray.500"} >
                Suggested for you
            </Box>
            <Text cursor={"pointer"} fontSize={12} fontWeight="bold" color={"gray.400"} >
                See All
            </Text>
        </Flex>
        <SuggestedUser name="Dan Abramove" follwoers={1393} avatar='https://bit.ly/dan-abramov' />
        <SuggestedUser name="Ryan Florence" follwoers={1003} avatar='https://bit.ly/ryan-florence' />
        <SuggestedUser name="Chirstian Nwamba" follwoers={593} avatar='https://bit.ly/code-beast' />

        <Box fontSize={12} color={"gray.500"} mt={5} >
            &copy; 2025 Built by Udoy
        </Box>
    </VStack>
  )
}

export default SuggestedUsers