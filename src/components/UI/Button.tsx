import { motion, type HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';   // ✅ import type pour ReactNode

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-secondary text-white hover:bg-amber-600",
    secondary: "bg-primary text-white hover:bg-emerald-800",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}