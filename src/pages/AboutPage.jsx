import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import About from '../components/About';

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="About Me"
        description="Learn about Jaydip Valiya — a passionate Full-Stack MERN Developer from Gujarat, India. 2+ years of coding experience, 10+ projects, and 4+ hackathons. Currently pursuing B.Tech CSE at Swaminarayan University."
        path="/about"
        keywords="about Jaydip Valiya, MERN developer bio, Gujarat developer, B.Tech CSE student"
      />
      <About />
    </motion.main>
  );
}
