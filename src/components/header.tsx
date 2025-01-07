"use client";

import { Box, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export default function Header() {
  return (
    <Box bg={"transparent"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box textTransform={"uppercase"}>
          <a
            href="https://github.com/rybchynski/react-animated-line-clamp"
            target="_blank"
          >
            React animated line clamp
          </a>
        </Box>
        <Box>
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
}
