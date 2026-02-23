import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { resumeData } from '../constants/resumeData';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me" subtitle="A brief introduction to my professional journey and what drives me.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-xl text-slate-300 leading-relaxed">
                        {resumeData.summary}
                    </p>
                    <p className="text-slate-400">
                        Based in Bengaluru, I specialize in building modern web applications that are as beautiful as they are functional.
                        I love working with technologies like React, Next.js, and TypeScript to solve complex problems and create seamless user experiences.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="glass-effect p-4 rounded-2xl border border-primary-500/10">
                            <div className="text-3xl font-bold text-gradient">2+</div>
                            <div className="text-sm text-slate-400">Years Experience</div>
                        </div>
                        <div className="glass-effect p-4 rounded-2xl border border-secondary-500/10">
                            <div className="text-3xl font-bold text-gradient">10+</div>
                            <div className="text-sm text-slate-400">Projects Completed</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="flex flex-col items-center text-center space-y-3 py-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-500 mb-2">
                            <span className="text-2xl font-bold">#1</span>
                        </div>
                        <h3 className="font-bold text-slate-100">Performance</h3>
                        <p className="text-sm text-slate-400">Optimized, fast-loading, and responsive web apps.</p>
                    </Card>
                    <Card className="flex flex-col items-center text-center space-y-3 py-8" delay={0.1}>
                        <div className="w-12 h-12 rounded-2xl bg-secondary-500/20 flex items-center justify-center text-secondary-500 mb-2">
                            <span className="text-2xl font-bold">#2</span>
                        </div>
                        <h3 className="font-bold text-slate-100">Experience</h3>
                        <p className="text-sm text-slate-400">Smooth animations and intuitive user flows.</p>
                    </Card>
                    <Card className="flex flex-col items-center text-center space-y-3 py-8" delay={0.2}>
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-500 mb-2">
                            <span className="text-2xl font-bold">#3</span>
                        </div>
                        <h3 className="font-bold text-slate-100">Quality</h3>
                        <p className="text-sm text-slate-400">Clean, maintainable, and production-ready code.</p>
                    </Card>
                    <Card className="flex flex-col items-center text-center space-y-3 py-8" delay={0.3}>
                        <div className="w-12 h-12 rounded-2xl bg-secondary-500/20 flex items-center justify-center text-secondary-500 mb-2">
                            <span className="text-2xl font-bold">#4</span>
                        </div>
                        <h3 className="font-bold text-slate-100">Modern</h3>
                        <p className="text-sm text-slate-400">Using the latest tech stacks and best practices.</p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default About;
