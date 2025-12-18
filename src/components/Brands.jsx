import React from 'react';
import { Coffee, Truck, UtensilsCrossed, ChefHat } from 'lucide-react';

const Brands = () => {
    const brands = [
        {
            id: 1,
            name: 'HOTSPOT',
            type: 'Corporate & Institute Cafeterias',
            desc: 'A fast and efficient cafeteria model perfect for offices and campuses. We manage the entire setup, daily operations, and food service.',
            features: ['Quick food', 'Fresh meals', 'Friendly pricing'],
            icon: <Coffee size={40} />,
            color: '#FF9800'
        },
        {
            id: 2,
            name: 'Fu.D',
            type: 'Café & Delivery',
            desc: 'A cosy café experience for working professionals offering all-day breakfasts and fresh comfort food.',
            features: ['10-minute service', 'Available on Zomato/Swiggy'],
            icon: <UtensilsCrossed size={40} />,
            color: '#E91E63'
        },
        {
            id: 3,
            name: 'VDP (Veerji De Paranthe)',
            type: 'Cloud Kitchen',
            desc: 'A delivery brand loved for its stuffed, flavour-packed North Indian parathas.',
            tagline: '“Mann bharke fillings, jee bharke pyaar.”',
            features: [],
            icon: <Truck size={40} />,
            color: '#F44336'
        },
        {
            id: 4,
            name: 'RT Catering',
            type: 'Gourmet Corporate Catering',
            desc: 'Perfect for employee meals, office events, Friday specials, and team celebrations.',
            features: ['Indian', 'Continental', 'Oriental'],
            icon: <ChefHat size={40} />,
            color: '#9C27B0'
        }
    ];

    return (
        <section id="brands" className="section" style={{ backgroundColor: '#F3F4F6' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Our Services</span>
                    <h2 className="heading-lg">Our Brands</h2>
                    <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Diverse food solutions tailored for every need.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }} className="brands-container">
                    {brands.map((brand) => (
                        <div key={brand.id} style={{
                            backgroundColor: 'var(--white)',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid rgba(0,0,0,0.05)',
                            flex: '1',
                            maxWidth: '280px'
                        }}
                            className="brand-card"
                        >
                            <div style={{ padding: '1.5rem', flex: 1, position: 'relative' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '0.875rem',
                                    backgroundColor: `${brand.color}15`,
                                    color: brand.color,
                                    borderRadius: '0.875rem',
                                    marginBottom: '1rem',
                                    boxShadow: `0 4px 8px ${brand.color}20`,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                className="brand-icon"
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: `${brand.color}08`,
                                        borderRadius: '50%',
                                        filter: 'blur(12px)'
                                    }} />
                                    {React.cloneElement(brand.icon, { size: 32 })}
                                </div>
                                <h3 className="heading-md" style={{ marginBottom: '0.375rem', fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-dark)' }}>{brand.name}</h3>
                                <p style={{ color: brand.color, fontWeight: '600', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{brand.type}</p>
                                <p style={{ color: 'var(--text-light)', marginBottom: '1rem', lineHeight: '1.5', fontSize: '0.875rem' }}>{brand.desc}</p>

                                {brand.tagline && (
                                    <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '500', borderLeft: `3px solid ${brand.color}`, paddingLeft: '0.75rem', fontSize: '0.85rem' }}>{brand.tagline}</p>
                                )}

                                {brand.features.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                        {brand.features.map((feat, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.7rem',
                                                padding: '0.325rem 0.75rem',
                                                backgroundColor: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)',
                                                borderRadius: '9999px',
                                                color: 'var(--text-dark)',
                                                border: '1px solid #E5E7EB',
                                                fontWeight: '600',
                                                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                                                transition: 'all 0.2s ease'
                                            }}>
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .brand-card {
          position: relative;
        }
        .brand-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 12px 20px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.06) !important;
        }
        .brand-card:hover .brand-icon {
          transform: scale(1.05) rotate(3deg);
        }
        .brand-icon {
          transition: all 0.3s ease;
        }
        @media (max-width: 1024px) {
          .brands-container {
            flex-wrap: wrap;
            justify-content: center;
          }
          .brand-card {
            maxWidth: '240px';
            minWidth: '220px';
          }
        }
        @media (max-width: 768px) {
          .brands-container {
            gap: '0.75rem';
            flex-direction: column;
          }
          .brand-card {
            maxWidth: '100%';
          }
        }
      `}</style>
        </section>
    );
};

export default Brands;
