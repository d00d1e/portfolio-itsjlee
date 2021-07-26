export const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const SlideDown = {
  in: {
    y: "-150%",
  },
  out: {
    y: "0",
  },
};

export const transition = {
  duration: 1,
  // y: { type: "spring", stiffness: 100, damping: 30 },
  // opacity: { duration: 1 },
};
