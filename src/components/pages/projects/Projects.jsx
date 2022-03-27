import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import data from './data.json';
import Project from './Project';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const AnimatedFlex = motion(Flex);
const AnimatedBox = motion(Box);

function Projects() {
  return (
    <Box p="20" mx="auto">
      <AnimatedFlex
        justifyItems="center"
        justifyContent="center"
        minW="100%"
        wrap="wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {data.projects.map((project) => (
          <AnimatedBox key={project.title} variants={itemVariants}>
            <Project data={project} h="full" />
          </AnimatedBox>
        ))}
      </AnimatedFlex>
    </Box>
  );
}

export default Projects;
