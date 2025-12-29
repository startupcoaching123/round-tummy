'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';

const ContactSection = () => {
    const BACKENDURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formState.name.trim()) newErrors.name = 'Name is required.';
        if (!formState.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formState.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formState.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(formState.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits.';
        }
        if (!formState.message.trim()) newErrors.message = 'Message is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // For phone field, only allow numbers and limit to 10 characters
        if (name === 'phone') {
            const numbersOnly = value.replace(/\D/g, '');
            if (numbersOnly.length <= 10) {
                setFormState(prev => ({ ...prev, [name]: numbersOnly }));
            }
        } else {
            setFormState(prev => ({ ...prev, [name]: value }));
        }
        
        // Clear error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage({ type: '', text: '' });

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${BACKENDURL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage({ 
                    type: 'success', 
                    text: data.message || 'Message sent successfully!' 
                });
                // Clear form
                setFormState({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitMessage({ 
                    type: 'error', 
                    text: data.error || 'Something went wrong.' 
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitMessage({ 
                type: 'error', 
                text: `Network error: ${error.message}` 
            });
        } finally {
            setIsLoading(false);
        }
    };

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
                        {/* Success/Error Message */}
                        {submitMessage.text && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                backgroundColor: submitMessage.type === 'success' ? '#F0FDF4' : '#FEF2F2',
                                color: submitMessage.type === 'success' ? '#065F46' : '#991B1B'
                            }}>
                                {submitMessage.type === 'success' ? 
                                    <CheckCircle size={20} /> : 
                                    <XCircle size={20} />
                                }
                                <span style={{ fontWeight: '500' }}>{submitMessage.text}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="John Doe" 
                                    value={formState.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: `1px solid ${errors.name ? '#FCA5A5' : '#E5E7EB'}`,
                                        backgroundColor: 'var(--white)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }} 
                                />
                                {errors.name && (
                                    <p style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="john@company.com" 
                                    value={formState.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: `1px solid ${errors.email ? '#FCA5A5' : '#E5E7EB'}`,
                                        backgroundColor: 'var(--white)',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }} 
                                />
                                {errors.email && (
                                    <p style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                                    Phone Number <span style={{ color: '#EF4444' }}>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="phone"
                                    placeholder="9876543210" 
                                    value={formState.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: `1px solid ${errors.phone ? '#FCA5A5' : '#E5E7EB'}`,
                                        backgroundColor: 'var(--white)',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }} 
                                />
                                {errors.phone && (
                                    <p style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                                    Message <span style={{ color: '#EF4444' }}>*</span>
                                </label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    placeholder="How can we help you?" 
                                    value={formState.message}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: `1px solid ${errors.message ? '#FCA5A5' : '#E5E7EB'}`,
                                        backgroundColor: 'var(--white)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                ></textarea>
                                {errors.message && (
                                    <p style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="btn btn-primary" 
                                style={{
                                    marginTop: '1rem',
                                    width: '100%',
                                    justifyContent: 'center',
                                    fontSize: '1.125rem',
                                    padding: '1rem',
                                    opacity: isLoading ? '0.7' : '1',
                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isLoading ? (
                                    <>
                                        <span style={{
                                            display: 'inline-block',
                                            width: '20px',
                                            height: '20px',
                                            border: '2px solid #ffffff',
                                            borderTopColor: 'transparent',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite',
                                            marginRight: '0.5rem'
                                        }}></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            {/* Add CSS for spinner animation */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default ContactSection;