import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface SonarGridProps {
  ringWidth?: number;
  speed?: number;
  amplitude?: number;
  pingEvery?: number;
  interactive?: boolean;
  spacing?: number;
  baseOpacity?: number;
  color?: string;
}

export const SonarGrid: React.FC<SonarGridProps> = ({
  ringWidth = 1,
  speed = 12,
  amplitude = 1.08,
  pingEvery = 3,
  interactive = true,
  spacing = 150,
  baseOpacity = 0.13,
  color = '#6f9dff',
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="sonar-grid-surface pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ '--sonar-color': color, '--sonar-spacing': `${spacing}px` } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(20,38,76,0.2),transparent_68%)]" />
      <div className="absolute inset-0 opacity-70" style={{
        backgroundImage: `radial-gradient(circle at 50% 42%, transparent 0, transparent calc(var(--sonar-spacing) - 1px), color-mix(in srgb, var(--sonar-color) 13%, transparent) var(--sonar-spacing), transparent calc(var(--sonar-spacing) + 1px))`,
      }} />
      <div className="absolute left-1/2 top-[42%] aspect-square w-[min(88vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderWidth: ringWidth, borderColor: `color-mix(in srgb, ${color} 18%, transparent)` }} />
      {Array.from({ length: 4 }, (_, index) => (
        <motion.div
          key={index}
          className="sonar-grid-motion absolute left-1/2 top-[42%] aspect-square w-[min(88vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderWidth: ringWidth, borderColor: color, opacity: baseOpacity }}
          initial={{ scale: 0.12 + index * 0.04, opacity: reduceMotion ? baseOpacity * 0.45 : 0 }}
          animate={reduceMotion ? { scale: 0.72 + index * 0.06, opacity: baseOpacity * 0.45 } : {
            scale: [0.12 + index * 0.04, amplitude],
            opacity: [baseOpacity, 0],
          }}
          transition={{ duration: speed, repeat: reduceMotion ? 0 : Infinity, ease: 'linear', delay: index * pingEvery }}
        />
      ))}
      {interactive && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0,transparent_35%,rgba(8,9,11,0.16)_76%)]" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#08090b]/70 to-transparent" />
    </div>
  );
};

export default SonarGrid;
