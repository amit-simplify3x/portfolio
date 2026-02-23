import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    delay?: number;
}

const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    title,
    subtitle,
    delay = 0
}) => {
    return (
        <section id={id} className={cn("py-20 px-6 sm:px-10 lg:px-20", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay }}
                className="max-w-6xl mx-auto"
            >
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                <span className="text-gradient">{title}</span>
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        <div className="h-1 w-20 bg-gradient-premium mx-auto mt-6 rounded-full" />
                    </div>
                )}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
