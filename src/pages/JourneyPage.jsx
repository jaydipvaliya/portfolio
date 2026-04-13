import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Journey from '../components/Journey';

export default function JourneyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="My Journey"
        description="Explore the educational journey of Jaydip Valiya — from secondary school at Nutan Vidhyapith to B.Tech in Computer Science at Swaminarayan University. A timeline of academic milestones and growth."
        path="/journey"
        keywords="education, B.Tech CSE, Swaminarayan University, Nutan Vidhyapith, academic journey, computer science student"
      />
      <Journey />
    </motion.main>
  );
}
