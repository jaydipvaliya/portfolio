import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FlowingLines from './components/FlowingLines';

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div style={{ position: 'relative', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>

      {/* Background animation — sits behind everything */}
      {!loading && <FlowingLines />}

      {/* Scroll progress bar */}
      {!loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 origin-left"
          style={{ scaleX, height: '1px', background: 'rgba(255,255,255,0.18)', zIndex: 100 }}
        />
      )}

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}