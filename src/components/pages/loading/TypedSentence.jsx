import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function TypedSentence({ sentence, onFinishTyping }) {
  const TYPING_DELAY = 300;

  const [charactersTyped, setCharactersTyped] = useState(0);

  useEffect(() => {
    if (charactersTyped < sentence.length) {
      const timer = setTimeout(() => {
        setCharactersTyped(charactersTyped + 1);
      }, TYPING_DELAY);

      return () => clearTimeout(timer);
    }

    onFinishTyping();

    return () => {};
  }, [onFinishTyping, sentence.length, charactersTyped]);

  return <Text>{sentence.slice(0, charactersTyped)}</Text>;
}

TypedSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  onFinishTyping: PropTypes.func.isRequired
};

export default TypedSentence;
