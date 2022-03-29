import { Link as UiLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeaderLink({ children, path }) {
  const isActiveLink = useLocation().pathname === path;

  return (
    <UiLink
      as={Link}
      to={path}
      fontSize="2xl"
      variant={isActiveLink ? 'active' : 'inactive'}
      _hover={{ textDecoration: 'none', color: 'orange.200' }}>
      {children}
    </UiLink>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired
};

export default HeaderLink;
