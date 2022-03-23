import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TypedSentence({ sentence, speed, onFinishDisplay }) {
  const [position, setPosition] = useState(0);

  const getSpeedVariance = () => {
    return Math.floor(Math.random() * 10);
  };

  useEffect(() => {
    const variableSpeed = getSpeedVariance() + parseInt(speed, 10);

    if (position < sentence.length) {
      const timer = setTimeout(() => {
        setPosition(position + 1);
      }, variableSpeed);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();
    return () => {};
  }, [onFinishDisplay, sentence.length, position, speed]);

  return <span>{sentence.slice(0, position)}</span>;
}

TypedSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired
};

export default TypedSentence;
