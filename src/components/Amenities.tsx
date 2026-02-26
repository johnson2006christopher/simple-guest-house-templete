import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, UtensilsCrossed, Waves, ShieldCheck, Zap, Coffee } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export function Amenities() {
  const amenities = [
    { icon: Wifi, title: 'Fiber Optic Wi-Fi', desc: 'Seamless high-speed connectivity across the entire property.' },
    { icon: Coffee, title: 'Signature Breakfast', desc: 'Curated morning delights prepared by our award-winning chefs.' },
    { icon: Waves, title: 'Infinite Ocean Views', desc: 'Panoramic vistas of the Pacific from every private terrace.' },
    { icon: ShieldCheck, title: 'Private Concierge', desc: 'Dedicated 24/7 service tailored to your every preference.' },
    { icon: Zap, title: 'Smart Room controls', desc: 'Intuitive touch controls for lighting, climate, and media.' },
    { icon: UtensilsCrossed, title: 'Five-Star Dining', desc: 'Exclusive access to our beachside culinary experiences.' },
  ];

  return (
    <section id="amenities" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-coastal-text mb-6"
          >
            The Art of <span className="italic">Hospitality</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-coastal-textLight leading-relaxed"
          >
            Elevating your stay with a curated selection of premium amenities designed for absolute comfort and effortless luxury.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <button className="text-coastal-accent font-semibold flex items-center gap-2 group">
            Explore All Amenities
            <span className="w-8 h-[1px] bg-coastal-accent transition-all group-hover:w-12" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {amenities.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group p-8 rounded-3xl bg-white border border-coastal-border/40 hover:border-coastal-accent/20 transition-all duration-500 hover:shadow-premium relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-coastal-accent/5 to-transparent rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-coastal-bg flex items-center justify-center text-coastal-accent mb-6 group-hover:bg-coastal-accent group-hover:text-white transition-all duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-coastal-text mb-3 tracking-tight">{item.title}</h3>
              <p className="text-coastal-textLight leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}