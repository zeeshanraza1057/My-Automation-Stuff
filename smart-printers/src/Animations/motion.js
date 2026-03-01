// // motion.js
// // Centralized Framer Motion variants for reusable animations

// export const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 }
// };

// export const fadeInDown = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0 }
// };

// export const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 }
// };

// export const scaleUp = {
//   hidden: { scale: 0.8, opacity: 0 },
//   visible: { scale: 1, opacity: 1 }
// };

// // For staggered children animation
// export const containerStagger = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// export const cardVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// export const buttonHover = {
//   rest: { scale: 1 },
//   hover: { scale: 1.05, transition: { duration: 0.3 } }
// };

// Reusable animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export const scaleDown = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
};

export const rotateUp = {
  hidden: { opacity: 0, rotate: 180 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
};

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const bounce = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 0.6 },
  },
};

export const floatUpDown = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0],
    transition: { repeat: Infinity, duration: 2 },
  },
};
