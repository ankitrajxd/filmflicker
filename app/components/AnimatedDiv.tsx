"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

const AnimatedDiv = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.7, ease: 'easeInOut'}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
