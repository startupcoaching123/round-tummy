import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '0.15rem 0' : '0.2rem 0',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', }}>
          <img 
            src={logo}
            alt="Round Tummy Logo" 
            style={{ height: '80px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontWeight: '500',
                color: isActive(link.path) ? 'var(--primary)' : 'var(--text-dark)',
                transition: 'color 0.2s',
                position: 'relative'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = isActive(link.path) ? 'var(--primary)' : 'var(--text-dark)'}
            >
              {link.name}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '2px'
                }}></span>
              )}
            </Link>
          ))}
          <a 
            href="https://wa.me/919958579259" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'block', background: 'none', color: 'var(--text-dark)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--white)',
          padding: isOpen ? '2rem' : '0',
          boxShadow: isOpen ? 'var(--shadow-lg)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
        }}
      >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: isActive(link.path) ? 'var(--primary)' : 'var(--text-dark)',
                transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s ease-in-out ${index * 0.1}s`
              }}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/919958579259" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
            onClick={() => setIsOpen(false)}
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
              opacity: isOpen ? 1 : 0,
              transition: `all 0.3s ease-in-out ${navLinks.length * 0.1}s`,
              textDecoration: 'none'
            }}
          >
            Get in Touch
          </a>
        </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
