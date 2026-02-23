import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin, Sparkles, Code2, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';
import { resumeData } from '../constants/resumeData';
import profilePhoto from '../assets/Amit photo new.jpg';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
            <div className="absolute top-1/4 -right-4 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 inline-block"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <span className="relative px-5 py-2 rounded-full glass-effect text-primary-400 font-medium text-sm border border-primary-500/20 flex items-center gap-2">
                                    <Sparkles size={14} className="text-secondary-400" /> Available for new opportunities
                                </span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
                        >
                            Hi, I&apos;m <br />
                            <span className="text-gradient leading-tight">{resumeData.name}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
                        >
                            A <span className="text-slate-100 font-normal">{resumeData.title}</span> crafting modern,
                            highly performant, and delightful user experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                        >
                            <a href={resumeData.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full flex items-center justify-center gap-2 group">
                                    Download Resume
                                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                                </Button>
                            </a>
                            <div className="flex items-center gap-4">
                                <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Button variant="outline" size="lg" className="p-3.5 rounded-2xl"><Github size={24} /></Button>
                                </a>
                                <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Button variant="outline" size="lg" className="p-3.5 rounded-2xl"><Linkedin size={24} /></Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Element */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative background circle */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/10 rounded-full blur-3xl -z-10"
                            />

                            {/* Main Photo Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: 0.3
                                }}
                                className="relative z-10 p-4"
                            >
                                <div className="absolute -inset-1 bg-linear-to-tr from-primary-500 via-secondary-500 to-primary-600 rounded-[2.5rem] blur-xl opacity-20 animate-pulse" />
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] group">
                                    <img
                                        src={profilePhoto}
                                        alt={resumeData.name}
                                        className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Floating Tech Badges */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -top-4 -left-4 w-16 h-16 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-primary-400 shadow-xl"
                                >
                                    <Code2 size={28} />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -bottom-6 -right-6 w-20 h-20 bg-slate-900/80 backdrop-blur-md rounded-3xl border border-white/10 flex items-center justify-center text-secondary-400 shadow-xl"
                                >
                                    <Cpu size={32} />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        x: [0, 10, 0]
                                    }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-1/4 -right-8 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2 text-white shadow-xl"
                                >
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Fast Learner</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-slate-500 hover:text-white cursor-pointer transition-colors"
                >
                    <a href="#about" aria-label="Scroll down">
                        <ChevronDown size={32} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
