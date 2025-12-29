import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1F2937', color: 'var(--white)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand Info */}
                    <div>
                        <img
                            src={logo}
                            alt="Round Tummy Logo"
                            style={{ height: '100px', width: 'auto', marginBottom: '1rem', filter: 'brightness(0) invert(1)', transform: 'translateY(-10px)' }}
                        />
                        <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                            Your trusted food & hospitality partner for corporates & institutions. Fresh, hygienic, and customizable food solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--white)', transition: 'color 0.2s' }}><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'var(--white)', transition: 'color 0.2s' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'var(--white)', transition: 'color 0.2s' }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.25rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#home" style={{ color: '#9CA3AF' }}>Home</a></li>

                            <li>
                                <Link to="/about" style={{ color: '#9CA3AF' }}>
                                    About Us
                                </Link>
                            </li>

                            <li><a href="#brands" style={{ color: '#9CA3AF' }}>Our Brands</a></li>

                            <li>
                                <Link to="/journey" style={{ color: '#9CA3AF' }}>
                                    Our Journey
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" style={{ color: '#9CA3AF' }}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.25rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#9CA3AF' }}>
                                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                <span>Gurgaon, Haryana, India</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9CA3AF' }}>
                                <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9CA3AF' }}>
                                <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                <span>hello@roundtummy.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem' }}>
                    <p>&copy; {new Date().getFullYear()} Round Tummy Hospitality. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
