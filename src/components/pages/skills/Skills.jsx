import { Box, SimpleGrid } from '@chakra-ui/react';
import SkillCard from './SkillCard';
import data from './data.json';

function Skills() {
  return (
    <Box p={10} w="75%" mx="auto">
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="2">
        <SkillCard skills={data.skills.languages} />
        <SkillCard skills={data.skills.backend} />
        <SkillCard skills={data.skills.frontend} />
        <SkillCard skills={data.skills.databases} />
        <SkillCard skills={data.skills.testing} />
        <SkillCard skills={data.skills.devops} />
        <SkillCard skills={data.skills.other} />
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
