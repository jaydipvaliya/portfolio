import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="Skills & Technologies"
        description="Technical skills of Jaydip Valiya — proficient in React.js, Node.js, MongoDB, Express.js, TypeScript, JavaScript, Python, C++, Tailwind CSS, Git, and more. Full-stack MERN expertise."
        path="/skills"
        keywords="React.js, Node.js, MongoDB, Express.js, JavaScript, TypeScript, Python, C++, Tailwind CSS, Git, technical skills, frontend, backend"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Technical Skills",
          "description": "Programming languages, frameworks, and tools used by Jaydip Valiya",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "React.js" },
            { "@type": "ListItem", "position": 2, "name": "Node.js" },
            { "@type": "ListItem", "position": 3, "name": "MongoDB" },
            { "@type": "ListItem", "position": 4, "name": "Express.js" },
            { "@type": "ListItem", "position": 5, "name": "TypeScript" },
            { "@type": "ListItem", "position": 6, "name": "JavaScript" },
            { "@type": "ListItem", "position": 7, "name": "Python" },
            { "@type": "ListItem", "position": 8, "name": "Tailwind CSS" },
            { "@type": "ListItem", "position": 9, "name": "Git" },
            { "@type": "ListItem", "position": 10, "name": "C++" }
          ]
        }}
      />
      <Skills />
    </motion.main>
  );
}
