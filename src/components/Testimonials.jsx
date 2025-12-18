import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Round Tummy has completely transformed our office cafeteria. The food is always fresh, and the variety keeps our employees happy.",
            author: "HR Manager",
            company: "Great Learning"
        },
        {
            text: "Their hygiene standards are top-notch. We never have to worry about food safety with them.",
            author: "Admin Head",
            company: "CollegeDekho"
        },
        {
            text: "Delicious meals and excellent service. The team is very responsive to our needs.",
            author: "Facility Manager",
            company: "Grant Thornton"
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Testimonials</span>
                    <h2 className="heading-lg">What Our Clients Say</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: '#F9FAFB',
                            padding: '2rem',
                            borderRadius: 'var(--radius)',
                            position: 'relative',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <Quote size={32} style={{ color: 'var(--primary)', opacity: 0.2, position: 'absolute', top: '1.5rem', left: '1.5rem' }} />
                            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                                "{item.text}"
                            </p>
                            <div>
                                <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{item.author}</p>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>{item.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
