import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Bio text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 space-y-6"
                >
                    <p className="text-gray-400 leading-relaxed text-lg">
                        I am a highly motivated <span className="text-[#f8fafc] font-medium">MERN Stack Developer</span> with a strong foundation in modern web technologies. My journey began with a deep curiosity about how systems interact, leading me to specialize in building robust and scalable applications from the ground up.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        I excel in creating dynamic user interfaces using React, but my true strength lies in designing efficient logic and data management solutions on the server. I am constantly learning and adapting to new technologies to deliver high-quality code and exceptional digital experiences.
                    </p>
                </motion.div>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 grid gap-5"
                >
                    <div className="glass-card p-6 flex items-start gap-4 border-l-4 border-l-[#8b5cf6] group hover:bg-[rgba(255,255,255,0.06)] transition-all">
                        <div className="w-12 h-12 rounded-lg bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[#8b5cf6] group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-white">MERN Stack Developer</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Building end-to-end applications with MongoDB, Express.js, React, and Node.js.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-6 flex items-start gap-4 border-l-4 border-l-[#3b82f6] group hover:bg-[rgba(255,255,255,0.06)] transition-all">
                        <div className="w-12 h-12 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-[#3b82f6] group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-white">Strong in Backend</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Designing scalable architectures, RESTful APIs, and efficient database schemas.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
