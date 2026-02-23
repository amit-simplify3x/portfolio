import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin } from 'lucide-react';
import Button from '../components/ui/Button';
import { resumeData } from '../constants/resumeData';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />

            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="px-5 py-2 rounded-full glass-effect text-primary-500 font-medium text-sm border border-primary-500/20">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
                >
                    Hi, I&apos;m <span className="text-gradient leading-tight">{resumeData.name}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light"
                >
                    A <span className="text-slate-100 font-normal">{resumeData.title}</span> craftying modern,
                    highly performant, and delightful user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="flex items-center gap-2">
                        Download Resume <Download size={20} />
                    </Button>
                    <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                        <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="p-3.5"><Github size={24} /></Button>
                        </a>
                        <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="p-3.5"><Linkedin size={24} /></Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-slate-500 hover:text-white cursor-pointer transition-colors"
                >
                    <a href="#about"><ChevronDown size={32} /></a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
