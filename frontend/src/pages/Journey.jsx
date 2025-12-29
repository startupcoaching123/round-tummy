'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  TrendingUp, 
  MapPin, 
  ArrowRightCircle, 
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const timelineData = [
  {
    year: '2016',
    title: 'The Spark: Fu.D Tuckshop',
    description: 'It started with a single tuckshop in Gurgaon. No fancy equipment, just a passion for bringing fresh, honest flavors to the street.',
    stats: '1st Location',
  },
  {
    year: '2018',
    title: 'Cloud Kitchen Revolution',
    description: 'We embraced technology and opened our first cloud kitchen in DLF Cyber City, optimizing for delivery and speed without compromising taste.',
    stats: 'DLF Cyber City',
  },
  {
    year: '2019',
    title: 'The OYO Partnership',
    description: 'A major leap forward. We partnered with OYO to launch the PL8 brand, proving our operational capability at scale.',
    stats: 'Strategic Scale',
  },
  {
    year: '2020',
    title: 'Veerji De Paranthe',
    description: 'When the world paused, we cooked. Launched an authentic North Indian comfort food brand that became an instant local favorite.',
    stats: 'New Brand',
  },
  {
    year: '2022',
    title: 'Entering the Corporate World',
    description: 'We pivoted to B2B, taking over cafeteria operations. We replaced boring canteen food with restaurant-quality experiences.',
    stats: 'B2B Expansion',
  },
  {
    year: '2024',
    title: 'HOTSPOT Dominance',
    description: 'Now managing 6+ premium cafeterias under the HOTSPOT brand. We are setting the standard for corporate dining in Gurgaon.',
    stats: '6+ Locations',
  },
];

const Journey = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-orange-200">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Typography */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-orange-600"></span>
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Since 2016</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8 text-gray-900">
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                CRAFTING
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"
              >
                FLAVOR.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-gray-300"
              >
                SCALING
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                TRUST.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-500 max-w-md leading-relaxed"
            >
              From a street-side tuckshop to a corporate dining powerhouse. This is the timeline of our relentless pursuit of good food.
            </motion.p>
          </div>

          {/* Right: Abstract Stats / Visual */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-0 right-0 bg-white p-8 shadow-2xl shadow-orange-500/10 rounded-none border-l-4 border-orange-500 z-20"
              >
                <div className="text-5xl font-bold text-gray-900 mb-1">8+</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Years of Service</div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-0 left-4 bg-gray-900 text-white p-8 shadow-2xl rounded-none border-b-4 border-orange-500 z-10"
              >
                <div className="text-5xl font-bold mb-1">6+</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Corporate Hubs</div>
              </motion.div>
              
              {/* Decorative Circle connecting them */}
              <div className="absolute inset-0 m-auto w-64 h-64 border border-dashed border-gray-300 rounded-full animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>


      {/* ================= TIMELINE SECTION ================= */}
      <section className="relative py-32 max-w-7xl mx-auto px-6">
        
        {/* The Central Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 h-full transform md:-translate-x-1/2">
             {/* Scrolling gradient effect overlay */}
             <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 via-red-500 to-transparent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
             />
        </div>

        <div className="space-y-32">
          {timelineData.map((item, index) => (
            <TimelineRow key={index} data={item} index={index} />
          ))}
        </div>

        {/* End Mark */}
        <div className="flex justify-center mt-32 relative z-10">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold tracking-wide transition-all shadow-xl hover:bg-orange-600"
          >
            Partner with us 
            <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

const TimelineRow = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full group ${isEven ? '' : 'md:flex-row-reverse'}`}>
      
      {/* 1. THE YEAR (Big & Bold) - Opposing side of text on Desktop */}
      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'} mb-4 md:mb-0`}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <h2 className="text-8xl md:text-[120px] font-black text-gray-400 leading-none select-none transition-colors duration-500 group-hover:text-green-400">
            {data.year}
          </h2>
          {/* Small stat badge floating over year */}
          <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'md:right-0 md:-mr-4' : 'md:left-0 md:-ml-4'} left-0 ml-1 hidden md:block`}>
             <span className="bg-white border border-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-sm">
                {data.stats}
             </span>
          </div>
        </motion.div>
      </div>

      {/* 2. THE MARKER (Center Axis) */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-transform duration-300"
        />
      </div>

      {/* 3. THE CONTENT (Clean Text) */}
      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24 md:text-right'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
            <div className={`flex items-center gap-3 mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                <span className="w-12 h-[2px] bg-orange-500 block"></span>
                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Milestone</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {data.title}
            </h3>
            
            <p className="text-lg text-gray-500 leading-relaxed font-light">
                {data.description}
            </p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Journey;