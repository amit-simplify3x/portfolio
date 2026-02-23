import { ExternalLink, Github } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { resumeData } from '../constants/resumeData';

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work and personal projects.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeData.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col group h-full overflow-hidden p-0" delay={index * 0.1}>
                        <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center border-b border-white/10 group-hover:bg-primary-500/10 transition-colors duration-500">
                            {/* Decorative background for project card */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-500)_0%,transparent_70%)]" />
                            </div>
                            <h4 className="text-4xl font-black text-white/10 select-none group-hover:text-primary-500/20 group-hover:scale-110 transition-all duration-500">
                                {project.title.charAt(0)}
                            </h4>

                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-dark-bg/80 border border-white/10 text-slate-300 hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href={project?.links?.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-dark-bg/80 border border-white/10 text-slate-300 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-primary-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-4 flex-grow leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
