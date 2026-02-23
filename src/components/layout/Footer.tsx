import React from 'react';
import { resumeData } from '../../constants/resumeData';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-dark-bg/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-xl font-bold text-gradient">
                    {resumeData.name.split(' ')[0]}<span className="text-slate-200">.</span>
                </div>

                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </p>

                <div className="flex gap-6">
                    {Object.entries(resumeData.socials).map(([name, url]) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors capitalize text-sm font-medium"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
