import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "@/assets/contants";
import { AvatarIcon, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo size={5} />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo size={5} />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo size={5} />,
      text: "Create",
    },
    {
      icon: (
        <AvatarIcon size={"sm"} name="Burak Orkemz" src="/profilepic.png" />
      ),
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" h="full">
        <ChakraLink
          pl={2}
          display={{ base: "none", md: "block" }}
          cusrsor="pointer"
          asChild
        >
          <Link to={"/"}>
            <InstagramLogo />
          </Link>
        </ChakraLink>
        <ChakraLink
          pl={2}
          display={{ base: "flex", md: "none" }}
          justifyContent={"center"}
          cusrsor="pointer"
          
          asChild
        >
          <Link to={"/"}>
            <InstagramMobileLogo />
          </Link>
        </ChakraLink>
        {/* ====================== */}
        <Flex direction={"column"} gap={5} cursor="pointer">
          {sidebarItems.map((item, index) => (
            <ChakraLink
              key={index}
              outline={"none"}
              display={"flex"}
              asChild
              justifyContent={{ base: "center", md: "flex-start" }}
              alignItems={"center"}
              gap={4}
            >
              <Link to={item.link ? item.link : "/"}>
                {item.icon}
                <Box display={{base:"none",md:"block"}} >

                {item.text}
                </Box>
              </Link>
            </ChakraLink>
          ))}
        </Flex>
        <ChakraLink
        marginTop={"auto"}
              outline={"none"}
              display={"flex"}
              asChild
              justifyContent={{ base: "center", md: "flex-start" }}
              alignItems={"center"}
              gap={4}
            >
              <Link to={ "/"}>
                <BiLogOut size={25} />    
                <Box display={{base:"none",md:"block"}} >
                Logout
                </Box>
              </Link>
            </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Sidebar;
