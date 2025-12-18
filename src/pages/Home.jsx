import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import CTAStrip from '../components/CTAStrip';
import AboutSection from '../components/About';

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <AboutSection /> {/* Added About section to Home for more content */}
      <Testimonials />
      <Clients />
      <CTAStrip />
    </>
  );
};

export default Home;
