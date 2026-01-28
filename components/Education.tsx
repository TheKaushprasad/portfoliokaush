
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Degrees */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Academic Path</p>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Education</h2>
              <div className="w-12 h-1 bg-black rounded-full"></div>
            </div>

            <div className="space-y-12">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="group relative pl-10 border-l-2 border-gray-100 last:border-0 pb-12 last:pb-0">
                  <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white border-2 border-gray-200 group-hover:border-black transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-black transition-colors"></div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-flex items-center text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-md">
                      <Calendar className="w-3 h-3 mr-2" />
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{edu.degree}</h3>
                  <p className="text-lg font-bold text-gray-500 mb-4">{edu.school}</p>
                  
                  <div className="flex items-center text-sm font-semibold text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 h-full">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-1">Certifications</h2>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Industry Recognized</p>
                </div>
                <Award className="w-10 h-10 text-gray-200" />
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-gray-900 text-sm leading-tight mb-1 group-hover:text-black transition-colors">{cert.name}</h4>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">{cert.issuer}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-white/50 rounded-2xl border border-dashed border-gray-200 text-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Continuous Learning</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
