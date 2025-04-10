import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router";

const PageLayout = ({ children }) => {
  const { pathName } = useLocation();
  return (
    <Flex>
      {/* sidebar on the left  */}
      {pathName !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* the page content on the right  */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
