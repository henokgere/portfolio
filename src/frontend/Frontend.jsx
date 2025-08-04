import React from 'react';
import { SiReact, SiQwik, SiNextdotjs, SiTypescript } from 'react-icons/si';

const frameworks = [
    { name: 'React', icon: <SiReact color="#61dafb" size={48} /> },
    { name: 'Qwik', icon: <SiQwik color="#18b6fa" size={48} /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#000" size={48} /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={48} /> },
];

const Frontend = ({ name }) => {
    return (
        <div className="frontend-fullscreen">
            <div className="frontend-content">
                <h1>
                    <span role="img" aria-label="sparkles">✨</span> Frontend Development <span role="img" aria-label="sparkles">✨</span>
                </h1>
                <h2>Hi, I'm {name}!</h2>
                <p className="intro">
                    I craft beautiful, fast, and accessible web experiences using modern frontend technologies.
                </p>
                <div className="frameworks-icons">
                    {frameworks.map(fw => (
                        <div className="framework-icon" key={fw.name}>
                            {fw.icon}
                            <span>{fw.name}</span>
                        </div>
                    ))}
                </div>
                <div className="skills-section">
                    <div>
                        <h3>Design & UX</h3>
                        <p>
                            I focus on clean, intuitive interfaces and responsive layouts. My designs are user-centered and visually engaging.
                        </p>
                    </div>
                    <div>
                        <h3>Code Quality</h3>
                        <p>
                            Writing maintainable, scalable code is my priority. I use TypeScript for safety and React for dynamic UIs.
                        </p>
                    </div>
                    <div>
                        <h3>Performance</h3>
                        <p>
                            I optimize for speed and SEO, leveraging Next.js and Qwik for lightning-fast sites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;