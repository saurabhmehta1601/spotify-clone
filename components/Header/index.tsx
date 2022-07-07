import { Box, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";

export const Header = (props: ComponentPropsWithoutRef<"header">) => {
  return (
    <Flex as="header" {...props} display="flex" py="4" px="12">
      <Flex flex="1" alignItems={"center"}>
        <StyledImage width={128} height={40} src="/logo.svg" alt="logo" />
      </Flex>
      <Flex display={{ sm: "none", lg: "flex" }} alignItems="center">
        <Flex columnGap={8} fontWeight="bold" alignItems={"center"}>
          <Link
            href="https://www.spotify.com/in-en/premium/"
            isExternal
            _hover={{
              color: "green.400",
            }}
          >
            Premium
          </Link>
          <Link href="support">
            <Link>Support</Link>
          </Link>
          <Link href="download">
            <Link>Download</Link>
          </Link>
        </Flex>
        <Box h="6" w="0.5" bg="currentcolor" mx="6"></Box>
        <Flex
          columnGap={8}
          fontWeight="bold"
          alignItems={"center"}
        >
          <Box>Sign up</Box>
          <Box>Log in</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

const StyledImage = styled(Image)`
  cursor: pointer;
`;
