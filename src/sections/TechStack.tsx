import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { resumeData } from '../constants/resumeData';

const TechStack: React.FC = () => {
    return (
        <Section id="skills" title="Tech Stack" subtitle="The tools and technologies I use to bring ideas to life.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resumeData.skills.map((skillGroup, groupIndex) => (
                    <Card key={skillGroup.category} className="h-full" delay={groupIndex * 0.1}>
                        <h3 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary-500" />
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
