import { Box, Flex, Tag } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function TechnologyList({ technologies }) {
  return (
    <Box mt={4}>
      <Flex alignItems="center" flexWrap="wrap">
        {technologies.languages.map((language) => (
          <Tag m={2} key={language} bg="projects.language">
            {language}
          </Tag>
        ))}
        {technologies.frontend.map((tech) => (
          <Tag m={2} key={tech} bg="projects.frontend">
            {tech}
          </Tag>
        ))}
        {technologies.backend.frameworks.map((framework) => (
          <Tag m={2} key={framework} bg="projects.backend">
            {framework}
          </Tag>
        ))}
        {technologies.backend.databases.map((database) => (
          <Tag m={2} key={database} bg="projects.databases">
            {database}
          </Tag>
        ))}
        {technologies.testing.map((framework) => (
          <Tag m={2} key={framework} bg="projects.testing">
            {framework}
          </Tag>
        ))}
        {technologies.ci_cd.map((framework) => (
          <Tag m={2} key={framework} bg="projects.ci_cd">
            {framework}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
}
TechnologyList.propTypes = {
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
};

export default TechnologyList;
