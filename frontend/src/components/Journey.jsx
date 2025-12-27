import React from 'react';

const JourneySection = () => {
    const milestones = [
        { year: '2016', title: 'The Beginning', desc: 'Started Fu.D tuckshop in Gurgaon' },
        { year: '2018', title: 'Expansion', desc: 'Opened our first cloud kitchen in DLF Cyber City' },
        { year: '2019', title: 'Partnership', desc: 'Partnered with OYO for PL8 brand' },
        { year: '2020', title: 'New Brand', desc: 'Launched Veerji De Paranthe' },
        { year: '2022', title: 'Growth', desc: 'Expanded into multiple corporate cafeterias' },
        { year: '2024', title: 'Market Leader', desc: 'Managing 6+ cafeterias under HOTSPOT in Gurgaon' }
    ];

    return (
        <section id="journey" className="section" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Our Growth</span>
                    <h2 className="heading-lg">A Journey of Flavor & Trust</h2>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: '2px'
                    }}></div>

                    {milestones.map((item, index) => (
                        <div key={index} className="fade-in-up" style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '4rem',
                            position: 'relative',
                            animationDelay: `${index * 0.1}s`
                        }}>
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(-50%)',
                                width: '24px',
                                height: '24px',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '50%',
                                border: '4px solid var(--white)',
                                boxShadow: '0 0 0 4px rgba(76, 175, 80, 0.2)',
                                zIndex: 1
                            }}></div>

                            <div style={{
                                width: '45%',
                                backgroundColor: 'var(--white)',
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                boxShadow: 'var(--shadow-md)',
                                position: 'relative',
                                textAlign: index % 2 === 0 ? 'right' : 'left'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 1rem',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--white)',
                                    borderRadius: '9999px',
                                    fontWeight: '700',
                                    fontSize: '0.875rem',
                                    marginBottom: '1rem'
                                }}>
                                    {item.year}
                                </span>
                                <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-light)' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
