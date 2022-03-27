import { Box, ListItem, Text, Heading, ListIcon, List } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';

const AnimatedBox = motion(Box);
const AnimatedText = motion(Text);
const AnimatedList = motion(List);

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

function About() {
  return (
    <AnimatedBox
      p={10}
      w="75%"
      mx="auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <Box bg="light" p="8" rounded="lg">
        <Heading variant="section">About Me</Heading>
        <AnimatedText mt={2} variants={itemVariants}>
          After qualifying with a degree in Computer Science, I spent the early part of my career in
          the tech industry, initially as a developer before moving into business development. I
          became an ICT teacher before taking a role in educational quality assurance.
        </AnimatedText>

        <AnimatedText mt={4} variants={itemVariants}>
          About two and a half years a go I changed direction, returning to my roots in software
          development. I completed the Maker&apos;s Academy boot camp, and soon after secured a role
          as developer with Mumsnet where I still work. I have been heavily involved in the
          migration of the company&apos;s website from a legacy Java implementation to a new
          codebase using the TALL stack (Tailwind, Alpine, Livewire and Laravel), and was promoted
          to mid-level developer within a year of working there.
        </AnimatedText>

        <AnimatedText mt={4} variants={itemVariants}>
          In addition to the technical knowledge required to work as a developer, I have excellent
          communication and general interpersonal skills from the various client-facing roles I have
          held in the past. I love the blend of creative and analytical skills required from a
          developer, and seeing an application grow before my eyes really excites me. I am happiest
          when I&apos;m learning, and the constantly changing tech landscape means that there will
          always be something new to understand.
        </AnimatedText>

        <AnimatedText mt={4} variants={itemVariants}>
          My responsibilities at Mumsnet have included:
        </AnimatedText>

        <AnimatedList variants={itemVariants}>
          <ListItem>
            <ListIcon as={ChevronRightIcon} />
            Day-to-day lead of the project rebuilding the administrative functions of the site
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} />
            Implementing the CMS using a headless Wordpress with a Laravel frontend
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} />
            Part of a team of three who responsible for the site&apos;s main forum
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} />
            Mentoring new developers and onboarding colleagues to the backend codebase
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} />
            Optimising SQL scripts to speed up the migration of millions of records to a new
            database
          </ListItem>
        </AnimatedList>
      </Box>
    </AnimatedBox>
  );
}

export default About;
