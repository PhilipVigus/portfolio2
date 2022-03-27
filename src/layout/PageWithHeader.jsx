import { Box } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';

function PageWithHeader({ children }) {
  return (
    <Box minH="100vh" bg="light">
      <Header />
      {children}
    </Box>
  );
}

PageWithHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWithHeader;
