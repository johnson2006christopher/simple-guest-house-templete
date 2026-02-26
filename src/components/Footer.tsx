import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Send, Waves } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-coastal-footer text-slate-400 pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="bg-coastal-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                FELIX
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Crafting unforgettable coastal experiences since 1994. Luxury redefined through nature and design.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coastal-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Suites', 'Amenities', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-coastal-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-coastal-accent shrink-0" />
                <span>42 Coastal Drive<br />Seaside Bay, CA 93950</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-coastal-accent shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-coastal-accent shrink-0" />
                <span>concierge@felixhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-sm mb-6">Join our exclusive circle for seasonal offers and coastal insights.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-coastal-accent transition-colors"
                onSubmit={(e) => e.preventDefault()}
              />
              <button className="absolute right-2 top-2 bottom-2 bg-coastal-accent hover:bg-coastal-accentHover text-white px-4 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>&copy; {new Date().getFullYear()} FELIX Hotel Group. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Author Signature */}
          <div 
            id="jc-signature"
            className="flex flex-col items-center md:items-end gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-coastal-accent font-bold">Project Architect</span>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-white font-serif text-lg font-bold mb-1">Johnson Christopher</span>
              <div className="flex gap-4 text-xs font-medium">
                <a href="https://johnsoncv.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-coastal-accent transition-colors">Portfolio</a>
                <a href="https://github.com/johnson2006christopher" target="_blank" rel="noopener noreferrer" className="hover:text-coastal-accent transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/johnson-hassan-935124311/" target="_blank" rel="noopener noreferrer" className="hover:text-coastal-accent transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-coastal-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Integrity Protection Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          const s = "jc-signature";
          const check = () => {
            const el = document.getElementById(s);
            if (!el || window.getComputedStyle(el).display === 'none' || window.getComputedStyle(el).visibility === 'hidden') {
              console.error("Felix System: Integrity Check Failed. Author credits missing.");
              if (el) { 
                el.style.setProperty('display', 'flex', 'important'); 
                el.style.setProperty('visibility', 'visible', 'important'); 
                el.style.setProperty('opacity', '1', 'important'); 
              }
            }
          };
          setInterval(check, 5000);
          const obs = new MutationObserver(check);
          const target = document.getElementById(s);
          if (target) obs.observe(target, { attributes: true, childList: true, subtree: true });
        })();
      `}} />
    </footer>
  );
}