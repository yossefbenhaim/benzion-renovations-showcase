import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GridScanProps {
  sensitivity?: number;
  lineThickness?: number;
  linesColor?: string;
  gridScale?: number;
  scanColor?: string;
  scanOpacity?: number;
}

const GridScan = ({
  sensitivity = 0.55,
  lineThickness = 1,
  linesColor = "hsl(var(--primary) / 0.15)",
  gridScale = 0.1,
  scanColor = "hsl(var(--primary))",
  scanOpacity = 0.4,
}: GridScanProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gridSize = Math.round(100 * gridScale);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${linesColor} ${lineThickness}px, transparent ${lineThickness}px),
            linear-gradient(90deg, ${linesColor} ${lineThickness}px, transparent ${lineThickness}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Animated scan line - horizontal */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${scanColor}, transparent)`,
          opacity: scanOpacity,
          boxShadow: `0 0 20px 5px ${scanColor}`,
        }}
        animate={{
          top: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Animated scan line - vertical */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent, ${scanColor}, transparent)`,
          opacity: scanOpacity * 0.7,
          boxShadow: `0 0 20px 5px ${scanColor}`,
        }}
        animate={{
          left: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Glow effect at intersections */}
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${scanColor} 0%, transparent 70%)`,
          opacity: scanOpacity * 0.5,
          filter: 'blur(20px)',
        }}
        animate={{
          x: ['-50%', '100%', '-50%'],
          y: ['-50%', '80%', '-50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default GridScan;
