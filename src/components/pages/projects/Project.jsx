import { Box, Button, Divider, Flex, Image, Link, Tag, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const GITHUB_LINK_TEXT = 'GitHub Repo';
const DEMO_LINK_TEXT = 'Live Demo';

const AnimatedBox = motion(Box);

function Project({ data }) {
  return (
    <AnimatedBox
      rounded="lg"
      shadow="md"
      bg="dark"
      maxW="lg"
      m="2"
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={`./images/screenshots/${data.image}`}
        alt="Article"
      />

      <Box p={6}>
        <Flex direction="column">
          <Box>
            <Link
              display="block"
              href="/"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}>
              {data.title}
            </Link>
            <Text mt={2} fontSize="sm" color="gray.400">
              {data.description}
            </Text>
          </Box>

          <Box mt="4">
            <Flex justifyContent="space-between">
              {data.links.github && (
                <Button as={Link} href={data.links.github} w="50%" bg="lightAccent">
                  <Flex w="full" alignItems="center">
                    <Image src="images/icons/github.png" boxSize="25" objectFit="cover" me={2} />
                    GitHub
                  </Flex>
                </Button>
              )}
              {data.links.demo && (
                <Button as={Link} href={data.links.demo} w="50%" ms={2} bg="darkAccent">
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
    </AnimatedBox>
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
