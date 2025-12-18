import React from 'react';
import AboutSection from '../components/About';
import PageHeader from '../components/PageHeader';

// --- Team Member Data ---
const teamMembers = [
  {
    name: "Vanshul",
    role: "Director & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Visionary leader with 10+ years in hospitality industry, passionate about creating exceptional dining experiences."
  },
  {
    name: "Anurag",
    role: "Director & Co-Founder", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Strategic thinker focused on operational excellence and customer satisfaction in food service."
  },
  {
    name: "Priya Sharma",
    role: "Head Chef",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Culinary expert with international experience, specializing in fusion cuisine and innovative recipes."
  },
  {
    name: "Raj Kumar",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    description: "Operations specialist ensuring smooth delivery and quality control across all service areas."
  }
];

// --- Internal Team Component ---
const TeamSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-100 rounded-full opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              Our Leadership Team
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet The <span className="text-gray-800">Visionaries</span> Behind Round Tummy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Leading with passion, purpose, and a love for exceptional food. 
            We are dedicated to crafting the best culinary experiences that bring joy to every meal.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gray-300 w-20"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="h-px bg-gray-300 w-20"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card with minimal design */}
              <div className="relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="p-6 relative z-10">
                  {/* Modern Image Container with B&W to color effect */}
                  <div className="relative mb-6 group/image">
                    <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover/image:grayscale-0 scale-110 group-hover/image:scale-100"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Enhanced Text Info */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center px-3 py-1 bg-[#FFF7ED] text-gray-700 rounded-full text-sm font-medium mb-4 mx-auto w-fit">
                    {member.role}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  {/* Minimal Social Icons */}
                  <div className="flex justify-center space-x-2">
                    <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                      <span className="sr-only">LinkedIn</span>
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                      <span className="sr-only">Email</span>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex items-center justify-center">
          <div className="h-px bg-gray-300 w-full max-w-md"></div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="We create meal solutions that match different tastes, budgets, and needs — simple, reliable, and made to fit your routine."
        backgroundImage="/about-bg.png"
      />
      
      <AboutSection />
      
      <TeamSection />
    </>
  );
};

export default About;