
import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, AlertCircle, TrendingUp, HelpCircle, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';

interface Props {
  study: CaseStudy;
  onClose: () => void;
}

const CaseStudyModal: React.FC<Props> = ({ study, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger entry animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for transition
  };

  return (
    <div 
      className={`fixed inset-0 z-[60] overflow-y-auto bg-white transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <span className="font-black text-gray-900 tracking-tighter uppercase text-xs">Strategy Case Study</span>
        <button 
          onClick={handleClose} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
        <header className="mb-16">
          <div className="flex gap-2 mb-6">
            {study.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-widest rounded-full text-gray-500">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">{study.title}</h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 font-medium">{study.subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            {study.driveLink && (
              <a 
                href={study.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-lg active:scale-95"
              >
                Full PRD / Doc
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
            <div className="flex items-center px-6 py-4 bg-gray-50 rounded-full border border-gray-100">
              <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
              <span className="text-sm font-bold text-gray-700">Ownership: {study.role.split(' ')[0]}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">
              <AlertCircle className="w-4 h-4 mr-2" />
              The Problem
            </h2>
            <p className="text-gray-900 font-semibold leading-relaxed text-lg">{study.problem}</p>
          </section>
          <section className="p-8 bg-black rounded-[2rem]">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">
              <TrendingUp className="w-4 h-4 mr-2" />
              North Star Result
            </h2>
            <p className="text-white font-black leading-tight text-3xl">{study.impact[0]}</p>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Primary Success Metric</p>
          </section>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">User Pain Points</h2>
            <div className="grid grid-cols-1 gap-4">
              {study.painPoints.map((point, i) => (
                <div key={i} className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-red-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center font-black text-xs mr-4">
                    0{i + 1}
                  </div>
                  <span className="text-gray-800 font-bold leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50/30 p-10 rounded-[2.5rem] border border-blue-50">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Hypotheses & Assumptions</h2>
            <div className="space-y-6">
              {study.hypotheses.map((h, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-blue-200 text-4xl font-serif mr-4">“</span>
                  <p className="text-blue-900 font-bold text-xl leading-relaxed italic">{h}”</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Solution Architecture</h2>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-900 font-medium mb-10 leading-relaxed">{study.solution}</p>
              
              <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-2xl">
                <h3 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-4">Strategic Trade-offs</h3>
                <p className="text-amber-900/80 font-bold leading-relaxed">{study.tradeOffs}</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.4em] mb-12 text-gray-500 relative z-10">
              Measurable Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {study.impact.map((metric, i) => (
                <div key={i} className="border-l border-white/10 pl-8 transition-all hover:border-green-500">
                  <p className="text-5xl font-black mb-3 text-white tracking-tighter">{metric.split(' ')[0]}</p>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{metric.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pb-32 border-t border-gray-100 pt-16">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
              Future Improvements
            </h2>
            <div className="p-10 bg-[#fafafa] rounded-[2rem] border border-gray-100 italic text-gray-500 text-xl font-medium leading-relaxed">
              "{study.improvements}"
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
