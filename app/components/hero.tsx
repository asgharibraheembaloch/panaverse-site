"use client";

import {
  chakra,
  Link,
  Stack,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const HeroSection = () => {
  return (
    <Box pb={8}>
      <Stack
        pos="relative"
        bgGradient={`linear(to-l, green.500, green.400 , cyan.400)`}
        height="250px"
        w="100%"
      ></Stack>
      <Box
        maxW="3xl"
        p={4}
        isolation="isolate"
        zIndex={3}
        mt="-10rem"
        marginInline="auto"
      >
        <Box
          boxShadow={useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.9)"
          )}
          bg={useColorModeValue("white", "gray.800")}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
        >
          <Stack
            pos="relative"
            zIndex={1}
            direction="column"
            spacing={5}
            textAlign="left"
          >
            <chakra.h1 fontSize="3xl" lineHeight={1.2} fontWeight="bold">
              Certified Web 3.0 and Metaverse Developer
            </chakra.h1>
            <chakra.h1
              color="gray.400"
              fontSize="xl"
              maxW="600px"
              lineHeight={1.2}
            >
              A One and Quarter Years Panaverse DAO Earn
              as you Learn Program Getting Ready for the Next Generation of the
              Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence
              (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies.
            </chakra.h1>
            <Stack direction={{ base: "column", md: "row" }} spacing={3} alignItems='center' justifyContent='center'>
              <chakra.button
                h={10}
                px={6}
                color="white"
                fontSize="md"
                rounded="md"
                lineHeight={1}
                bg="green.400"
                _hover={{ bg: "blue.600" }}
              >
                <Link color='white.500' href='https://www.piaic.org/' isExternal>
                  Enroll Now
                </Link>
              </chakra.button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
