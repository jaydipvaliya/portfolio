import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="Projects"
        description="Explore selected projects by Jaydip Valiya — including full-stack MERN apps, responsive website clones, interactive JavaScript games, and more. Live demos and source code available."
        path="/projects"
        keywords="web projects, React projects, MERN stack apps, JavaScript games, website clones, Ekagra app, portfolio projects, open source"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Projects by Jaydip Valiya",
          "description": "A collection of web development projects showcasing full-stack, frontend, and game development skills.",
          "url": "https://jaydip-valiya.vercel.app/projects",
          "author": {
            "@type": "Person",
            "name": "Jaydip Valiya"
          }
        }}
      />
      <Projects />
    </motion.main>
  );
}
