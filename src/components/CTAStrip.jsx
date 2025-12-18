import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTAStrip = () => {
    return (
        <section style={{
            backgroundColor: 'var(--primary)',
            padding: '4rem 0',
            color: 'var(--white)',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 className="heading-lg" style={{ marginBottom: '1rem', color: 'var(--white)' }}>Ready to Upgrade Your Office Dining?</h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Join the list of happy corporates enjoying fresh, healthy, and delicious meals every day.
                </p>
                <Link to="/contact" className="btn" style={{
                    backgroundColor: 'var(--white)',
                    color: 'var(--primary)',
                    padding: '1rem 2.5rem',
                    fontSize: '1.125rem',
                    display: 'inline-flex',
                    gap: '0.5rem'
                }}>
                    Get Started Today <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default CTAStrip;
