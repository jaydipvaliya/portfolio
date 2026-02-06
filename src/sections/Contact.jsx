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
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-10 text-center">Get In Touch</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Let's Connect</h3>
                        <p className="text-gray-600 text-lg">
                            I'm essentially interested in freelance opportunities and internships.
                            However, if you have other requests or just want to discuss about tech and AI, don't hesitate to contact me.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="glass-card p-4 flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Me</p>
                                <a href="mailto:jaydip.valiya.cg@gmail.com" className="font-medium text-text hover:text-primary">jaydip.valiya.cg@gmail.com</a>
                            </div>
                        </div>

                        <div className="glass-card p-4 flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium text-text">Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-card p-8">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center py-10"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaPaperPlane size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-2">Message Sent!</h3>
                            <p className="text-gray-500">Thank you for reaching out. I'll get back to you soon.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30"
                            >
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
