import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        title: 'College',
        institute: 'Swaminarayan University, Gujarat, India',
        year: '2025 - 2029 (Current)',
        desc: 'Pursuing a Bachelor\'s degree. Active member of the tech community and coding clubs.',
    },
    {
        id: 2,
        title: 'Higher Secondary School',
        institute: 'Nutan Vidhyapith, Gujarat, India',
        year: '2024 - 2025',
        desc: 'Specialized in science stream, building a strong analytical foundation.',
    },
    {
        id: 3,
        title: 'Secondary School',
        institute: 'Nutan Vidhyapith, Gujarat, India',
        year: '2022 - 2023',
        desc: 'Completed secondary education with a focus on science and mathematics.',
    }
];

const Study = () => {
    return (
        <div className="max-w-4xl mx-auto py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Study <span className="gradient-text">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            <div className="relative border-l-2 border-[rgba(255,255,255,0.1)] ml-4 md:ml-6 space-y-12">
                {educationData.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        key={item.id}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-1.5 bg-[#0b0f19] border-2 border-[#8b5cf6] w-5 h-5 rounded-full group-hover:scale-125 group-hover:bg-[#8b5cf6] transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

                        <div className="glass-card p-6 relative hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-300 border-[rgba(255,255,255,0.05)] hover:border-[#8b5cf6]/30 group-hover:bg-[rgba(255,255,255,0.04)]">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors">{item.title}</h3>
                                <span className="text-xs font-bold tracking-wider text-[#3b82f6] bg-[rgba(59,130,246,0.1)] px-3 py-1.5 rounded uppercase border border-[#3b82f6]/20 w-fit">
                                    {item.year}
                                </span>
                            </div>
                            <h4 className="text-[15px] font-medium text-gray-300 mb-4 flex items-center gap-3">
                                <span className="p-2 bg-[rgba(255,255,255,0.05)] rounded-lg text-[#8b5cf6]">
                                    <FaGraduationCap size={16} />
                                </span>
                                {item.institute}
                            </h4>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Study;
