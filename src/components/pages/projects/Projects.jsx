import { Box, Flex } from '@chakra-ui/react';

import data from './data.json';
import Project from './Project';

function Projects() {
  return (
    <Box p="20" mx="auto">
      <Flex justifyItems="center" justifyContent="center" minW="100%" wrap="wrap">
        {data.projects.map((project) => (
          <Project data={project} key={project.title} />
        ))}
      </Flex>
    </Box>
  );
}

export default Projects;
