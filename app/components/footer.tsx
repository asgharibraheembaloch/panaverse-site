"use client"

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { PanaverseSocial, PiaicSocial } from './icons';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 Panaverse and PIAIC. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse/streams'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Facbook'} href={'https://www.facebook.com/groups/panaverse'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/panaverse'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'PIAIC'} href={'https://www.piaic.org/'}>
            <PiaicSocial />
          </SocialButton>
          <SocialButton label={'Panaverse'} href={'https://www.panaverse.co/'}>
            <PanaverseSocial />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}