import {
    HStack,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
  } from "@chakra-ui/react"
  
  const SkeletonBox = () => {
    return (
      <Stack gap="6" maxW="full" py={10}>
        <HStack width="sm">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
        <Skeleton height="400px" />
      </Stack>
    )
  }
  export default SkeletonBox