import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TypedSentence({ sentence, onFinishTyping }) {
  const TYPING_DELAY = 130;

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

  return <>{sentence.slice(0, charactersTyped)}</>;
}

TypedSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  onFinishTyping: PropTypes.func.isRequired
};

export default TypedSentence;
