"use client";

import { Box, Icon, StackProps, Text, HStack, Stack } from '@chakra-ui/react'
import React, { ElementType } from 'react'
import { PiaicLogo } from './icons';

interface FeaturesProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeaturesProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6' align='start'>
      <Icon as={icon} boxSize={['8', '8', '12']} />
      <Text textAlign='left' pt='72px' fontSize='lg' fontWeight='bold' >
        {children}
      </Text>
    </HStack>
  );
}

export function Header() {
  return (
    <Box w='100%' m='auto' h='151px' as='section' bg='#D6E6E5'>
      <Stack px='230px' pt='10px' direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
        <Feature icon={PiaicLogo}>
          Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
        </Feature>
      </Stack>
    </Box>
  );
}
