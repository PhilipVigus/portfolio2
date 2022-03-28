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

import { useState } from 'react';
import Links from './Links';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuToggle = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Box bg="mid" color="white">
      <Flex w="100%" px={[8, null, 10, 16]} py={4} justify="space-between" alignItems="baseline">
        <Text fontFamily="Bebas Neue" fontSize="6xl" letterSpacing="wider">
          Phil Vigus
        </Text>
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
