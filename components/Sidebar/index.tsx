import NextImage from "next/image";
import { List } from "./List";
import { Box, Divider } from "@chakra-ui/react";
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

const musicMenu = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Fabourites", icon: MdFavorite, route: "/favourites" },
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
          <List items={navMenu} />
        </Box>
        <Divider my="20px" color="gray.700"></Divider>
        <Box mb="20px">
          <List items={musicMenu} />
        </Box>
      </Box>
    </Box>
  );
};
