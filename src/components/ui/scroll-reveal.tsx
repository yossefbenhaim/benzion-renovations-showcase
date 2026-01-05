import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0.1,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 4,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.4'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [baseOpacity, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [baseRotation, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [blurStrength, 0]);

  const blurFilter = useTransform(blur, (v) => enableBlur ? `blur(${v}px)` : 'none');

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{
        opacity,
        rotateX,
        y,
        filter: blurFilter,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center bottom',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
