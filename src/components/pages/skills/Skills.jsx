import { Box, SimpleGrid } from '@chakra-ui/react';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <Box p={10} w="75%" mx="auto">
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="2">
        <SkillCard title="Languages" skills={['PHP', 'Javascript', 'Java', 'Ruby']} />
        <SkillCard
          title="Frameworks"
          skills={['Tailwind', 'Alpine', 'Laravel', 'Livewire', 'Spring Boot', 'React']}
        />
        <SkillCard title="Databases" skills={['SQL', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB']} />

        <SkillCard
          title="Testing"
          skills={['TDD', 'PHPUnit', 'JUnit', 'Jest', 'React Testing Library']}
        />
        <SkillCard
          title="DevOps"
          skills={['Heroku', 'AWS', 'Circle CI', 'Travis CI', 'GitHub Actions', 'Docker']}
        />
        <SkillCard title="Other" skills={['Git', 'Agile/Scrum', 'OOP', 'RESTful APIs']} />
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
