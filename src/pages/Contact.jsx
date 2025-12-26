'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  ArrowRight,
  Clock
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-800">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-green-50/60 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-200 text-green-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <MessageSquare className="w-3 h-3" />
            Get in Touch
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-green-700 mb-6 tracking-tight leading-tight"
          >
            Contact
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Let's build the right food experience for you
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed"
          >
            Whether you have a question about our menus, pricing, or want to schedule a tasting, our team is ready to answer all your questions.
          </motion.p>
        </div>
      </section>

      {/* ================= 2. CONTACT GRID ================= */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* LEFT: Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-500 leading-relaxed">
                  Fill up the form and our Team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <ContactCard 
                  icon={Phone} 
                  title="Call Us" 
                  info="+91 98765 43210" 
                  subInfo="Mon-Fri from 9am to 6pm"
                  color="text-orange-500"
                  bgColor="bg-orange-50"
                />
                <ContactCard 
                  icon={Mail} 
                  title="Email Us" 
                  info="hello@roundtummy.com" 
                  subInfo="For corporate inquiries & feedback"
                  color="text-green-600"
                  bgColor="bg-green-50"
                />
                <ContactCard 
                  icon={MapPin} 
                  title="Visit Us" 
                  info="Sector 44, Gurgaon" 
                  subInfo="Haryana, India - 122003"
                  color="text-blue-500"
                  bgColor="bg-blue-50"
                />
              </div>

              {/* Business Hours Box */}
              <div className="p-6 rounded-2xl bg-gray-900 text-white mt-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-start gap-4 relative z-10">
                   <Clock className="w-6 h-6 text-orange-400 mt-1" />
                   <div>
                     <h4 className="font-bold text-lg mb-1">Operational Hours</h4>
                     <p className="text-gray-400 text-sm">We serve fresh meals daily.</p>
                     <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                       <div>
                         <span className="block text-gray-500 uppercase text-xs font-bold">Kitchen</span>
                         <span>4:00 AM - 11:00 PM</span>
                       </div>
                       <div>
                         <span className="block text-gray-500 uppercase text-xs font-bold">Office</span>
                         <span>9:00 AM - 6:00 PM</span>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: The Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    label="Your Name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formState.name} 
                    onChange={handleChange} 
                  />
                  <InputField 
                    label="Phone Number" 
                    name="phone" 
                    placeholder="+91 98765..." 
                    value={formState.phone} 
                    onChange={handleChange} 
                  />
                </div>

                <InputField 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  value={formState.email} 
                  onChange={handleChange} 
                />

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Looking for?</label>
                  <div className="flex flex-wrap gap-3">
                    {['Corporate Catering', 'Event Bulk Order', 'Individual Meal Plan', 'Other'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormState({...formState, subject: option})}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formState.subject === option 
                          ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
                    placeholder="Tell us about your requirements..."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. MAP SECTION ================= */}
      <section className="h-96 rounded-4xl   w-full relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.741447835!2d77.0716!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e3888f%3A0x2c5d5b5b5b5b5b5b!2sSector%2044%2C%20Gurgaon%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Round Tummy Hospitality Location"
          className="w-full h-full"
        />
      </section>

    </div>
  );
};

// --- Helper Components ---

const ContactCard = ({ icon: Icon, title, info, subInfo, color, bgColor }) => (
  <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default group">
    <div className={`w-14 h-14 ${bgColor} ${color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      <p className="text-gray-800 font-medium mt-1">{info}</p>
      <p className="text-sm text-gray-500 mt-1">{subInfo}</p>
    </div>
  </div>
);

const InputField = ({ label, name, type = "text", placeholder, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-gray-700 ml-1">{label}</label>
    <input 
      type={type}
      name={name}
      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Contact;