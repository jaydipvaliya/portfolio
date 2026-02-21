import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
    {
        id: 1,
        title: 'Certificate of Participation in Jaipur Cybrathon 2025',
        issuer: 'Unstop',
        year: '2025',
        link: 'https://unstop.com/certificate-preview/05422511-0d9c-4c0f-b4d5-848562687297'
    },
    {
        id: 2,
        title: "Certificate of Participation in Odoo x Adani University Hackathon '26",
        issuer: 'Unstop',
        year: '2026',
        link: 'https://unstop.com/certificate-preview/55383f5e-8f27-40bb-a72c-ec85870c248c'
    },
    {
        id: 3,
        title: 'Certificate of Participation in K Hacks 3.0',
        issuer: 'Unstop',
        year: '2025',
        link: 'https://unstop.com/certificate-preview/4643e5b8-f46b-424e-a344-def73d8044eb'
    },
    {
        id: 4,
        title: 'Certificate of Participation in Online Round of Code Clash',
        issuer: 'Unstop',
        year: '2025',
        link: 'https://unstop.com/certificate-preview/010b0ef5-40f2-4674-9be3-b12dbdfffab5'
    }
];

const Certificates = () => {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Certificates & <span className="gradient-text">Achievements</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full mb-10"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={cert.id}
                        className="glass-card p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border-[rgba(255,255,255,0.05)] hover:border-[#8b5cf6]/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] relative overflow-hidden"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-full blur-2xl group-hover:from-[#8b5cf6]/30 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3.5 bg-[rgba(139,92,246,0.1)] rounded-xl text-[#8b5cf6] group-hover:scale-110 transition-transform duration-300 border border-[#8b5cf6]/20">
                                    <FaAward size={24} />
                                </div>
                                <span className="text-[10px] font-bold tracking-wider text-gray-300 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded uppercase">
                                    {cert.year}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#3b82f6] transition-colors">{cert.title}</h3>
                            <p className="text-sm text-gray-400 mb-8 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"></span>
                                {cert.issuer}
                            </p>
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-bold tracking-wide text-white hover:text-[#8b5cf6] transition-colors w-fit group/btn"
                        >
                            View Credential
                            <FaExternalLinkAlt size={12} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8b5cf6] group-hover/btn:w-full transition-all duration-300"></div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
