'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formState.name.trim()) newErrors.name = 'Name is required.';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formState.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers and limit to 10 characters
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormState(prev => ({ ...prev, [name]: numbersOnly }));
      }
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: '', text: '' });

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${BACKENDURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message || 'Message sent successfully!' });
        // Clear form
        setFormState({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({ type: 'error', text: 'Network error. Please check if the backend is running.' });
    } finally {
      setIsLoading(false);
    }
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

            {/* RIGHT: The Form - Only name, email, phone, message */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {/* Success/Error Message */}
              {submitMessage.text && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitMessage.type === 'success' ? <CheckCircle className="w-5 h-5 mt-0.5" /> : <XCircle className="w-5 h-5 mt-0.5" />}
                  <span className="font-medium">{submitMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    label="Your Name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formState.name} 
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <InputField 
                    label="Phone Number" 
                    name="phone" 
                    placeholder="9876543210" 
                    value={formState.phone} 
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />
                </div>

                <InputField 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  value={formState.email} 
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    rows="4"
                    className={`w-full px-5 py-4 rounded-2xl border-2 bg-gray-50 focus:bg-white outline-none transition-all resize-none text-gray-800 placeholder-gray-400 ${
                      errors.message 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-transparent focus:border-green-500'
                    }`}
                    placeholder="Tell us about your requirements..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <p className="text-sm text-red-600 ml-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. MAP SECTION ================= */}
      <section className="h-96 rounded-4xl w-full relative overflow-hidden">
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

const InputField = ({ label, name, type = "text", placeholder, value, onChange, error, required }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-gray-700 ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input 
      type={type}
      name={name}
      className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 transition-all text-gray-800 placeholder-gray-400 outline-none ${
        error 
        ? 'border-red-300 focus:border-red-500' 
        : 'border-transparent focus:border-green-500 focus:bg-white'
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <p className="text-sm text-red-600 ml-1">{error}</p>}
  </div>
);

export default Contact;