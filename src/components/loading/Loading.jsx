/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import CommandPrompt from './CommandPrompt';
import TypedSentence from './TypedSentence';
import SystemMessage from './SystemMessage';
import messageData from './data.json';

function LoadingScreen() {
  const systemMessages = messageData.messages;
  const [displayCursor, setDisplayCursor] = useState(true);
  const messageSpeed = useRef(50);
  const navigate = useNavigate();

  useEffect(() => {
    if (systemMessages.length === 0) {
      const timer = setTimeout(() => {
        navigate('/about');
      }, 1000);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [systemMessages.length]);

  const displayNextMessage = () => {
    if (systemMessages.length === 0) {
      return;
    }

    if (displayCursor) {
      setDisplayCursor(false);
    }

    const nextMessage = systemMessages.shift();

    const messageComponent = (
      <SystemMessage
        key={nextMessage.content}
        message={nextMessage.content}
        onFinishDisplay={displayNextMessage}
        speed={messageSpeed.current}
        displayProgress={nextMessage.displayProgress}
      />
    );

    setDisplayedMessages((displayedMessages) => [...displayedMessages, messageComponent]);
    if (messageSpeed.current > 10) {
      messageSpeed.current -= 10;
    }
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
          <Box display="inline-block" h="min-content" fontSize={['sm', null, 'md']}>
            <CommandPrompt />
            {displayedMessages}
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default LoadingScreen;
