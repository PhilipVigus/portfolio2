import { Box, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <Box p={10} w="75%" mx="auto">
      <Box bg="light" p="8" rounded="lg">
        <SectionHeading>About Me</SectionHeading>
        <Text mt={2}>
          After qualifying with a degree in Computer Science, I spent the early part of my career in
          the tech industry, initially as a developer before moving into business development. I
          became an ICT teacher before taking a role in educational quality assurance.
        </Text>

        <Text mt={4}>
          About two and a half years a go I changed direction, returning to my roots in software
          development. I completed the Maker&apos;s Academy boot camp, and soon after secured a role
          as developer with Mumsnet where I still work. I have been heavily involved in the
          migration of the company&apos;s website from a legacy Java implementation to a new
          codebase using the TALL stack (Tailwind, Alpine, Livewire and Laravel).
        </Text>

        <Text mt={4}>
          In addition to the technical knowledge required to work as a developer, I have excellent
          communication and general interpersonal skills from the various client-facing roles I have
          held in the past. I love the blend of creative and analytical skills required from a
          developer, and seeing an application grow before my eyes really excites me. I am happiest
          when I&apos;m learning, and the constantly changing tech landscape means that there will
          always be something new to understand.
        </Text>

        <Text mt={4}>My responsibilities at Mumsnet have included:</Text>
        <UnorderedList>
          <ListItem>
            Day-to-day lead of the project rebuilding the administrative functions of the site
          </ListItem>
          <ListItem>
            Implementing the CMS using a headless Wordpress with a Laravel frontend
          </ListItem>
          <ListItem>
            Part of a team of three who responsible for the site&apos;s main forum
          </ListItem>
          <ListItem>
            Mentoring new developers and onboarding colleagues to the backend codebase
          </ListItem>
          <ListItem>
            Optimising SQL scripts to speed up the migration of millions of records to a new
            database
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default About;
