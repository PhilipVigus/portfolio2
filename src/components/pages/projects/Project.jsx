import { Box, Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const GITHUB_LINK_TEXT = 'GitHub Repo';
const DEMO_LINK_TEXT = 'Live Demo';

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
        <Link href={data.links.github}>{GITHUB_LINK_TEXT}</Link>
        {data.links.demo !== '' && <Link href={data.links.demo}>{DEMO_LINK_TEXT}</Link>}
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
    }).isRequired,
    links: PropTypes.shape({
      github: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Project;
export { GITHUB_LINK_TEXT as githubLinkText, DEMO_LINK_TEXT as demoLinkText };