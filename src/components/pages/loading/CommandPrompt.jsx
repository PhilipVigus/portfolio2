import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function CommandPrompt() {
  return (
    <Flex>
      <Text>phil@awesome-dev</Text>:<Text>~</Text>
      <Text whiteSpace="pre">$ </Text>
    </Flex>
  );
}

export default CommandPrompt;
