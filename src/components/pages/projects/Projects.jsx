import { Box } from '@chakra-ui/react';

import data from './data.json';
import Project from './Project';

function Projects() {
  return (
    <Box p={10} w="75%" mx="auto">
      {data.projects.map((project) => (
        <Project data={project} key={project.title} />
      ))}
    </Box>
  );
}

export default Projects;
