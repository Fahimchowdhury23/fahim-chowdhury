import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ScrollRevealSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px", once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(6px)", y: 28 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;
