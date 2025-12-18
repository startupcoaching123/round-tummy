import React from 'react';
import ContactSection from '../components/Contact';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Let’s build the right food experience for your workplace. We are here to help."
                backgroundImage="/contact-bg.png"
            />
            <ContactSection />
        </>
    );
};

export default Contact;
