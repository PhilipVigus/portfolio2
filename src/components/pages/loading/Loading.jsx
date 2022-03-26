/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Flex, Box } from '@chakra-ui/react';
import CommandPrompt from './CommandPrompt';
import TypedSentence from './TypedSentence';
import SystemMessage from './SystemMessage';
import messageData from './data.json';

function LoadingScreen() {
  const systemMessages = messageData.messages;
  const [displayCursor, setDisplayCursor] = useState(true);

  const displayNextMessage = () => {
    if (systemMessages.length === 0) {
      return;
    }

    if (displayCursor) {
      setDisplayCursor(false);
    }

    const nextMessage = systemMessages.shift();

    const messageComponent = (
      <SystemMessage key={nextMessage} message={nextMessage} onFinishDisplay={displayNextMessage} />
    );

    setDisplayedMessages((displayedMessages) => [...displayedMessages, messageComponent]);
  };

  const [displayedMessages, setDisplayedMessages] = useState([
    <TypedSentence
      key="load awesome portfolio"
      sentence="load awesome portfolio"
      speed={95}
      onFinishTyping={displayNextMessage}
    />
  ]);

  return (
    <Link to="/about">
      <Box minH="100vh" minW="100vw" color="white" backgroundColor="black">
        <Flex minH="100vh" alignItems="flex-end" p={[5, 10, 16, 20]}>
          <Text display="inline-block" h="min-content" fontSize={['sm', null, 'md']}>
            <CommandPrompt />
            {displayedMessages}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}

export default LoadingScreen;
