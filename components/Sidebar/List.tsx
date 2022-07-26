import React from "react";
import {
  List as ChakraList,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface IProps {
  items: { name: string; route: string; icon: any }[];
}

export const List = ({ items }: IProps) => {
  return (
    <ChakraList spacing={4} px="20px">
      {items.map((item) => (
        <ListItem fontSize="16px" key={item.name}>
          <LinkBox>
            <NextLink href={item.route} passHref>
              <LinkOverlay>
                <ListIcon as={item.icon} color="white" mr="20px" />
                {item.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </ChakraList>
  );
};
