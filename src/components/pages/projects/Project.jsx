import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Project({ data }) {
  return (
    <Box p={10} w="75%" mx="auto">
      <h2>{data.title}</h2>
      <Text>{data.description}</Text>
    </Box>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
