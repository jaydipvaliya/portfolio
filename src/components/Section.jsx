import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, setActiveSection }) => {
    return (
        <motion.section
            id={id}
            onViewportEnter={() => setActiveSection && setActiveSection(id)}
            viewport={{ amount: 0.1, once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen py-16 px-6 lg:px-12 flex flex-col justify-center"
        >
            {children}
        </motion.section>
    );
};

export default Section;
