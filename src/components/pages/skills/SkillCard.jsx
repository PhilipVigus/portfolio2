import { Box, Flex, Heading, ListItem, Tag, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedBox = motion(Box);

function SkillCard({ skills }) {
  return (
    <AnimatedBox
      bg="dark"
      color="white"
      p="4"
      rounded="lg"
      shadow="md"
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Heading>{skills.title}</Heading>
      <Flex as={UnorderedList} wrap="wrap">
        {skills.list.map((skill) => (
          <ListItem as={Tag} key={skill} me={2} my={1}>
            {skill}
          </ListItem>
        ))}
      </Flex>
    </AnimatedBox>
  );
}

SkillCard.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default SkillCard;
