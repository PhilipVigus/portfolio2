import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function SystemMessage({ message, onFinishDisplay, numberOfDots }) {
  const PROGRESS_STRING = ' .';
  const [dotsAdded, setDotsAdded] = useState(0);

  const [displayedMessage, setDisplayedMessage] = useState(message);

  useEffect(() => {
    if (dotsAdded < numberOfDots) {
      const timer = setTimeout(() => {
        setDotsAdded(dotsAdded + 1);
        setDisplayedMessage(`${displayedMessage}${PROGRESS_STRING}`);
      }, 100);

      return () => clearTimeout(timer);
    }

    onFinishDisplay();

    return () => {};
  }, [displayedMessage, onFinishDisplay, dotsAdded]);

  return <Text>{`${displayedMessage}`}</Text>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  numberOfDots: PropTypes.number.isRequired
};

export default SystemMessage;
