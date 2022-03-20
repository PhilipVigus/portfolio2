import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Collapse, VStack, useMediaQuery, IconButton } from '@chakra-ui/react';

import { useState } from 'react';
import Links from './Links';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuToggle = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Box bg="purple.300">
      <Flex w="100%" p={[null, null, 5]} justify="right">
        {!isMobile && (
          <HStack spacing="10">
            <Links />
          </HStack>
        )}

        {isMobile && (
          <IconButton
            onClick={handleShowMenuToggle}
            aria-label="Toggle mobile menu"
            colorScheme="alpha"
            size="lg"
            icon={<HamburgerIcon />}>
            Toggle
          </IconButton>
        )}
      </Flex>

      <Collapse in={showMobileMenu && isMobile}>
        <VStack>
          <Links />
        </VStack>
      </Collapse>
    </Box>
  );
}

export default Header;
