import {
  Box,
  Flex,
  HStack,
  Link as UiLink,
  Button,
  Collapse,
  VStack,
  useMediaQuery
} from '@chakra-ui/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuToggle = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Box bg="purple.300">
      <Flex w="100%" px={6} py={5} align="center" justify="right">
        {!isMobile && (
          <HStack spacing="10">
            <UiLink as={Link} to="/about">
              About Me
            </UiLink>
            <UiLink as={Link} to="/projects">
              Projects
            </UiLink>
            <UiLink as={Link} to="/contact">
              Contact
            </UiLink>
          </HStack>
        )}

        {isMobile && <Button onClick={handleShowMenuToggle}>Toggle</Button>}
      </Flex>

      <Collapse in={showMobileMenu && isMobile}>
        <Box>
          <VStack>
            <UiLink as={Link} to="/about">
              About Me
            </UiLink>
            <UiLink as={Link} to="/projects">
              Projects
            </UiLink>
            <UiLink as={Link} to="/contact">
              Contact
            </UiLink>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
