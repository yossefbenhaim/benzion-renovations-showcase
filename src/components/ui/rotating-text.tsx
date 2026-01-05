import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center';
  initial?: { y?: string; opacity?: number };
  animate?: { y?: string | number; opacity?: number };
  exit?: { y?: string; opacity?: number };
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: {
    type?: 'spring' | 'tween' | 'inertia';
    damping?: number;
    stiffness?: number;
  };
  rotationInterval?: number;
}

const RotatingText = ({
  texts,
  mainClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  splitLevelClassName = '',
  transition = { type: 'spring', damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const characters = useMemo(() => currentText.split(''), [currentText]);

  const getStaggerDelay = useCallback(
    (index: number, total: number) => {
      switch (staggerFrom) {
        case 'first':
          return index * staggerDuration;
        case 'last':
          return (total - 1 - index) * staggerDuration;
        case 'center':
          const center = (total - 1) / 2;
          return Math.abs(center - index) * staggerDuration;
        default:
          return index * staggerDuration;
      }
    },
    [staggerFrom, staggerDuration]
  );

  return (
    <span className={cn('inline-flex', mainClassName)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {characters.map((char, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              className={cn('inline-block', splitLevelClassName)}
              variants={{
                initial: { y: initial.y, opacity: initial.opacity ?? 0 },
                animate: { 
                  y: animate.y, 
                  opacity: animate.opacity ?? 1,
                  transition: {
                    ...transition,
                    delay: getStaggerDelay(index, characters.length),
                  },
                },
                exit: { 
                  y: exit.y, 
                  opacity: exit.opacity ?? 0,
                  transition: {
                    ...transition,
                    delay: getStaggerDelay(index, characters.length),
                  },
                },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
