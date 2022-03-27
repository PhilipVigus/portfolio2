import { ListIcon, ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';

const AnimatedListItem = motion(ListItem);

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

function SkillListItem({ skillList }) {
  return (
    <AnimatedListItem variants={itemVariants}>
      <ListIcon as={ChevronRightIcon} />
      {`${skillList.title} (${skillList.list.join(', ')})`}
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
