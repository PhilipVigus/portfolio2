import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { childVariants } from './animationVariants';

const AnimatedListItem = motion(ListItem);

function SkillListItem({ skillList }) {
  return (
    <AnimatedListItem variants={childVariants}>
      <ListIcon as={ChevronRightIcon} />
      <Text as="span" fontWeight="bold">
        {skillList.title}{' '}
      </Text>
      {`(${skillList.list.join(', ')})`}
    </AnimatedListItem>
  );
}

SkillListItem.propTypes = {
  skillList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default SkillListItem;
