import React, { FC } from 'react';
import { motion, Transition } from 'framer-motion';

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around',
};
const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: '#fff',
  borderRadius: '0.5rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '60%',
  },
};
const loadingCircleTransition: Transition = {
  duration: 0.4,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
};

const Loader: FC = () => {
  return (
    <div data-testid='loader'>
      <div className='fixed  w-full min-h-screen z-50 bg-black opacity-30' />
      <div className='flex fixed w-full justify-center items-center h-screen'>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial='start'
          animate='end'
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
