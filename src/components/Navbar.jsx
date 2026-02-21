import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Achievements' },
    { id: 'study', label: 'Study' },
    { id: 'contact', label: 'Contact' }
];

const Navbar = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Adjust offset for fixed navbar
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0f19]/80 backdrop-blur-xl border-b shadow-2xl border-[rgba(255,255,255,0.05)] py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <div
                    className="text-3xl font-extrabold tracking-tighter cursor-pointer gradient-text"
                    onClick={() => scrollToSection('home')}
                >
                    JV.
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-2 bg-[rgba(255,255,255,0.03)] p-1.5 rounded-full border border-[rgba(255,255,255,0.05)]">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all relative ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/40 to-[#3b82f6]/40 border border-[#8b5cf6]/50 rounded-full"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 tracking-wide">{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none p-2 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)]"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-[#0b0f19]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] shadow-2xl lg:hidden py-6 px-6 flex flex-col space-y-4"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left text-lg font-medium px-4 py-3 rounded-xl transition-colors ${activeSection === item.id ? 'bg-[rgba(139,92,246,0.15)] border border-[#8b5cf6]/30 text-white' : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
