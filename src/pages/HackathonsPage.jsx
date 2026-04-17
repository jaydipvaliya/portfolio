import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hackathons from '../components/Hackathons';

export default function HackathonsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="Hackathons"
        description="Hackathon experiences by Jaydip Valiya — from cybersecurity dashboards to business solutions. Explore mission logs, tech stacks, and outcomes from competitive coding events."
        path="/hackathons"
        keywords="hackathons, coding competitions, hackathon projects, competitive programming, Cybrathon, K Hacks, Code Clash"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Hackathons by Jaydip Valiya",
          "description": "A collection of hackathon experiences and projects built under pressure.",
          "url": "https://jaydip-valiya.vercel.app/hackathons",
          "author": {
            "@type": "Person",
            "name": "Jaydip Valiya"
          }
        }}
      />
      <Hackathons />
    </motion.main>
  );
}
