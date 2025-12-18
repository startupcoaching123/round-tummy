import React from 'react';
import JourneySection from '../components/Journey';
import PageHeader from '../components/PageHeader';

const Journey = () => {
    return (
        <>
            <PageHeader
                title="Our Journey"
                subtitle="From a small tuckshop to a leading corporate food partner, here is how we grew."
                backgroundImage="/journey-bg.png"
            />
            <JourneySection />
        </>
    );
};

export default Journey;
