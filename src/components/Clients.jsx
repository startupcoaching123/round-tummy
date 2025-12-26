import React from 'react';

const Clients = () => {
    // Updated client list with vibrant color schemes
    const clients = [
        { name: 'RSM', bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', textColor: '#ffffff' },
        { name: 'Great Learning', bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', textColor: '#ffffff' },
        { name: 'Spinny', bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', textColor: '#ffffff' },
        { name: 'Grant Thornton', bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', textColor: '#ffffff' },
        { name: 'CollegeDekho', bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', textColor: '#ffffff' },
        { name: 'Willis Towers Watson', bgColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', textColor: '#ffffff' }
    ];

    return (
        <section id="clients" style={{ backgroundColor: '#ffffff', padding: '3rem 1rem', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: '800', 
                        color: '#343a40', 
                        marginBottom: '1rem',
                        letterSpacing: '-1px'
                    }}>
                        Our Clients
                    </h2>
                    <p style={{ 
                        fontSize: '1.125rem', 
                        color: '#9ca3af', 
                        fontWeight: '400',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        We proudly serve corporates, institutes, and startups across Gurgaon, building long-lasting relationships through honest service and dependable food quality.
                    </p>
                </div>

                {/* Grid Section */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                }}>
                    {clients.map((client, index) => (
                        <div key={index} 
                             className="client-card"
                             style={{
                                backgroundColor: '#ffffff',
                                width: '220px',  
                                height: '120px', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px', 
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                padding: '10px', // Added padding to prevent text overflow
                                textAlign: 'center'
                            }}
                        >
                            {/* 💡 Reminder: Replace this <h3> with your <img> tag when you have the logo files.
                                Example: <img src={`/logos/${client.name.replace(/\s+/g, '').toLowerCase()}.png`} alt={client.name} width="150" />
                            */}
                            <h3 style={{ 
                                fontSize: '1.25rem', // Slightly smaller font to accommodate longer names like 'Willis Towers Watson'
                                fontWeight: '700', 
                                color: '#555', // Default dark grey
                                margin: 0 
                            }}>
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* CSS for Hover Effects */}
            <style>{`
                .client-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
            `}</style>
        </section>
    );
};

export default Clients;