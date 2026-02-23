import { Briefcase } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { resumeData } from '../constants/resumeData';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey and key contributions.">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-dark-bg text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Briefcase size={18} />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] order-2 md:order-1">
                            <Card className="p-0 overflow-hidden" delay={index * 0.1}>
                                <div className="p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                            <p className="text-primary-500 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-sm font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-center">
                                            {exp.duration}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> {exp.location}
                                    </p>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                                                <span className="text-primary-500 shrink-0 mt-1.5">•</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
