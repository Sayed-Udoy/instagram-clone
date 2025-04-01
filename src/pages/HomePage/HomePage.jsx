import Feedposts from "@/components/FeedPosts/Feedposts"
import { ColorModeButton } from "@/components/ui/color-mode"
import { Box, Container, Flex } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20} >
        <Box flex={2} py={10} >
          <Feedposts />
        </Box>
        <Box flex={3} mr={20} display={{base:"none",md:"block"}} maxW={"300px"} border={"1px solid blue"} >
          Suggested
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage