import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Logic to send email would go here
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="max-w-6xl mx-auto py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-10"
                >
                    <div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Let's Connect</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm essentially interested in freelance opportunities and internships.
                            However, if you have other requests or just want to discuss about tech and AI, don't hesitate to contact me.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="glass-card p-6 flex items-center space-x-6 group hover:translate-x-2 transition-transform duration-300 border-[rgba(255,255,255,0.05)] hover:border-[#8b5cf6]/30">
                            <div className="p-4 bg-[rgba(139,92,246,0.1)] rounded-xl text-[#8b5cf6] group-hover:scale-110 group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300">
                                <FaEnvelope size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Email Me</p>
                                <a href="mailto:jaydip.valiya.cg@gmail.com" className="text-lg font-bold text-white hover:text-[#8b5cf6] transition-colors line-clamp-1">
                                    jaydip.valiya.cg@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-center space-x-6 group hover:translate-x-2 transition-transform duration-300 border-[rgba(255,255,255,0.05)] hover:border-[#3b82f6]/30">
                            <div className="p-4 bg-[rgba(59,130,246,0.1)] rounded-xl text-[#3b82f6] group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                                <FaMapMarkerAlt size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Location</p>
                                <p className="text-lg font-bold text-white">Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 md:p-10 border-[rgba(255,255,255,0.05)] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-10 relative z-10"
                        >
                            <div className="w-20 h-20 bg-[rgba(16,185,129,0.1)] text-[#10b981] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                <div className="animate-ping absolute w-20 h-20 bg-[rgba(16,185,129,0.2)] rounded-full opacity-75"></div>
                                <FaPaperPlane size={28} className="relative z-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3">Message Sent!</h3>
                            <p className="text-gray-400 text-lg">Thank you for reaching out. I'll get back to you soon.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-bold tracking-wide text-gray-300 uppercase">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-600 focus:border-[#8b5cf6] focus:bg-[rgba(255,255,255,0.06)] focus:ring-1 focus:ring-[#8b5cf6] outline-none transition-all duration-300 shadow-inner"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-bold tracking-wide text-gray-300 uppercase">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-600 focus:border-[#8b5cf6] focus:bg-[rgba(255,255,255,0.06)] focus:ring-1 focus:ring-[#8b5cf6] outline-none transition-all duration-300 shadow-inner"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-bold tracking-wide text-gray-300 uppercase">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-600 focus:border-[#8b5cf6] focus:bg-[rgba(255,255,255,0.06)] focus:ring-1 focus:ring-[#8b5cf6] outline-none transition-all duration-300 shadow-inner resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-bold text-lg rounded-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group relative"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                <span className="relative z-10">Send Message</span>
                                <FaPaperPlane className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
