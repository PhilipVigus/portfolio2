import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SystemMessage({ message, onFinishDisplay }) {
  const PROGRESS_STEPS = 10;
  const SPEED = 50;
  const PROGRESS_STRING = ' .';

  const [displayedMessage, setDisplayedMessage] = useState(message);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < PROGRESS_STEPS) {
      const timer = setTimeout(() => {
        setDisplayedMessage(`${displayedMessage}${PROGRESS_STRING}`);
        setProgress((val) => val + 1);
      }, SPEED);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();

    return () => {};
  }, [displayedMessage, onFinishDisplay]);

  return <span>{`${displayedMessage}`}</span>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired
};

export default SystemMessage;
