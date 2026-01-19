import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Logo */}
                {/* <div className="footer-logo-container">
                    <div className="footer-logo-circle">
                        <span>G</span>
                    </div>
                </div> */}

                {/* Navigation */}
                <nav className="footer-nav">
                    <a href="#about" className="footer-link">About</a>
                    <a href="#portfolio" className="footer-link">Services</a> {/* Mapping Portfolio to Services usually, or just use names */}
                    <a href="#portfolio" className="footer-link">Portfolios</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </nav>

                {/* Copyright */}
                <div className="footer-copyright">
                    © 2024 All rights reserved by <span className="brand-name">J.Manikandan</span>
                </div>
            </div>

            {/* Scroll Top Button */}
            <button className="scroll-top-btn" onClick={scrollToTop}>
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
