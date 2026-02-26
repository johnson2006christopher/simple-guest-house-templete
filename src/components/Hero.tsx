import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with Parallel Parallax Effect (simulated via motion) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-coastal-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 uppercase tracking-widest shadow-lg">
              Est. 1994 • Coastal Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] drop-shadow-2xl"
          >
            Find Your <br />
            <span className="italic text-white/90">Coastal</span> Sanctuary
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl font-light leading-relaxed drop-shadow-lg"
          >
            Discover unparalleled luxury where the sky meets the sea. Experience the essence of oceanfront living in our curated suites.
          </motion.p>
        </div>

        {/* Floating Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card mt-8 p-4 md:p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-4 shadow-premium-lg border-white/30"
        >
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="px-6 py-3 flex items-center gap-3 group cursor-pointer">
              <MapPin className="w-5 h-5 text-coastal-accent transition-transform group-hover:scale-110" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-coastal-textLight font-bold">Location</p>
                <p className="text-sm font-semibold text-coastal-text">North Shore, Oahu</p>
              </div>
            </div>
            <div className="px-6 py-3 flex items-center gap-3 group cursor-pointer">
              <Calendar className="w-5 h-5 text-coastal-accent transition-transform group-hover:scale-110" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-coastal-textLight font-bold">Check In / Out</p>
                <p className="text-sm font-semibold text-coastal-text">Oct 24 - Oct 29</p>
              </div>
            </div>
            <div className="px-6 py-3 flex items-center gap-3 group cursor-pointer">
              <Users className="w-5 h-5 text-coastal-accent transition-transform group-hover:scale-110" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-coastal-textLight font-bold">Guests</p>
                <p className="text-sm font-semibold text-coastal-text">2 Adults, 1 Child</p>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto bg-coastal-accent hover:bg-coastal-accentHover text-white px-10 py-5 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-xl">
            <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
            Check Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
}