import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommandPrompt from './CommandPrompt';
import Cursor from './Cursor';
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

    setDisplayCursor(false);
    const nextMessage = systemMessages.shift();

    const messageComponent = (
      <SystemMessage
        key={nextMessage}
        message={nextMessage}
        onFinishDisplay={displayNextMessage}
        speed={50}
      />
    );

    // eslint-disable-next-line no-use-before-define
    setDisplayedMessages((displayedMessages) => [...displayedMessages, messageComponent]);
  };

  const [displayedMessages, setDisplayedMessages] = useState([
    <TypedSentence
      key="load awesome portfolio"
      sentence="load awesome portfolio"
      speed={95}
      onFinishDisplay={displayNextMessage}
    />
  ]);

  return (
    <Link to="/about">
      <span style={{ padding: '6vw' }}>
        <CommandPrompt />
        {displayedMessages}
        {displayCursor && <Cursor />}
      </span>
    </Link>
  );
}

export default LoadingScreen;
