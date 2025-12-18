import React from 'react';

const Clients = () => {
    // Data representing the logos in your image.
    // Ideally, you should replace the 'name' with an 'img' property containing your logo URLs.
    const clients = [
        { name: 'Falcon' },
        { name: 'Airbnb', color: '#FF5A5F' },
        { name: 'Dropbox', color: '#0061FF' },
        { name: 'FedEx', color: '#4D148C' },
        { name: 'Juniper', color: '#888' }, // Juniper Networks
        { name: 'Logitech', color: '#222' },
        { name: 'Arista', color: '#0F2657' },
        { name: 'ABInBev', color: '#B30838' },
        { name: 'Bitcoin', color: '#F7931A' }
    ];

    return (
        <section id="clients" style={{ backgroundColor: '#ffffff', padding: '6rem 1rem', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: '800', 
                        color: '#343a40', // Dark grey like the image
                        marginBottom: '1rem',
                        letterSpacing: '-1px'
                    }}>
                        Our Clients
                    </h2>
                    <p style={{ 
                        fontSize: '1.125rem', 
                        color: '#9ca3af', // Light grey subtitle
                        fontWeight: '400' 
                    }}>
                        File storage made easy – including powerful features
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
                                width: '220px',  // Fixed width for uniformity
                                height: '120px', // Fixed height for uniformity
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px', // Rounded corners
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', // Very soft shadow
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            {/* 💡 TODO: Replace this <h3> with your <img> tag when you have files.
                                Example: <img src={`/logos/${client.name}.png`} alt={client.name} width="100" />
                            */}
                            <h3 style={{ 
                                fontSize: '1.5rem', 
                                fontWeight: '700', 
                                color: client.color || '#555',
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