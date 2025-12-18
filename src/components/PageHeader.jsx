import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div style={{
      position: 'relative',
      padding: '12rem 0 8rem', // Increased padding for more "hero" feel
      textAlign: 'center',
      marginBottom: '4rem',
      color: 'var(--white)',
      overflow: 'hidden',
      marginTop: '-80px'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
        transform: 'scale(1.05)' // Subtle zoom effect
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Slightly lighter overlay
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)' // Gradient overlay
        }}></div>
      </div>

      <div className="container fade-in-up" style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
        <h1 className="heading-2xl" style={{ marginBottom: '1.5rem', fontSize: '3.5rem', textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>{title}</h1>
        {subtitle && (
          <p className="text-lead" style={{ maxWidth: '800px', margin: '0 auto', color: '#F3F4F6', fontSize: '1.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontWeight: '500' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
