import { Box, Flex, HStack, Button, Collapse, VStack, useMediaQuery } from '@chakra-ui/react';

import { useState } from 'react';
import Links from './Links';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuToggle = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Box bg="purple.300">
      <Flex w="100%" px={6} py={5} align="center" justify="right">
        {!isMobile && (
          <HStack spacing="10">
            <Links />
          </HStack>
        )}

        {isMobile && <Button onClick={handleShowMenuToggle}>Toggle</Button>}
      </Flex>

      <Collapse in={showMobileMenu && isMobile}>
        <Box>
          <VStack>
            <Links />
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
