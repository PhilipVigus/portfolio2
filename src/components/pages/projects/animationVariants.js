const parentVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0
  }
};

export { parentVariants, childVariants };
