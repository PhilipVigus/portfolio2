import { Box, Flex, HStack, Link as UiLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box bg="purple.300">
      <Flex w="100%" px={6} py={5} align="center" justify="right">
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
      </Flex>
    </Box>
  );
}

export default Header;
