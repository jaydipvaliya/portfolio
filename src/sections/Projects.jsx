import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Bentley Clone',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'A responsive clone of the luxury car brand website, featuring elegant layouts and smooth transitions.',
        demoLink: 'https://bentley-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/Bentali%20clone.cg'
    },
    {
        id: 2,
        title: 'DJI Clone',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'A visual clone of the DJI drone website, showcasing product grids and modern navigation styles.',
        demoLink: 'https://dji-clone-project.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/dji%20clone.cg'
    },
    {
        id: 3,
        title: 'Drop Clone',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        desc: 'Clone of Drop.com, focusing on e-commerce product listings and clean UI design.',
        demoLink: 'https://drop-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/drop%20clone.cg'
    },
    {
        id: 4,
        title: 'Udaan Clone',
        tech: ['HTML', 'CSS', 'B2B Design'],
        desc: 'Replica of India’s largest B2B platform, featuring specific business-oriented layouts.',
        demoLink: 'https://udaan-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/udaan%20clone.cg'
    },
    {
        id: 5,
        title: 'Whack-a-Mole',
        tech: ['JavaScript', 'Game Logic', 'DOM Manipulation'],
        desc: 'A classic arcade game built for the web. Test your reflexes and score high!',
        demoLink: 'https://gamethron-wake-a-mole.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/Whack-a-Mole'
    },
    {
        id: 6,
        title: 'Click Counter',
        tech: ['React', 'State Management'],
        desc: 'Simple yet effective click counting application to track interactions or numbers.',
        demoLink: 'https://gamethron-click-count.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/clickcount'
    },
    {
        id: 7,
        title: 'Color Guessing Game',
        tech: ['JavaScript', 'RGB Logic', 'Interactive'],
        desc: 'Fun game to test your color coordination skills by guessing the correct RGB value.',
        demoLink: 'https://gamethron-color-gassing.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/color%20guessing'
    },
    {
        id: 8,
        title: 'Memory Flip Card',
        tech: ['JavaScript', 'CSS3', 'Game Logic'],
        desc: 'Brain training memory game. Flip cards to find matching pairs before time runs out.',
        demoLink: 'https://gamethron-memory-flip.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/memory%20flip%20card%20game'
    },
    {
        id: 9,
        title: 'Ekagra App',
        tech: ['Web App', 'Productivity'],
        desc: 'A focus and productivity application designed to help users stay concentrated.',
        demoLink: 'https://ekagra-app-zjbl.vercel.app/',
        codeLink: 'https://github.com/jaydipvaliya/Ekagra-app'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
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
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={project.id}
                        className="glass-card flex flex-col overflow-hidden group hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] hover:-translate-y-2 transition-all duration-300 border-[rgba(255,255,255,0.05)] hover:border-[#8b5cf6]/30"
                    >
                        {/* Project Header Image Placeholder */}
                        <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${index % 3 === 0 ? 'from-[#8b5cf6]/20 to-[#3b82f6]/20' :
                                index % 3 === 1 ? 'from-[#10b981]/20 to-[#3b82f6]/20' :
                                    'from-[#f59e0b]/20 to-[#ef4444]/20'
                            }`}>

                            <div className="absolute inset-0 bg-[#0b0f19]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-6xl transform -rotate-12 select-none group-hover:scale-110 transition-transform duration-500">
                                {project.title.substring(0, 2).toUpperCase()}
                            </div>

                            <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0b0f19]/80 backdrop-blur-sm rounded-full text-white hover:text-[#8b5cf6] transition-colors border border-white/10">
                                    <FaExternalLinkAlt size={14} />
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0b0f19]/80 backdrop-blur-sm rounded-full text-white hover:text-[#3b82f6] transition-colors border border-white/10">
                                    <FaGithub size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8b5cf6] transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-5 text-sm line-clamp-3 leading-relaxed flex-1">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[rgba(255,255,255,0.05)] text-gray-300 rounded border border-[rgba(255,255,255,0.1)]">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
