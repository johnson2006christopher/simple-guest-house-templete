import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Maximize, User } from 'lucide-react';

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    title: "The Ocean Suite",
    price: "450",
    sqft: "1,200",
    guests: "2 Adults",
    badge: "Most Popular"
  },
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    title: "Garden Sanctuary",
    price: "320",
    sqft: "850",
    guests: "2 Adults",
    badge: "Exclusive"
  },
  {
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    title: "Azure Loft",
    price: "380",
    sqft: "950",
    guests: "2 Adults",
    badge: "Limited"
  }
];

export function RoomPreview() {
  return (
    <section id="rooms" className="py-32 px-6 bg-coastal-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-coastal-accent font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Exclusive Living
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-coastal-text"
          >
            Our Curated <span className="italic">Suites</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-premium group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-coastal-text shadow-lg">
                    {room.badge}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <Maximize className="w-4 h-4" />
                        {room.sqft} sqft
                      </div>
                      <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <User className="w-4 h-4" />
                        {room.guests}
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-coastal-gold text-coastal-gold" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-coastal-text group-hover:text-coastal-accent transition-colors">{room.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-coastal-text">${room.price}</span>
                    <span className="block text-xs text-coastal-textLight font-medium">per night</span>
                  </div>
                </div>
                
                <button className="w-full py-4 px-6 rounded-2xl bg-coastal-bg group-hover:bg-coastal-accent text-coastal-text group-hover:text-white font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  View Suite Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}