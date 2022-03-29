import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Collapse,
  VStack,
  useMediaQuery,
  IconButton,
  Text
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';

import { useState } from 'react';
import Links from './Links';
import SocialLink from './SocialLink';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuToggle = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Box bg="mid" color="white">
      <Flex w="100%" px={[8, null, 10, 16]} py={4} justify="space-between" alignItems="baseline">
        <Box>
          <Text fontFamily="Bebas Neue" fontSize="6xl" letterSpacing="wider">
            Phil Vigus
          </Text>
          <Flex mt={-5} alignItems="center" justifyContent="space-between" ms={-2.5}>
            <SocialLink href="https://www.linkedin.com/in/philvigus/">
              <FaLinkedin size="1.5em" />
            </SocialLink>
            <SocialLink href="https://github.com/PhilipVigus">
              <FaGithub size="1.5em" />
            </SocialLink>
            <SocialLink href="./documents/philvigus_cv.pdf">
              <FaBriefcase size="1.5em" />
            </SocialLink>
          </Flex>
        </Box>
        {!isMobile && (
          <HStack spacing="8">
            <Links />
          </HStack>
        )}
        {isMobile && (
          <IconButton
            onClick={handleShowMenuToggle}
            aria-label="Toggle mobile menu"
            colorScheme="alpha"
            icon={<HamburgerIcon w={10} h={10} />}>
            Toggle
          </IconButton>
        )}
      </Flex>

      <Collapse in={isMobile && showMobileMenu}>
        <VStack>
          <Links />
        </VStack>
      </Collapse>
    </Box>
  );
}

export default Header;
