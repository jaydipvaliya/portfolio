import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#8b5cf6] blur-[120px] opacity-30 animate-pulse"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#3b82f6] blur-[120px] opacity-20" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 lg:pt-40 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Profile Image (Left) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-shrink-0"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#3b82f6] p-1 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                            <img
                                src="/profile.jpg"
                                alt="Jaydip Valiya"
                                className="w-full h-full object-cover rounded-full border-4 border-[#0b0f19]"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Jaydip+Valiya&background=0b0f19&color=fff&size=512';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Content (Right) */}
                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#8b5cf6] font-medium tracking-wide uppercase mb-3 text-sm md:text-base"
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-white"
                    >
                        Hi, I'm <span className="gradient-text font-extrabold">Jaydip Valiya</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-6"
                    >
                        Full Stack Developer <span className="text-[#3b82f6]">|</span> MERN Stack
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 text-base md:text-lg leading-relaxed"
                    >
                        Passionate developer focused on building scalable backend systems and modern web applications.
                        I transform ideas into beautiful, intuitive, and highly functional digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start"
                    >
                        {/* Buttons */}
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0b0f19] rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.02]"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span>View Projects</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#"
                            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.05)] rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.02]"
                        >
                            <FaDownload className="group-hover:-translate-y-1 transition-transform" />
                            <span>Download Resume</span>
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-4">
                            <a
                                href="https://github.com/jaydipvaliya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 glass-card text-gray-400 hover:text-white hover:border-[#8b5cf6] transition-all duration-300 rounded-full hover:-translate-y-1"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jaydip-valiya-a1009737b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 glass-card text-gray-400 hover:text-white hover:border-[#3b82f6] transition-all duration-300 rounded-full hover:-translate-y-1"
                            >
                                <FaLinkedin size={22} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hidden md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest font-medium">Scroll down</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </motion.div>
        </div>
    );
};

export default Home;
