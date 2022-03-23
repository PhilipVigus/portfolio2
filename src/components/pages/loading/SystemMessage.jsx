import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SystemMessage({ message, onFinishDisplay, speed }) {
  const progressString = ' .';
  const lengthToAdd = progressString.length * 10;
  const [displayedMessage, setDisplayedMessage] = useState(message);

  useEffect(() => {
    if (displayedMessage.length - message.length < lengthToAdd) {
      const timer = setTimeout(() => {
        setDisplayedMessage(`${displayedMessage}${progressString}`);
      }, speed);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();
    return () => {};
  }, [displayedMessage, onFinishDisplay, message.length, speed, lengthToAdd]);

  return <span>{`${displayedMessage}`}</span>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired
};

export default SystemMessage;
