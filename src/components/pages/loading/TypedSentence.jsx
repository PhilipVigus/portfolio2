import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TypedSentence({ sentence }) {
  const TYPING_DELAY = 300;

  const [charactersTyped, setCharactersTyped] = useState(0);

  useEffect(() => {
    let timer;

    const addLetter = () => {
      if (charactersTyped !== sentence.length) {
        timer = setTimeout(() => {
          setCharactersTyped((prev) => prev + 1);
          addLetter();
        }, TYPING_DELAY);
      }
    };

    addLetter();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return <Text>{sentence.substring(0, charactersTyped)}</Text>;
}

TypedSentence.propTypes = {
  sentence: PropTypes.string.isRequired
};

export default TypedSentence;
