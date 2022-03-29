import { Button, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function SocialLink({ children, href }) {
  return (
    <Button
      as={Link}
      bg="mid"
      href={href}
      target="_blank"
      _hover={{ bg: 'mid', color: 'orange.300' }}
      p={0}
      m={0}>
      {children}
    </Button>
  );
}

SocialLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default SocialLink;
