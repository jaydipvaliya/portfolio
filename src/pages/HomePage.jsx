import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
