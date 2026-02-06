import React, { useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaFolderOpen, FaCertificate, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'study', label: 'Study', icon: <FaGraduationCap /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'projects', label: 'Projects', icon: <FaFolderOpen /> },
    { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-3 bg-white text-primary rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Desktop Floating Sidebar */}
            <div className="hidden lg:flex fixed top-4 left-4 h-[calc(100vh-2rem)] w-72 bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl z-40 flex-col py-6 px-6 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10 transform -translate-x-10 translate-y-10"></div>

                {/* Profile / Logo */}
                <div className="flex flex-col items-center mb-6 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px] shadow-lg mb-3">
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                            {/* Create a stylized initial if no image */}
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">JV</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-gray-800">Jaydip Valiya</h2>
                        <p className="text-[10px] font-medium text-primary uppercase tracking-wider mt-0.5">Web Developer</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1.5 w-full overflow-y-auto scrollbar-hide min-h-0">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group shrink-0 ${activeSection === item.id
                                ? 'text-white shadow-lg shadow-primary/25'
                                : 'text-gray-500 hover:bg-primary/5 hover:text-primary'
                                }`}
                        >
                            {/* Active Background Pill */}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#2dd4bf] rounded-xl z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {/* Icon & Label */}
                            <span className={`relative z-10 text-lg transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {item.icon}
                            </span>
                            <span className={`relative z-10 text-sm font-medium tracking-wide ${activeSection === item.id ? 'font-semibold' : ''}`}>
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Footer Info */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center shrink-0">
                    <div className="flex justify-center gap-3 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs font-medium">Available for work</span>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar (Drawer - kept consistent but updated style) */}
            <AnimatePresence>
                <div className={`lg:hidden fixed top-0 left-0 h-full bg-white/95 backdrop-blur-xl border-r border-border w-72 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full p-6">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
                                JV
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-800">Jaydip Valiya</h1>
                                <p className="text-xs text-gray-500">Menu</p>
                            </div>
                        </div>

                        <nav className="flex-1 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all ${activeSection === item.id
                                        ? 'bg-primary/10 text-primary font-bold'
                                        : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </AnimatePresence>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
