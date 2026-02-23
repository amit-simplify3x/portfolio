import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { resumeData } from '../constants/resumeData';

const Education = () => {
    return (
        <Section id="education" title="Education & Achievements" subtitle="My academic background and key recognitions.">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {resumeData.education.map((edu, index) => (
                    <Card key={index} className="flex gap-6 items-start" delay={index * 0.1}>
                        <div className="p-3 rounded-2xl bg-primary-500/20 text-primary-500 shrink-0">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                            <p className="text-primary-500 font-medium mb-1">{edu.institution}</p>
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <span>{edu.duration}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span className="text-slate-300 font-semibold">{edu.details}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="flex gap-4 p-5 glass-effect rounded-2xl border border-secondary-500/10"
                    >
                        <div className="p-2 rounded-xl bg-secondary-500/20 text-secondary-500 shrink-0 h-fit">
                            <Award size={20} />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
