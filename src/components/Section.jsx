import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, setActiveSection }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col justify-center relative min-h-screen"
        >
            {children}
        </motion.section>
    );
};

export default Section;
