import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: '#F0FDF4', // Very light green tint
            paddingTop: '80px'
        }}>
            {/* Abstract Background Shapes */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap-reverse', justifyContent: 'space-between' }}>

                {/* Text Content */}
                <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'var(--white)',
                        borderRadius: '9999px',
                        boxShadow: 'var(--shadow-sm)',
                        marginBottom: '1.5rem',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        fontSize: '0.875rem'
                    }}>
                        <Star size={16} fill="currentColor" />
                        <span>Trusted by 50+ Corporates</span>
                    </div>

                    <h1 className="heading-xl" style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                        Elevate Your Workplace <br />
                        <span style={{ color: 'var(--primary)' }}>Dining Experience</span>
                    </h1>

                    <p className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '550px' }}>
                        Fresh, hygienic, and customizable food solutions designed to bring convenience, comfort, and better dining to your office.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', display: 'inline-flex', gap: '0.5rem' }}>
                            Partner With Us <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="btn" style={{
                            backgroundColor: 'var(--white)',
                            color: 'var(--text-dark)',
                            border: '1px solid #E5E7EB',
                            padding: '1rem 2rem',
                            fontSize: '1.125rem'
                        }}>
                            Explore Services
                        </Link>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)' }}>10k+</h4>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Users</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)' }}>6+</h4>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Cafeterias Managed</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)' }}>100%</h4>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Hygiene Score</p>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div style={{ flex: '0 1 450px', position: 'relative' }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        transform: 'rotate(-2deg)',
                        border: '8px solid var(--white)'
                    }}>
                        <img src="/hero.png" alt="Corporate Dining" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Floating Card */}
                    <div style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '-20px',
                        backgroundColor: 'var(--white)',
                        padding: '1rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        maxWidth: '250px',
                        animation: 'float 3s ease-in-out infinite'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: '#FFF3E0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FF9800'
                        }}>
                            <Star size={24} fill="currentColor" />
                        </div>
                        <div>
                            <p style={{ fontWeight: '700', fontSize: '0.875rem' }}>Top Rated Service</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>4.9/5 from our clients</p>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 768px) {
          .hero-section .container {
            flex-direction: column !important;
          }
          
          .hero-section .container > div:last-child {
            order: 2 !important;
            margin-top: 2rem;
          }
          
          .hero-section .container > div:first-child {
            order: 1 !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
