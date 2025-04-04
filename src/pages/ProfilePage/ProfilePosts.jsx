import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
  },[])

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
        {
            isLoading && [0,1,2,3,4,5,].map((_,idx)=>(
                <VStack key={idx} >
                    <Skeleton h={300} w={300} alignItems={"flex-start"} gap={4} >
                        <Box h="300" >Contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))
        }
        {
            !isLoading && (
                <>
                <ProfilePost img='/img1.png' />
                <ProfilePost img='/img2.png' />
                <ProfilePost img='/img3.png' />
                <ProfilePost img='/img4.png' />
                </>
            )
        }
    </Grid>
  );
};

export default ProfilePosts;
