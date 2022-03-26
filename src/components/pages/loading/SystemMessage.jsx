import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function SystemMessage({ message, onFinishDisplay, speed }) {
  const PROGRESS_STEPS = 50 - message.length;
  const PROGRESS_STRING = ' .';

  const [displayedMessage, setDisplayedMessage] = useState(message);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < PROGRESS_STEPS) {
      const timer = setTimeout(() => {
        setDisplayedMessage(`${displayedMessage}${PROGRESS_STRING}`);
        setProgress((val) => val + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();

    return () => {};
  }, [displayedMessage, onFinishDisplay]);

  return <Text>{`${displayedMessage}`}</Text>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired
};

export default SystemMessage;
