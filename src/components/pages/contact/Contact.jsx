import { Box } from '@chakra-ui/react';

function Contact() {
  return <Box>{process.env.REACT_APP_EMAILJS_USER_ID}</Box>;
}

export default Contact;
