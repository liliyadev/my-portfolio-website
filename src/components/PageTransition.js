import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }

};

const PageTransition = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={typeof window !== "undefined" ? window.location.pathname : ""}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageTransition;
