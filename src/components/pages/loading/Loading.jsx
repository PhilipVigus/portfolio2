import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CommandPrompt from './CommandPrompt';
import Cursor from './Cursor';
// import SystemMessage from './SystemMessage';
import TypedSentence from './TypedSentence';

function Loading() {
  const DELAY_BEFORE_TYPING = 800;

  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, DELAY_BEFORE_TYPING);

    return () => clearTimeout(timer);
  }, []);

  const onFinishTyping = () => {
    setShowCursor(false);
  };

  return (
    <Box p={10} w="75%" mx="auto">
      <Flex>
        <CommandPrompt />
        {isTyping && (
          <TypedSentence sentence="load awesome portfolio" onFinishTyping={onFinishTyping} />
        )}
        {showCursor && <Cursor />}
      </Flex>
      {/* <SystemMessage message="test" onFinishDisplay={onFinishTyping} numberOfDots={15} /> */}
    </Box>
  );
}

export default Loading;
