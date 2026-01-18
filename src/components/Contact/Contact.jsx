import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-wrapper">
                    {/* Left Side - Form */}
                    <div className="contact-form-card">
                        <div className="form-header">
                            <h2 className="contact-title">Let’s work together!</h2>
                            <p className="contact-desc">
                                I design and code beautifully simple things and I love what I do.
                                Just simple like that!
                            </p>
                        </div>

                        <form className="contact-form">
                            <div className="form-row">
                                <input type="text" placeholder="First name" className="form-input" />
                                <input type="text" placeholder="Last name" className="form-input" />
                            </div>
                            <div className="form-row">
                                <input type="email" placeholder="Email address" className="form-input" />
                                <input type="tel" placeholder="Phone number" className="form-input" />
                            </div>
                            <div className="form-row">
                                <select className="form-select">
                                    <option value="" disabled selected>—Please choose an option—</option>
                                    <option value="freelance">Freelance Project</option>
                                    <option value="job">Job Opportunity</option>
                                    <option value="collaboration">Collaboration</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <textarea placeholder="Message" className="form-textarea" rows="4"></textarea>
                            </div>

                            <button type="button" className="btn-send">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Info */}
                    <div className="contact-info-panel">
                        <div className="info-group">
                            <div className="icon-circle">
                                <Phone size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Phone</span>
                                <span className="value">+91 98844 85312</span>
                            </div>
                        </div>

                        <div className="info-group">
                            <div className="icon-circle">
                                <Mail size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Email</span>
                                <span className="value">manij472@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-group">
                            <div className="icon-circle">
                                <MapPin size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Address</span>
                                <span className="value">Chennai, Tamil Nadu, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
