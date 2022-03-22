import { Box } from '@chakra-ui/react';
import TypedSentence from './TypedSentence';

function Loading() {
  return (
    <Box p={10} w="75%" mx="auto">
      <TypedSentence sentence="test" />
    </Box>
  );
}

export default Loading;
