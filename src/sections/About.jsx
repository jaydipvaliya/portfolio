import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-text mb-6">About Me</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    I am a passionate Student Web Developer with a strong foundation in modern web technologies.
                    My journey started with curiosity about how things work on the internet, which led me to dive deep into frontend and backend development.
                    I love building clean, user-friendly, and efficient solutions.
                    Currently, I am exploring the intersection of Web Development and Artificial Intelligence to create smarter applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 hover:shadow-primary/20 transition-all border-l-4 border-l-primary">
                    <h3 className="font-bold text-xl mb-2 text-text">Strengths</h3>
                    <p className="text-gray-600">
                        Rapid learning, Problem solving, Clean code architecture, and UI/UX sensitivity.
                    </p>
                </div>
                <div className="glass-card p-6 hover:shadow-primary/20 transition-all border-l-4 border-l-accent">
                    <h3 className="font-bold text-xl mb-2 text-text">Goals</h3>
                    <p className="text-gray-600">
                        To become a Full Stack Developer and contribute to impactful open-source projects while mastering Cloud Computing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
