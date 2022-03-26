import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function SectionHeading({ children }) {
  return <Heading fontSize="5xl">{children}</Heading>;
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired
};

export default SectionHeading;
