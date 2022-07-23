import { Box } from "@chakra-ui/react";
import { ComponentPropsWithoutRef } from "react";
import { Sidebar } from "../Sidebar";

export const PlayerLayout = ({ children }: ComponentPropsWithoutRef<"div">) => {
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Box pos={"absolute"} top={0} left={0} w={"250px"}>
        <Sidebar />
      </Box>
      <Box ml={"250px"} mb={"100px"}>
        {children}
      </Box>
      <Box pos={"absolute"} bottom={0}>
        player
      </Box>
    </Box>
  );
};
