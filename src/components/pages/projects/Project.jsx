import { Box, Button, Divider, Flex, Image, Link, Tag, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const GITHUB_LINK_TEXT = 'GitHub Repo';
const DEMO_LINK_TEXT = 'Live Demo';

function Project({ data }) {
  return (
    <Box
      rounded="lg"
      shadow="md"
      bg="dark"
      maxW="lg"
      m="2"
      minH="xl"
      border="1px"
      borderColor="mid">
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={`./images/screenshots/${data.image}`}
        alt="Article"
      />

      <Box p={4}>
        <Flex direction="column">
          <Box>
            <Text display="block" color="white" fontWeight="bold" fontSize="2xl">
              {data.title}
            </Text>
            <Text mt={2} fontSize="sm" color="gray.400">
              {data.description}
            </Text>
          </Box>

          <Box mt="4">
            <Flex justifyContent="space-between">
              {data.links.github && (
                <Button
                  as={Link}
                  href={data.links.github}
                  w="50%"
                  bg="darkAccent"
                  _hover={{ textDecor: 'none', bg: 'lightAccent' }}>
                  <Flex w="full" alignItems="center">
                    <Image src="images/icons/github.png" boxSize="25" objectFit="cover" me={2} />
                    GitHub
                  </Flex>
                </Button>
              )}
              {data.links.demo && (
                <Button
                  as={Link}
                  href={data.links.demo}
                  w="50%"
                  ms={2}
                  bg="darkAccent"
                  _hover={{ textDecor: 'none', bg: 'lightAccent' }}>
                  Demo
                </Button>
              )}
            </Flex>
          </Box>

          <Divider mt="4" />

          <Box mt={4}>
            <Flex alignItems="center" flexWrap="wrap">
              {data.technologies.languages.map((language) => (
                <Tag m="2" key={language} bg="projects.language">
                  {language}
                </Tag>
              ))}
              {data.technologies.frontend.map((tech) => (
                <Tag m="2" key={tech} bg="projects.frontend">
                  {tech}
                </Tag>
              ))}
              {data.technologies.backend.frameworks.map((framework) => (
                <Tag m="2" key={framework} bg="projects.backend">
                  {framework}
                </Tag>
              ))}
              {data.technologies.backend.databases.map((database) => (
                <Tag m="2" key={database} bg="projects.databases">
                  {database}
                </Tag>
              ))}
              {data.technologies.testing.map((framework) => (
                <Tag m="2" key={framework} bg="projects.testing">
                  {framework}
                </Tag>
              ))}
              {data.technologies.ci_cd.map((framework) => (
                <Tag m="2" key={framework} bg="projects.ci_cd">
                  {framework}
                </Tag>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
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
