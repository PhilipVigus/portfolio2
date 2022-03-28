import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import data from './data.json';
import Project from './Project';
import { parentVariants, childVariants } from './animationVariants';

const AnimatedFlex = motion(Flex);
const AnimatedBox = motion(Box);

function Projects() {
  return (
    <Box px={10} py={10} mx="auto">
      <AnimatedFlex
        justifyItems="center"
        justifyContent="center"
        minW="100%"
        wrap="wrap"
        variants={parentVariants}
        initial="hidden"
        animate="visible">
        {data.projects.map((project) => (
          <AnimatedBox key={project.title} variants={childVariants}>
            <Project data={project} h="full" />
          </AnimatedBox>
        ))}
      </AnimatedFlex>
    </Box>
  );
}

export default Projects;
