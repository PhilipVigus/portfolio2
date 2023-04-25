import { Box, Container, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="mid" color="white">
      <Container justify="center" align="center" p={4}>
        <Text>© 2023 Phil Vigus</Text>
      </Container>
    </Box>
  );
}

export default Footer;
