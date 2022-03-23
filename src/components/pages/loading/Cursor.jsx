import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

function Cursor() {
  const FLASH_TIME = 350;

  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(!isShowing);
    }, FLASH_TIME);

    return () => clearTimeout(timer);
  }, [isShowing]);

  if (!isShowing) {
    return null;
  }

  return <Text>&#9608;</Text>;
}

export default Cursor;
