import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "The most serene escape I've ever experienced. Every detail at Felix is meticulously curated for perfection.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Marcus Thorne",
    location: "New York, USA",
    text: "Unrivaled service and breathtaking views. A true testament to coastal luxury. I'll be back next season.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "Waking up to the sound of the Pacific was a dream. The Ocean Suite exceeded all our expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-coastal-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-coastal-text mb-4"
          >
            Guest <span className="italic">Experiences</span>
          </motion.h2>
          <div className="w-20 h-1 bg-coastal-accent mx-auto rounded-full opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem] relative group hover:bg-white transition-colors duration-500"
            >
              <Quote className="w-10 h-10 text-coastal-accent/10 absolute top-8 left-8" />
              
              <div className="relative mb-8 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-white shadow-xl transition-transform group-hover:scale-110"
                />
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-coastal-gold text-coastal-gold" />
                  ))}
                </div>
              </div>

              <blockquote className="text-coastal-text italic text-lg leading-relaxed text-center mb-8">
                "{t.text}"
              </blockquote>

              <div className="text-center">
                <p className="font-bold text-coastal-text">{t.name}</p>
                <p className="text-sm text-coastal-textLight">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}