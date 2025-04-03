import Feedposts from "@/components/FeedPosts/Feedposts"
import SuggestedUsers from "@/components/SuggestedUsers/SuggestedUsers"
import { ColorModeButton } from "@/components/ui/color-mode"
import { Box, Container, Flex } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={10} >
        <Box flex={3} >
          <Feedposts />
        </Box>
        <Box mt={10} px={2} flex={2} mr={20} display={{base:"none",md:"block"}} maxW={"300px"} >
         <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage