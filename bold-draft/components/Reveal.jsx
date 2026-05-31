"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Reveal = forwardRef(function Reveal(
  { children, as = "div", className = "", delay = 0, y = 40, ...rest },
  ref
) {
  const M = motion[as] || motion.div;
  return (
    <M
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </M>
  );
});

export default Reveal;
