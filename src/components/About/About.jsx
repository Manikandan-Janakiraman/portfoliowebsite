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
                            MERN Stack Developer | Front End Developer | UI Developer &nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* Minimalist Centered Content */}
            <div className="about-content-wrapper centered-layout">
                <div className="about-reveal-text center-text">
                    <p className="reveal-line">
                        I am an aspiring web developer with hands-on experience in building responsive and interactive web applications.


                    </p>
                    <p className="reveal-line" style={{ transitionDelay: '0.2s' }}>
                        I specialize in React, JavaScript, HTML, and CSS, focusing on clean and efficient code. I enjoy transforming ideas into user-friendly digital solutions.
                    </p>
                    <p className="reveal-line" style={{ transitionDelay: '0.4s' }}>
                        I am continuously learning new technologies to improve my skills. My goal is to grow as a developer and contribute to impactful real-world projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
