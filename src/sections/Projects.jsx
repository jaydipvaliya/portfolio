import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Bentley Clone',
        image: 'https://via.placeholder.com/400x250?text=Bentley+Clone',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'A responsive clone of the luxury car brand website, featuring elegant layouts and smooth transitions.',
        demoLink: 'https://bentley-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/Bentali%20clone.cg'
    },
    {
        id: 2,
        title: 'DJI Clone',
        image: 'https://via.placeholder.com/400x250?text=DJI+Clone',
        tech: ['HTML', 'CSS', 'JavaScript'],
        desc: 'A visual clone of the DJI drone website, showcasing product grids and modern navigation styles.',
        demoLink: 'https://dji-clone-project.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/dji%20clone.cg'
    },
    {
        id: 3,
        title: 'Drop Clone',
        image: 'https://via.placeholder.com/400x250?text=Drop+Clone',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        desc: 'Clone of Drop.com, focusing on e-commerce product listings and clean UI design.',
        demoLink: 'https://drop-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/drop%20clone.cg'
    },
    {
        id: 4,
        title: 'Udaan Clone',
        image: 'https://via.placeholder.com/400x250?text=Udaan+Clone',
        tech: ['HTML', 'CSS', 'B2B Design'],
        desc: 'Replica of India’s largest B2B platform, featuring specific business-oriented layouts.',
        demoLink: 'https://udaan-clone.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/udaan%20clone.cg'
    },
    {
        id: 5,
        title: 'Whack-a-Mole',
        image: 'https://via.placeholder.com/400x250?text=Whack-a-Mole',
        tech: ['JavaScript', 'Game Logic', 'DOM Manipulation'],
        desc: 'A classic arcade game built for the web. Test your reflexes and score high!',
        demoLink: 'https://gamethron-wake-a-mole.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/Whack-a-Mole'
    },
    {
        id: 6,
        title: 'Click Counter',
        image: 'https://via.placeholder.com/400x250?text=Click+Counter',
        tech: ['React', 'State Management'],
        desc: 'Simple yet effective click counting application to track interactions or numbers.',
        demoLink: 'https://gamethron-click-count.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/clickcount'
    },
    {
        id: 7,
        title: 'Color Guessing Game',
        image: 'https://via.placeholder.com/400x250?text=Color+Guessing',
        tech: ['JavaScript', 'RGB Logic', 'Interactive'],
        desc: 'Fun game to test your color coordination skills by guessing the correct RGB value.',
        demoLink: 'https://gamethron-color-gassing.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/color%20guessing'
    },
    {
        id: 8,
        title: 'Memory Flip Card',
        image: 'https://via.placeholder.com/400x250?text=Memory+Card',
        tech: ['JavaScript', 'CSS3', 'Game Logic'],
        desc: 'Brain training memory game. Flip cards to find matching pairs before time runs out.',
        demoLink: 'https://gamethron-memory-flip.netlify.app/',
        codeLink: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/memory%20flip%20card%20game'
    },
    {
        id: 9,
        title: 'Ekagra App',
        image: 'https://via.placeholder.com/400x250?text=Ekagra+App',
        tech: ['Web App', 'Productivity'],
        desc: 'A focus and productivity application designed to help users stay concentrated.',
        demoLink: 'https://ekagra-app-zjbl.vercel.app/',
        codeLink: 'https://github.com/jaydipvaliya/Ekagra-app'
    }
];

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-10 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${project.id % 4 === 0 ? 'from-purple-500 to-indigo-600' :
                                project.id % 4 === 1 ? 'from-emerald-500 to-teal-600' :
                                    project.id % 4 === 2 ? 'from-blue-500 to-cyan-600' :
                                        'from-orange-500 to-red-600'
                            }`}>
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl transform -rotate-12 select-none">
                                {project.title.substring(0, 2).toUpperCase()}
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.demoLink} className="p-2 bg-white rounded-full text-text hover:text-primary transition-colors" title="Live Demo">
                                    <FaExternalLinkAlt />
                                </a>
                                <a href={project.codeLink} className="p-2 bg-white rounded-full text-text hover:text-primary transition-colors" title="View Code">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, index) => (
                                    <span key={index} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 line-clamp-2">
                                {project.desc}
                            </p>

                            <div className="flex gap-4">
                                <a href={project.demoLink} className="flex-1 text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm font-medium">
                                    Live Demo
                                </a>
                                <a href={project.codeLink} className="flex-1 text-center py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium">
                                    GitHub Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
