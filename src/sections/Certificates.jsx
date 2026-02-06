import React from 'react';
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
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-10 text-center">Certificates & Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                    <div key={cert.id} className="glass-card p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-accent">
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent">
                                    <FaAward size={24} />
                                </div>
                                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{cert.year}</span>
                            </div>
                            <h3 className="text-lg font-bold text-text mb-1">{cert.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                        >
                            View Certificate <FaExternalLinkAlt size={12} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
