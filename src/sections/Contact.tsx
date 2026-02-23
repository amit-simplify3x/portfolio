import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { resumeData } from '../constants/resumeData';

const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hi? Feel free to reach out!">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1 space-y-6">
                    <Card className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-slate-100 mb-2">Contact Information</h3>

                        <div className="flex items-center gap-4 text-slate-400 group">
                            <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</span>
                                <a href={`mailto:${resumeData.email}`} className="text-sm font-medium hover:text-primary-500 transition-colors">{resumeData.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400 group">
                            <div className="p-3 rounded-xl bg-secondary-500/10 text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Phone</span>
                                <a href={`tel:${resumeData.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium hover:text-secondary-500 transition-colors">{resumeData.phone}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400 group">
                            <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Location</span>
                                <span className="text-sm font-medium">{resumeData.location}</span>
                            </div>
                        </div>
                    </Card>

                    <div className="glass-effect p-6 rounded-2xl flex items-center justify-between border border-white/5">
                        <span className="text-slate-200 font-medium">Connect on Socials</span>
                        <div className="flex gap-3">
                            <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <img src="https://simpleicons.org/static/images/icons/github.svg" className="w-5 h-5 invert" alt="GitHub" />
                            </a>
                            <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <img src="https://simpleicons.org/static/images/icons/linkedin.svg" className="w-5 h-5 invert" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                <Card className="lg:col-span-2">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Project Inquiry"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
                            ></textarea>
                        </div>
                        <Button className="w-full py-4 flex items-center justify-center gap-2 group">
                            Send Message
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <Send size={18} className="group-hover:rotate-12 transition-transform" />
                            </motion.div>
                        </Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
};

export default Contact;
