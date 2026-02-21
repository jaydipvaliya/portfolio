import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiC, SiCplusplus, SiNetlify, SiVite, SiPostman } from 'react-icons/si';

const allSkills = [
    { name: 'HTML', category: 'Frontend', level: 90, status: 'Confident', projects: '6+', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', category: 'Frontend', level: 85, status: 'Confident', projects: '6+', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'JavaScript', category: 'Frontend', level: 80, status: 'Confident', projects: '5+', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', category: 'Frontend', level: 75, status: 'Intermediate', projects: '3+', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Figma', category: 'Design', level: 70, status: 'Intermediate', projects: '4+', icon: <FaFigma className="text-pink-400" /> },
    { name: 'Node.js', category: 'Backend', level: 65, status: 'Intermediate', projects: '3+', icon: <FaNodeJs className="text-[#8cc84b]" /> },
    { name: 'Express.js', category: 'Backend', level: 60, status: 'Intermediate', projects: '2+', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MongoDB', category: 'Database', level: 60, status: 'Intermediate', projects: '3+', icon: <SiMongodb className="text-green-500" /> },
    { name: 'C', category: 'Languages', level: 70, status: 'Intermediate', projects: 'Col', icon: <SiC className="text-blue-500" /> },
    { name: 'C++', category: 'Languages', level: 75, status: 'Confident', projects: 'Col', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'Python', category: 'Languages', level: 80, status: 'Confident', projects: '4+', icon: <FaPython className="text-yellow-500" /> },
    { name: 'GitHub', category: 'Tools', level: 85, status: 'Confident', projects: 'Daily', icon: <FaGithub className="text-white" /> },
    { name: 'Netlify', category: 'Deployment', level: 80, status: 'Confident', projects: '4+', icon: <SiNetlify className="text-teal-400" /> },
    { name: 'Vite', category: 'Tools', level: 90, status: 'Confident', projects: 'All', icon: <SiVite className="text-purple-500" /> },
    { name: 'Postman', category: 'Tools', level: 75, status: 'Intermediate', projects: '3+', icon: <SiPostman className="text-orange-500" /> },
];

const categories = ['All Skills', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools', 'Deployment', 'Design'];

const SkillCard = ({ skill }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        className="glass-card p-6 flex flex-col justify-between group relative overflow-hidden"
    >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(139,92,246,0.05)] to-[rgba(59,130,246,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <div className="text-3xl bg-[rgba(255,255,255,0.05)] p-3 rounded-xl border border-[rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {skill.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                        <p className="text-xs text-gray-400">Used in {skill.projects} projects</p>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${skill.status === 'Confident' ? 'bg-[rgba(59,130,246,0.15)] text-[#3b82f6] border border-[#3b82f6]/30' :
                        skill.status === 'Intermediate' ? 'bg-[rgba(139,92,246,0.15)] text-[#8b5cf6] border border-[#8b5cf6]/30' : 'bg-[rgba(255,255,255,0.1)] text-gray-300 border border-gray-500/30'
                    }`}>
                    {skill.status}
                </span>
            </div>

            <div className="mt-4">
                <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Proficiency</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.05)] rounded-full h-1.5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]"
                    />
                </div>
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All Skills');

    const filteredSkills = activeTab === 'All Skills'
        ? allSkills
        : allSkills.filter(skill => skill.category === activeTab);

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
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === category
                                ? 'bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white border-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                                : 'bg-[rgba(255,255,255,0.03)] text-gray-400 border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:text-white'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <p className="text-gray-500 text-sm tracking-wide">
                    Constantly evolving and learning new technologies.
                </p>
            </motion.div>
        </div>
    );
};

export default Skills;
