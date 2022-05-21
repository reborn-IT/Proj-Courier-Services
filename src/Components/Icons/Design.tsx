/* eslint-disable max-len */
import * as React from 'react';
import './Style.scss';
import { motion, Transition, Variants } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay, type: 'spring', duration: 1.5, bounce: 0,
        },
        opacity: { delay, duration: 0.0025 },
      },
    };
  },
};

interface SvgDesignInterface {
  transition?: Transition;
  variants?: Variants;
}

function SvgDesign({ transition, variants }: SvgDesignInterface) {
  return (
    <motion.svg
      stroke="none"
      xmlns="http://www.w3.org/2000/motion.svg"
      initial="hidden"
      animate="visible"
      viewBox="0,0,1000, 1000"
      transition={transition}
      variants={variants}
    >
      <motion.g opacity={0.67}>
        <motion.path
          d="M335.5 266.5V137C335.5 65.48 393.479 7.5 465 7.5S594.5 65.48 594.5 137v129.5h-259Z"
          stroke="#FE7B01"
          strokeWidth={15}
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M662.718 609.5V480c0-71.521 57.979-129.5 129.5-129.5 71.52 0 129.5 57.979 129.5 129.5v129.5h-259Z"
          stroke="#525298"
          strokeWidth={15}
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M594.5 951.499H465c-71.521 0-129.5-57.979-129.5-129.5s57.979-129.5 129.5-129.5h129.5v259Z"
          stroke="#404040"
          strokeWidth={15}
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M792 951.499H662.5v-259H792c71.521 0 129.5 57.979 129.5 129.5s-57.979 129.5-129.5 129.5Z"
          stroke="#FE7B01"
          strokeWidth={15}
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M662.718 137V7.5h259V137c0 71.521-57.98 129.5-129.5 129.5-71.521 0-129.5-57.979-129.5-129.5Z"
          stroke="#01CC8F"
          strokeWidth={15}
          variants={draw}
          custom={2}
        />
        <motion.circle
          custom={3}
          variants={draw}
          cx={137}
          cy={137}
          r={129.5}
          stroke="#525298"
          strokeWidth={15}
        />
        <motion.circle
          custom={3.5}
          variants={draw}
          cx={465}
          cy={479.5}
          r={129.5}
          stroke="#D32424"
          strokeWidth={15}
        />
        <motion.path
          d="M266.5 507v444.109H150c-78.7 0-142.5-63.8-142.5-142.5V364.5H124c78.701 0 142.5 63.799 142.5 142.5Z"
          stroke="#276AEC"
          strokeWidth={15}
          custom={4}
          variants={draw}
        />
        <motion.path
          d="M116.459 647.228c17.459-10.166 34.917-20.291 52.292-30.625 1.208-.708 2.042-2.875 2.167-4.416 2.75-36.792 20.958-63.584 53.291-80.625 5.375-2.834 11.709-4 18.75-3.417 9.292.75 15.167 8.125 14.209 17.417-.834 8.125-4.917 14.708-9.75 20.916-10.75 13.709-24.292 24.459-38.167 34.709-8.792 6.5-17.958 12.458-27.208 18.875 2.291 4.5 7.875 7.708 12.708 7.291 9.167-.75 13.542-2.833 20.458-5.583 21.709-8.625 40.459-22.125 57.084-38.25 12.375-12 23.875-24.875 35.75-37.375 1.041-1.083 2-2.292 3.041-3.25 1.625-1.5 3.25-2.083 4.792-1.042 1.667.75 1.042 3.459.583 4.875-.75 2.334-2 4.584-3.5 6.5-23.375 30.459-50.291 56.959-85.208 74.084-7.667 3.75-16 6.375-24.292 8.458-11.916 2.958-22.458.5-29.541-10.958a62450.453 62450.453 0 0 0-50.667 27.166h18.125c1 0 2-.125 3-.041 2.708.208 6.292-.334 6.542 3.583.25 3.833-3.375 3.875-5.75 3.917-12.042.291-24.125.458-36.167.166-4.917-.125-7.292-3.375-5.292-7.791 5.667-12.834 11.959-25.459 18.292-38 .583-1.167 2.708-2.959 5.083-1.792 1.75 1.083 1.709 3.917 1.167 5.292-3.292 8.291-6.958 16.458-10.542 24.666-.625 1.459-1.333 2.917-2 4.375-1.5 2.25-.625 1.667.75.875Zm62.125-37.666c-.125 1.5 2.125-.459 2.5-.709 19.625-13.083 38.792-26.75 54.667-44.375 4.25-4.708 7.833-10.333 10.458-16.125 3.459-7.708-.916-13.083-9.291-11.541-5.417 1-11.042 2.791-15.75 5.625-20.042 11.958-36 35.25-40.084 51.791-1.5 6.334-1.5 8.084-2.5 15.334Z"
          stroke="#404040"
          variants={draw}
          strokeWidth={4}
          custom={3}
        />
      </motion.g>
    </motion.svg>
  );
}

SvgDesign.defaultProps = {
  transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  variants: {
    exit: { y: '50%', opacity: 0, transition },
    enter: {
      y: '0%',
      opacity: 1,
      transition,
    },
  },
};

export default SvgDesign;
