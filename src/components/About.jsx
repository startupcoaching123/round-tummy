import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const AboutSection = () => {
    const features = [
        "Customizable Menus",
        "FSSAI Certified Kitchens",
        "On-Time Delivery",
        "Sustainable Practices",
        "Dietary Accommodations",
        "24/7 Support"
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">

                {/* Mission & Vision Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
                    <div className="fade-in-up" style={{ padding: '2rem', backgroundColor: '#F0FDF4', borderRadius: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--white)', borderRadius: '50%', color: 'var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                                <Target size={32} />
                            </div>
                            <h3 className="heading-md" style={{ marginBottom: 0 }}>Our Mission</h3>
                        </div>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.125rem' }}>
                            To revolutionize corporate dining by providing healthy, hygienic, and homely meals that fuel productivity and happiness. We strive to be the most trusted food partner for organizations.
                        </p>
                    </div>

                    <div className="fade-in-up delay-100" style={{ padding: '2rem', backgroundColor: '#FFF7ED', borderRadius: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--white)', borderRadius: '50%', color: 'var(--secondary)', boxShadow: 'var(--shadow-sm)' }}>
                                <Eye size={32} />
                            </div>
                            <h3 className="heading-md" style={{ marginBottom: 0 }}>Our Vision</h3>
                        </div>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.125rem' }}>
                            To create a world where workplace dining is not just a necessity but an experience to look forward to. We aim to set global standards in food safety, taste, and service.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: '1 1 500px' }} className="fade-in-up delay-200">
                        <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Why Choose Us</span>
                        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>We Don't Just Serve Food, <br /> We Serve Satisfaction.</h2>
                        <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
                            With years of experience and a passion for culinary excellence, we ensure every meal is a delight.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {features.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--primary)" fill="#E8F5E9" />
                                    <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px', position: 'relative' }} className="fade-in-up delay-300">
                        <div style={{
                            backgroundColor: 'var(--primary)',
                            borderRadius: '2rem',
                            padding: '3rem',
                            color: 'var(--white)',
                            textAlign: 'center',
                            boxShadow: 'var(--shadow-lg)',
                            transform: 'rotate(2deg)'
                        }}>
                            <Heart size={64} style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
                            <h3 className="heading-md" style={{ color: 'var(--white)', marginBottom: '1rem' }}>Made with Love</h3>
                            <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                                "The secret ingredient is always love." <br /> We treat every meal as if we were cooking for our own family.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
