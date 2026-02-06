import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiC, SiCplusplus, SiNetlify, SiVite, SiPostman } from 'react-icons/si';

const allSkills = [
    { name: 'HTML', category: 'Frontend', level: 90, status: 'Confident', projects: '6+', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', category: 'Frontend', level: 85, status: 'Confident', projects: '6+', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', category: 'Frontend', level: 80, status: 'Confident', projects: '5+', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', category: 'Frontend', level: 75, status: 'Intermediate', projects: '3+', icon: <FaReact className="text-blue-400" /> },
    { name: 'Figma', category: 'Design', level: 70, status: 'Intermediate', projects: '4+', icon: <FaFigma className="text-pink-500" /> },
    { name: 'Node.js', category: 'Backend', level: 65, status: 'Intermediate', projects: '3+', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', category: 'Backend', level: 60, status: 'Intermediate', projects: '2+', icon: <SiExpress className="text-gray-500" /> },
    { name: 'MongoDB', category: 'Database', level: 60, status: 'Intermediate', projects: '3+', icon: <SiMongodb className="text-green-600" /> },
    { name: 'C', category: 'Languages', level: 70, status: 'Intermediate', projects: 'Col', icon: <SiC className="text-blue-600" /> },
    { name: 'C++', category: 'Languages', level: 75, status: 'Confident', projects: 'Col', icon: <SiCplusplus className="text-blue-700" /> },
    { name: 'Python', category: 'Languages', level: 80, status: 'Confident', projects: '4+', icon: <FaPython className="text-yellow-500" /> },
    { name: 'GitHub', category: 'Tools', level: 85, status: 'Confident', projects: 'Daily', icon: <FaGithub className="text-gray-700" /> },
    { name: 'Netlify', category: 'Deployment', level: 80, status: 'Confident', projects: '4+', icon: <SiNetlify className="text-teal-500" /> },
    { name: 'Vite', category: 'Tools', level: 90, status: 'Confident', projects: 'All', icon: <SiVite className="text-purple-500" /> },
    { name: 'Postman', category: 'Tools', level: 75, status: 'Intermediate', projects: '3+', icon: <SiPostman className="text-orange-600" /> },
];

const categories = ['All Skills', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools', 'Deployment', 'Design'];

const SkillCard = ({ skill }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <span className="text-3xl bg-gray-50 p-2 rounded-lg">{skill.icon}</span>
                <div>
                    <h3 className="font-bold text-lg text-gray-800">{skill.name}</h3>
                    <p className="text-xs text-gray-500">Used in {skill.projects} projects</p>
                </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${skill.status === 'Confident' ? 'bg-blue-100 text-blue-600' :
                    skill.status === 'Intermediate' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                }`}>
                {skill.status}
            </span>
        </div>

        <div className="mt-2">
            <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-400">How far I've come</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                    style={{ width: `${skill.level}%` }}
                />
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
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">Technical Skills</h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === category
                                ? 'bg-white text-primary shadow-md transform -translate-y-0.5'
                                : 'bg-transparent text-gray-500 hover:bg-gray-100'
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
                <AnimatePresence>
                    {filteredSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                    Always learning and exploring new technologies.
                </p>
            </div>
        </div>
    );
};

export default Skills;
