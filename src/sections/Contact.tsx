import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { resumeData } from '../constants/resumeData';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "2f21045f-0efd-4d1c-95b7-a68b14ed1fa9", // Get your free key at web3forms.com
                    ...formData,
                    from_name: formData.name,
                    subject: `New Portfolio Message: ${formData.subject}`
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

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

                <Card className="lg:col-span-2 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-surface/90 backdrop-blur-sm p-8 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1.2 }}
                                    className="p-4 bg-green-500/10 text-green-500 rounded-full mb-4"
                                >
                                    <CheckCircle2 size={64} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400 max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <Button className="mt-8" onClick={() => setStatus('idle')}>Send Another</Button>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>

                    <form className={`space-y-6 transition-opacity duration-300 ${status === 'loading' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                            <input
                                required
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Inquiry"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                <AlertCircle size={18} />
                                <span>Something went wrong. Please try again or email me directly.</span>
                            </motion.div>
                        )}

                        <Button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 flex items-center justify-center gap-2 group relative overflow-hidden"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                        <Send size={18} className="group-hover:rotate-12 transition-transform" />
                                    </motion.div>
                                </>
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
};

export default Contact;
