import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedBox = motion(Box);

function SkillCard({ title, skills }) {
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
      <Heading>{title}</Heading>
      <UnorderedList>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </UnorderedList>
    </AnimatedBox>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillCard;
