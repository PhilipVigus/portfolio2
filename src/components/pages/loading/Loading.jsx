/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
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
      <Box>
        <CommandPrompt />
        {displayedMessages}
      </Box>
    </Link>
  );
}

export default LoadingScreen;
