
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, FileText, ChevronRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface Props {
  onSelect: (cs: CaseStudy) => void;
}

const CaseStudies: React.FC<Props> = ({ onSelect }) => {
  return (
    <section id="case-studies" className="py-24 bg-[#fafafa] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-gray-200 rounded-lg mb-4">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Deep Dives</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-2xl">A technical look at problems I've solved, decisions I've made, and the measurable impact delivered.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id} 
              className="group relative p-10 bg-white border border-gray-100 rounded-[2.5rem] card-shadow flex flex-col h-full transition-all hover:border-black/5"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-wider rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                {study.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                {study.subtitle}
              </p>
              
              <div className="mt-auto space-y-6">
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Impact</p>
                      <p className="text-sm font-bold text-gray-900">{study.impact[0]}</p>
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Focus</p>
                      <p className="text-sm font-bold text-gray-900">{study.tags[0]}</p>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button 
                    onClick={() => onSelect(study)}
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all active:scale-95 group/btn"
                  >
                    Read Narrative
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  
                  {study.driveLink && (
                    <a 
                      href={study.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-300 hover:text-black transition-colors"
                      title="View Detailed Doc"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
