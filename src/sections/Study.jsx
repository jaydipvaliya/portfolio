import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        title: 'Secondary School',
        institute: 'Nutan Vidhyapith, Gujarat, India',
        year: '2022 - 2023',
        desc: 'Completed secondary education with a focus on science and mathematics.',
    },
    {
        id: 2,
        title: 'Higher Secondary School',
        institute: 'Nutan Vidhyapith, Gujarat, India',
        year: '2024 - 2025',
        desc: 'Specialized in science stream, building a strong analytical foundation.',
    },
    {
        id: 3,
        title: 'College',
        institute: 'Swaminarayan University, Gujarat, India',
        year: '2025 - 2029 (Current)',
        desc: 'Pursuing a Bachelor\'s degree. Active member of the tech community and coding clubs.',
    },
];

const Study = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-10 text-center lg:text-left">Study Journey</h2>

            <div className="relative border-l-4 border-primary/20 ml-4 md:ml-6 space-y-10">
                {educationData.map((item) => (
                    <div key={item.id} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[10px] top-1 bg-white border-4 border-primary w-5 h-5 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                        <div className="glass-card p-6 relative hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                    {item.year}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-text mb-2 flex items-center gap-2">
                                <FaGraduationCap className="text-gray-400" />
                                {item.institute}
                            </h4>
                            <p className="text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Study;
