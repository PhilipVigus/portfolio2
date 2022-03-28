import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function PageWithHeader({ children }) {
  return (
    <Box minH="100vh" bg="light">
      <Flex minH="100vh" direction="column" justifyContent="space-between">
        <Box>
          <Header />
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
}

PageWithHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWithHeader;
