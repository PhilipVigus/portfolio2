import { Link as UiLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <>
      <UiLink as={Link} to="/about">
        About Me
      </UiLink>
      <UiLink as={Link} to="/projects">
        Projects
      </UiLink>
      <UiLink as={Link} to="/contact">
        Contact
      </UiLink>
    </>
  );
}

export default Links;
