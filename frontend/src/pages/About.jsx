'use client';
import { motion } from 'framer-motion';
import {
  Quote,
  Target,
  Flame,
  ShieldCheck,
  Users,
  Leaf,
  ArrowRight,
  Utensils,
  User // Imported User icon for the person placeholder
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import anurag from "../assets/anurag.png";
import vanshul from "../assets/vanshul.png";

// --- Data ---
const teamMembers = [
  {
    name: "Vanshul",
    role: "Director",
    image: vanshul,
    description: "Visionary leader with 10+ years in hospitality. Passionate about sourcing fresh ingredients and driving innovation."
  },
  {
    name: "Anurag",
    role: "Director",
    image: anurag,
    description: "Strategic thinker focused on operational excellence. Ensures seamless delivery and uncompromising quality."
  }
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-800">

      {/* ================= 1. SIMPLE HERO SECTION ================= */}
      <section className="relative pt-32 pb-4 px-6 md:px-12 bg-linear-to-br from-green-50 via-white to-orange-50/30 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-lg"
          >
            <Leaf className="w-3 h-3" />
            About Us
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-linear-to-r from-green-600/10 to-orange-500/10 blur-3xl transform scale-110"></div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight relative"
            >
              Nourishing your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 via-orange-500 to-red-500">
                work, life, and routine.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              We create meal solutions that match different tastes, budgets, and needs — simple, reliable, and made to fit your routine.
            </p>

            {/* Stats badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-green-200 shadow-md"
              >
                <div className="text-2xl font-bold text-green-700">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-orange-200 shadow-md"
              >
                <div className="text-2xl font-bold text-orange-600">6+</div>
                <div className="text-sm text-gray-600">Corporate Hubs</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-green-200 shadow-md"
              >
                <div className="text-2xl font-bold text-green-700">10k+</div>
                <div className="text-sm text-gray-600">Daily Meals</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE & MOTTO ================= */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Who We Are Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Who We Are
              <span className="h-px w-12 bg-orange-400 block"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Round Tummy Hospitality provides complete food services for corporates, schools, institutes, and individuals.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We create meal solutions that match different tastes, budgets, and needs — simple, reliable, and made to fit your routine.
            </p>
          </div>

          {/* Right: The Motto Box */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-orange-50 p-8 md:p-10 rounded-2xl border border-orange-100 relative"
          >
            <Quote className="w-10 h-10 text-orange-300 absolute top-6 right-6" />

            <span className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-3 block">Our Motto</span>
            <h3 className="text-2xl md:text-3xl font-serif italic text-gray-900 mb-4 leading-snug">
              “We only serve what we <span className="text-orange-600">eat ourselves</span>.”
            </h3>
            <div className="flex items-center gap-2 text-gray-700 font-medium border-t border-orange-200 pt-4 mt-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              Clean, tasty, and safe food is our everyday promise.
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. THE MOTTO (Dark Green Break) ================= */}
      <section className="py-20 bg-green-600 text-black relative overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote className="w-12 h-12 text-orange-400 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl md:text-5xl font-serif italic leading-snug mb-6">
            "We only serve what we <span className="text-orange-400 border-b-2 border-orange-400">eat ourselves</span>."
          </h3>
          <div className="inline-flex items-center gap-2 text-green-200 text-lg">
            <ShieldCheck className="w-5 h-5" />
            <span>Clean, Tasty, and Safe.</span>
          </div>
        </div>
      </section>

      {/* ================= 4. VISION & MISSION ================= */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision Card - Green Theme */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-green-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-500"></div>

              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 rotate-3 group-hover:rotate-12 transition-transform">
                <Target className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To be the most preferred food partner, creating a healthier society by blending authentic <span className="text-green-700 font-semibold">green values</span> with professional service.
              </p>
            </motion.div>

            {/* Mission Card - Orange Theme */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-orange-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-500"></div>

              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 -rotate-3 group-hover:-rotate-12 transition-transform">
                <Flame className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To consistently deliver hygienic, nutritious, and delicious meals while fueling the workforce with <span className="text-orange-600 font-semibold">warm energy</span> and reliability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 5. TEAM SECTION ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center">
            <div className="inline-block border-b-2 border-green-500 pb-2 mb-4">
              <span className="text-sm font-bold tracking-widest text-gray-900 uppercase">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">MEET THE FOUNDERS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. CTA / FOOTER ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center mb-8">
            <Utensils className="w-8 h-8 text-green-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to taste the <span className="text-green-600">freshness?</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto text-lg">
            Whether it's a corporate lunch or a cafeteria takeover, we bring the best flavors to your table.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-green-600 rounded-full hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/20"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

// --- Helper Components ---

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col md:flex-row gap-8 items-center md:items-start group"
    >
      {/* ----- MODIFIED IMAGE CONTAINER ----- */}
      <div className="w-full md:w-1/2 rounded-2xl shadow-lg relative aspect-[4/5] bg-gray-100 flex items-center justify-center overflow-hidden">

        {/* Simple Person Icon Placeholder */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover"
        />





        {/* ----- ORIGINAL IMAGE CODE (COMMENTED OUT) ----- */}
        {/* Uncomment below block to restore photos */}
        {/*
        <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover aspect-[4/5] transform group-hover:scale-105 transition-all duration-700"
        /> 
        */}
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left pt-4">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase mb-4 inline-block">
          {member.role}
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
          {member.name}
        </h3>
        <p className="text-gray-500 leading-relaxed text-lg">
          {member.description}
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;