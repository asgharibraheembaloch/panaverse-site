"use client"

import { HStack, Icon, Text, StackProps, Box, Stack } from "@chakra-ui/react";
import React, { ElementType } from "react";
import {
  PiaicSocial,
  PanaverseSocial,
  FacebookSocial,
  YoutubeSocial,
  GithubSocial,
  TwitterSocial,
} from "./icons";

interface FeaturesProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeaturesProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Social() {
  return (
    <Box>
      <Stack
      >
        <Feature icon={PiaicSocial}>
          Admission Website: https://www.piaic.org/
        </Feature>
        <Feature icon={PanaverseSocial}>
          Syllabus and Community Website: https://www.panaverse.co/
        </Feature>
        <Feature icon={FacebookSocial}>
          Facebook: https://www.facebook.com/groups/panaverse
        </Feature>
        <Feature icon={YoutubeSocial}>
          YouTube Live Channel: https://www.youtube.com/@panaverse/streams
        </Feature>
        <Feature icon={GithubSocial}>
          GitHub Repos: https://github.com/panaverse
        </Feature>
        <Feature icon={TwitterSocial}>
          Twitter: https://twitter.com/Panaverse_edu
        </Feature>
      </Stack>
    </Box>
  );
}
