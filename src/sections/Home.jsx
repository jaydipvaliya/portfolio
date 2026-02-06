import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaDownload } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-bold text-xl mb-2"
                >
                    Hello, I'm
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl lg:text-6xl font-bold text-text mb-4"
                >
                    Jaydip Valiya
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-accent font-semibold mb-6"
                >
                    Student Web Developer
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-600 mb-8 text-lg max-w-lg mx-auto lg:mx-0"
                >
                    Building modern, responsive, and user-friendly web applications. Passionate about AI and creative development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                >
                    <a href="#" className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-full font-bold tracking-wide shadow-[0_10px_20px_-10px_rgba(13,148,136,0.5)] hover:shadow-[0_20px_25px_-5px_rgba(13,148,136,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 border border-white/20 backdrop-blur-sm group">
                        <FaDownload className="group-hover:animate-bounce" />
                        <span>Download Resume</span>
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/jaydipvaliya" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full text-text hover:text-primary hover:shadow-md border border-border transition-all">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/jaydip-valiya-a1009737b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full text-text hover:text-primary hover:shadow-md border border-border transition-all">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full text-text hover:text-primary hover:shadow-md border border-border transition-all">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://x.com/JaydipValiya024" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full text-text hover:text-primary hover:shadow-md border border-border transition-all">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-accent shadow-2xl overflow-hidden relative z-10 bg-white">
                    <img src="/profile.jpg" alt="Jaydip Valiya" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-700"></div>
            </motion.div>
        </div>
    );
};

export default Home;
