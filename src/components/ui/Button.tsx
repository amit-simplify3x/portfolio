import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...props
}) => {
    const variants = {
        primary: "bg-gradient-premium text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]",
        secondary: "bg-dark-surface text-slate-200 hover:bg-slate-700",
        outline: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
        ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type || "button"}
            className={cn(
                "rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </motion.button>
    );
};

export default Button;
