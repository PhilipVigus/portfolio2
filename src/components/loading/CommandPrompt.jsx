import { Text } from '@chakra-ui/react';
import React from 'react';

function CommandPrompt() {
  return (
    <>
      <Text as="span" color="green.300">
        phil@awesome-dev
      </Text>
      :
      <Text as="span" color="teal.200">
        ~
      </Text>
      <Text as="span">$ </Text>
    </>
  );
}

export default CommandPrompt;
