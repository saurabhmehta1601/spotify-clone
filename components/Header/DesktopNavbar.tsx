import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

interface IChakraLink {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}
const ChakraLink = (props: IChakraLink) => (
  <Link
    href={props.href}
    _hover={{
      color: "green.400",
    }}
    isExternal={props.isExternal ?? false}
  >
    {props.children}
  </Link>
);

export const DesktopNavbar = () => {
  return (
    <Flex display={{ sm: "none", md: "flex" }} alignItems="center">
      <Flex columnGap={8} fontWeight="bold" alignItems={"center"}>
        <ChakraLink
          href="https://www.spotify.com/in-en/premium/"
          isExternal={true}
        >
          Premium
        </ChakraLink>
        <ChakraLink href="/download">Download</ChakraLink>
      </Flex>
      <Box h="6" w="0.5" bg="currentcolor" mx="6"></Box>
      <Flex columnGap={8} fontWeight="bold" alignItems={"center"}>
        <ChakraLink href="/signup">Sign up</ChakraLink>
        <ChakraLink href="/login">Sign up</ChakraLink>
      </Flex>
    </Flex>
  );
};
