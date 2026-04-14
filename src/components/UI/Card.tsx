import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}