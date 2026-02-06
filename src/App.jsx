import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
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

    return (
        <div className="flex min-h-screen bg-background text-text font-sans">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

            <main className="flex-1 lg:ml-80 w-full overflow-x-hidden p-6">
                <Section id="home" setActiveSection={setActiveSection}>
                    <Home />
                </Section>

                <Section id="about" setActiveSection={setActiveSection}>
                    <About />
                </Section>

                <Section id="study" setActiveSection={setActiveSection}>
                    <Study />
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

                <Section id="contact" setActiveSection={setActiveSection}>
                    <Contact />
                </Section>

                <footer className="py-12 text-center text-text border-t border-border mt-10 bg-background/50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <p className="text-xl md:text-2xl font-medium italic mb-8 font-serif text-gray-700">
                            "Programming isn’t about what you know; it’s about what you can figure out."
                        </p>

                        <div className="flex justify-center gap-6 mb-8">
                            <a href="https://github.com/jaydipvaliya" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/jaydip-valiya-a1009737b/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="https://x.com/JaydipValiya024" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                                <FaTwitter size={28} />
                            </a>
                        </div>

                        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Jaydip Valiya. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
