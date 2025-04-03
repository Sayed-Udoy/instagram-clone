import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import SkeletonBox from "../ui/SkeletonBox";

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading ? (
        [0, 1, 2, 3].map((_,idx) => {
          return <SkeletonBox key={idx} />;
        })
      ) : (
        <>
          <FeedPost username="programmer" img="/img1.png" avatar="/img1.png" />
          <FeedPost username="Md Rasel" img="/img2.png" avatar="/img2.png" />
          <FeedPost
            username="Mohammad Mostufa"
            img="/img3.png"
            avatar="/img3.png"
          />
          <FeedPost username="Marley udoy" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default Feedposts;
