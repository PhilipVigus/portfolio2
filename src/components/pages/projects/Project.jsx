import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Project({ data }) {
  return (
    <Box p={10} w="75%" mx="auto">
      <h2>{data.title}</h2>
      <Text>{data.description}</Text>
      <Box>
        {data.technologies.languages.map((language) => (
          <Text key={language}>{language}</Text>
        ))}
        {data.technologies.frontend.map((framework) => (
          <Text key={framework}>{framework}</Text>
        ))}
        {data.technologies.backend.frameworks.map((framework) => (
          <Text key={framework}>{framework}</Text>
        ))}
        {data.technologies.backend.databases.map((database) => (
          <Text key={database}>{database}</Text>
        ))}
        {data.technologies.testing.map((framework) => (
          <Text key={framework}>{framework}</Text>
        ))}
        {data.technologies.ci_cd.map((solution) => (
          <Text key={solution}>{solution}</Text>
        ))}
      </Box>
    </Box>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.shape({
      languages: PropTypes.arrayOf(PropTypes.string).isRequired,
      frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
      backend: PropTypes.shape({
        frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
        databases: PropTypes.arrayOf(PropTypes.string).isRequired
      }).isRequired,
      testing: PropTypes.arrayOf(PropTypes.string).isRequired,
      ci_cd: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
};

export default Project;
