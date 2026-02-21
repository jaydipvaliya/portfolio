import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Home from './sections/Home';
import About from './sections/About';
import Study from './sections/Study';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Update active section based on scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] font-sans selection:bg-[#8b5cf6] selection:text-white relative">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            <main className="w-full overflow-x-hidden">
                <Section id="home" setActiveSection={setActiveSection}>
                    <Home />
                </Section>

                <Section id="about" setActiveSection={setActiveSection}>
                    <About />
                </Section>

                <Section id="skills" setActiveSection={setActiveSection}>
                    <Skills />
                </Section>

                <Section id="projects" setActiveSection={setActiveSection}>
                    <Projects />
                </Section>

                <Section id="certificates" setActiveSection={setActiveSection}>
                    <Certificates />
                </Section>

                <Section id="study" setActiveSection={setActiveSection}>
                    <Study />
                </Section>

                <Section id="contact" setActiveSection={setActiveSection}>
                    <Contact />
                </Section>

                <footer className="py-12 text-center text-white border-t border-[rgba(255,255,255,0.05)] mt-10 bg-[#0b0f19] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <p className="text-xl md:text-2xl font-medium italic mb-8 font-serif text-gray-400">
                            "Programming isn’t about what you know; it’s about what you can figure out."
                        </p>

                        <div className="flex justify-center gap-6 mb-8">
                            <a href="https://github.com/jaydipvaliya" target="_blank" rel="noopener noreferrer" className="p-3 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-400 hover:text-white hover:bg-[#8b5cf6] transition-all transform hover:scale-110">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/jaydip-valiya-a1009737b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-400 hover:text-white hover:bg-[#3b82f6] transition-all transform hover:scale-110">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://x.com/JaydipValiya024" target="_blank" rel="noopener noreferrer" className="p-3 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-400 hover:text-white hover:bg-[#8b5cf6] transition-all transform hover:scale-110">
                                <FaTwitter size={24} />
                            </a>
                        </div>

                        <p className="text-gray-500 text-sm tracking-wide">© {new Date().getFullYear()} Jaydip Valiya. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
