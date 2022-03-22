import { Box } from '@chakra-ui/react';
import TypedSentence from './TypedSentence';

function Loading() {
  const onFinishTyping = () => {
    console.log('finished');
  };

  return (
    <Box p={10} w="75%" mx="auto">
      <TypedSentence sentence="test" onFinishTyping={onFinishTyping} />
    </Box>
  );
}

export default Loading;
