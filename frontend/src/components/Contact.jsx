import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div className="fade-in-up">
                        <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Get in Touch</span>
                        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Let's Start a Conversation</h2>
                        <p className="text-lead" style={{ marginBottom: '3rem' }}>
                            Whether you need a cafeteria setup or a catering service, we are just a message away.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: '#F0FDF4', borderRadius: '1rem', color: 'var(--primary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Call Us</h4>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>+91 98765 43210</p>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>+91 98765 43211</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: '#FFF7ED', borderRadius: '1rem', color: 'var(--secondary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Email Us</h4>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>hello@roundtummy.com</p>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>support@roundtummy.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: '#F3F4F6', borderRadius: '1rem', color: 'var(--text-dark)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Visit Us</h4>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
                                        123, Food Park, Sector 62, <br /> Noida, Uttar Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="fade-in-up delay-200" style={{
                        backgroundColor: '#F9FAFB',
                        padding: '3rem',
                        borderRadius: '2rem',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>Full Name</label>
                                <input type="text" placeholder="John Doe" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #E5E7EB',
                                    backgroundColor: 'var(--white)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>Email Address</label>
                                <input type="email" placeholder="john@company.com" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #E5E7EB',
                                    backgroundColor: 'var(--white)',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>Message</label>
                                <textarea rows="4" placeholder="How can we help you?" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #E5E7EB',
                                    backgroundColor: 'var(--white)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{
                                marginTop: '1rem',
                                width: '100%',
                                justifyContent: 'center',
                                fontSize: '1.125rem',
                                padding: '1rem'
                            }}>
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
