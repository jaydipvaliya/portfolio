import SEO from '../components/SEO';
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
      <SEO
        title={null}
        description="Jaydip Valiya — Full-Stack MERN Developer from Gujarat, India. Building powerful, user-focused web experiences with React, Node.js, MongoDB & Express. Explore my projects, skills, and journey."
        path="/"
        keywords="portfolio, web developer, hire developer, MERN stack projects, React developer India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Jaydip Valiya",
            "jobTitle": "Full-Stack Developer",
            "url": "https://jaydip-valiya.vercel.app",
            "sameAs": [
              "https://github.com/jaydipvaliya",
              "https://www.linkedin.com/in/jaydip-valiya-a1009737b/",
              "https://x.com/JaydipValiya024",
              "https://leetcode.com/u/jaydip_valiya/"
            ]
          }
        }}
      />
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
