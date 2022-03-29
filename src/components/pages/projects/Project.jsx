import { Box, Button, Divider, Flex, Image, Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import TechnologyList from './TechnologyList';

const GITHUB_LINK_TEXT = 'GitHub';
const DEMO_LINK_TEXT = 'Demo';

const AnimatedBox = motion(Box);

function Project({ data }) {
  return (
    <AnimatedBox
      rounded="lg"
      boxShadow="md"
      bg="dark"
      maxW="lg"
      m={4}
      minH="xl"
      border="1px"
      borderColor="mid"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}>
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={`./images/screenshots/${data.image}`}
        alt={`${data.title} screenshot`}
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
                  target="_blank"
                  w="50%"
                  bg="darkAccent"
                  _hover={{ textDecor: 'none', bg: 'lightAccent' }}>
                  <Flex w="full" alignItems="center">
                    <Image src="images/icons/github.png" boxSize={25} objectFit="cover" me={2} />
                    {GITHUB_LINK_TEXT}
                  </Flex>
                </Button>
              )}
              {data.links.demo && (
                <Button
                  as={Link}
                  href={data.links.demo}
                  target="_blank"
                  w="50%"
                  ms={2}
                  bg="darkAccent"
                  _hover={{ textDecor: 'none', bg: 'lightAccent' }}>
                  {DEMO_LINK_TEXT}
                </Button>
              )}
            </Flex>
          </Box>

          <Divider mt="4" />

          <TechnologyList technologies={data.technologies} />
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
