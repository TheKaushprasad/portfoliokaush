
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-32 pb-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-on-scroll">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-gray-900">
            Let’s build the <br/> <span className="gradient-text">future together.</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 reveal-on-scroll">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Mail className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" /> {PERSONAL_INFO.email}
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Linkedin className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-1" /> LinkedIn
          </a>
          <a 
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Phone className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" /> {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
