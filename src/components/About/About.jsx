import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            {/* Infinite Marquee */}
            <div className="marquee-container">
                <div className="marquee-track">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="marquee-content">
                            // Leadership // Enterprise // Business Growth // Corporate // Results // Innovation // Success &nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* Minimalist Centered Content */}
            <div className="about-content-wrapper centered-layout">
                <div className="about-reveal-text center-text">
                    <p className="reveal-line">I’m a passionate web developer specializing in building modern, responsive web applications using React and JavaScript.</p>
                    <p className="reveal-line" style={{ transitionDelay: '0.2s' }}>I enjoy turning complex problems into simple, user-friendly solutions.</p>
                    <p className="reveal-line" style={{ transitionDelay: '0.4s' }}>With a strong focus on clean code and performance, I continuously learn new technologies to improve my development skills.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
