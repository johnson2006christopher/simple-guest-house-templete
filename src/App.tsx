import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Amenities } from './components/Amenities';
import { RoomPreview } from './components/RoomPreview';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-coastal-bg font-sans selection:bg-coastal-accent/20 relative overflow-x-hidden">
      <Navbar />
      {/* Floating Aura Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-left orb */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-coastal-accent/10 blur-[120px] aura-float" />
        {/* Right side orb */}
        <div className="absolute top-[800px] -right-32 w-[500px] h-[500px] rounded-full bg-coastal-accent/5 blur-[100px] aura-float-slow" />
        {/* Behind testimonials */}
        <div className="absolute top-[2200px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-coastal-gold/5 blur-[80px] aura-float-reverse" />
        {/* Bottom accent */}
        <div className="absolute bottom-[400px] -left-20 w-[350px] h-[350px] rounded-full bg-coastal-accent/5 blur-[90px] aura-float-slow" />
      </div>

      <main className="relative z-10">
        <Hero />
        <Amenities />
        <RoomPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}