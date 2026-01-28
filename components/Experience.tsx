
import React from 'react';
import { EXPERIENCES, INTERNSHIPS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#fafafa] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600">Track record of building and scaling products in high-growth environments.</p>
          </div>
          
          <div className="space-y-16">
            {/* Professional Roles */}
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-px flex-grow bg-gray-200"></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">Professional Roles</span>
                <div className="h-px flex-grow bg-gray-200"></div>
              </div>
              
              <div className="space-y-12">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-gray-200 last:border-0 pb-12 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black"></div>
                    <div className="mb-1">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{exp.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-lg font-semibold text-gray-600 mb-4">{exp.role}</p>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start text-gray-600 leading-relaxed">
                          <span className="mr-3 text-black font-bold">→</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="pt-8">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-px flex-grow bg-gray-200"></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">Internships</span>
                <div className="h-px flex-grow bg-gray-200"></div>
              </div>

              <div className="space-y-12">
                {INTERNSHIPS.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-gray-100 last:border-0 pb-12 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="mb-1">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{exp.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-base font-semibold text-gray-500 mb-4">{exp.role}</p>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start text-gray-600 text-sm leading-relaxed">
                          <span className="mr-3 text-gray-400 font-bold">→</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
