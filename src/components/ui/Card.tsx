import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default Card;
