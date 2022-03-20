import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Project({ data }) {
  return (
    <Box p={10} w="75%" mx="auto">
      {data.title}
    </Box>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
