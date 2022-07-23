import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";
import {
  MdHome,
  MdSearch,
  MdPlaylistAdd,
  MdFavorite,
  MdLibraryMusic,
} from "react-icons/md";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Playlist", icon: MdPlaylistAdd, route: "/playlist" },
  { name: "Favorite", icon: MdFavorite, route: "/favorite" },
  { name: "Library", icon: MdLibraryMusic, route: "/library" },
];

export const Sidebar = () => {
  return (
    <Box w="100%" h="calc(100vh - 100px)" bg="black" color="gray" px="5px">
      <Box py="20px">
        <Box w="120px" mb="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        {/* navlinks  */}
        <Box mb="20px">
          <List spacing={4}>
            {navMenu.map((item) => (
              <ListItem px="20px" fontSize="16px" key={item.name}>
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
          </List>
        </Box>
      </Box>
    </Box>
  );
};
