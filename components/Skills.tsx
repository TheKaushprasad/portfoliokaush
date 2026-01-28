
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((cat, i) => (
            <div key={i} className="p-8 bg-[#fafafa] rounded-2xl border border-gray-100 card-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-gray-200 text-sm font-medium text-gray-600 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
