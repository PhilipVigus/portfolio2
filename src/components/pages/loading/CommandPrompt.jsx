import { Text } from '@chakra-ui/react';
import React from 'react';

function CommandPrompt() {
  return (
    <>
      <Text as="span">phil@awesome-dev</Text>:<Text as="span">~</Text>
      <Text as="span">$ </Text>
    </>
  );
}

export default CommandPrompt;
