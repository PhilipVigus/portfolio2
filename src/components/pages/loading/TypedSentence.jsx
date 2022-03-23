import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function TypedSentence({ sentence, speed, onFinishTyping }) {
  const [position, setPosition] = useState(0);

  const getVariedSpeed = () => {
    return Math.floor(Math.random() * 10) + speed;
  };

  useEffect(() => {
    if (position < sentence.length) {
      const timer = setTimeout(() => {
        setPosition(position + 1);
      }, getVariedSpeed());
      return () => clearTimeout(timer);
    }

    onFinishTyping();

    return () => {};
  }, [onFinishTyping, sentence.length, position, speed]);

  return <Text>{sentence.slice(0, position)}</Text>;
}

TypedSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  onFinishTyping: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired
};

export default TypedSentence;
