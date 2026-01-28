
import React from 'react';
import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-fade-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Available for PM / Senior PM Roles</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight max-w-4xl mx-auto animate-reveal" style={{ animationDelay: '0.1s' }}>
          I build <span className="gradient-text">AI-powered products</span> that scale users and revenue.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-reveal" style={{ animationDelay: '0.2s' }}>
          Product Manager with hands-on experience across AI, SaaS, and HealthTech. Turning ambiguous problems into shipped products with measurable business impact.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-reveal" style={{ animationDelay: '0.3s' }}>
          <a 
            href={PERSONAL_INFO.resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-bold flex items-center justify-center hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-0 -z-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-blue-100/30 blur-[120px] rounded-full animate-fade-slow"></div>
    </section>
  );
};

export default Hero;