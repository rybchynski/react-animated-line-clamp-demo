"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";
import { ReactLineClamp } from "react-animated-line-clamp";
import { examples } from "../content";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Box p={4}>
        <Stack as={Container} maxW={"6xl"} textAlign={"center"} padding={"20"}>
          <Heading fontSize={"3xl"}>React Animated Line Clamp Demo</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            <Link
              href="https://github.com/rybchynski/react-animated-line-clamp"
              target="_blank"
              variant={"underline"}
              colorPalette={"teal"}
            >
              React Animated Line Clamp
            </Link>{" "}
            is a lightweight and zero-dependency{" "}
            <Link
              href="https://www.npmjs.com/package/react-animated-line-clamp"
              target="_blank"
              variant={"underline"}
              colorPalette={"teal"}
            >
              npm package
            </Link>{" "}
            with React functional component for animating text truncation with
            line clamping. This is a demo of how it works with{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              variant={"underline"}
              colorPalette={"teal"}
            >
              NextJS
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.chakra-ui.com/"
              target="_blank"
              variant={"underline"}
              colorPalette={"teal"}
            >
              Chakra UI
            </Link>
            .
          </Text>
        </Stack>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
            {examples.map((example) => (
              <HStack align={"top"} mb={10} key={example.id}>
                <Box color={"green.400"} px={2}>
                  <Icon color="green" fontSize={20}>
                    <FaCheck />
                  </Icon>
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{example.title}</Text>
                  <ReactLineClamp
                    content={
                      <Text
                        color={"gray.600"}
                        fontSize={"md"}
                        fontWeight={400}
                        textAlign={example.textAlign || "justify"}
                      >
                        {example.text}
                      </Text>
                    }
                    showMoreButtonContent={example.showMoreText}
                    showLessButtonContent={example.showLessText}
                    hideExpandedButton={example.hideLessButton}
                    duration={example.duration}
                    lineClamp={example.lines}
                    classes={{
                      button: styles.button,
                      contentWrapper: styles.contentWrapper,
                    }}
                  />
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
