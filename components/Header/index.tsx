import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { DesktopNavbar } from "./DesktopNavbar";
import NextLink from "next/link";

export const Header = (props: ComponentPropsWithoutRef<"header">) => {
  return (
    <Flex
      as="header"
      {...props}
      display="flex"
      py="4"
      px="12"
      bg="black"
      color="white"
    >
      <Box flex="1" alignItems={"center"}>
        <NextLink href="/">
          <StyledImage width={128} height={40} src="/logo.svg" alt="logo" />
        </NextLink>
      </Box>
      <DesktopNavbar />
    </Flex>
  );
};

const StyledImage = styled(Image)`
  cursor: pointer;
`;
