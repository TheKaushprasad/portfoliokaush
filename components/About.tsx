
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Profile Overview</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              About <span className="gradient-text">Kaushal</span>
            </h2>
            <div className="w-20 h-1.5 bg-black rounded-full"></div>
          </div>
          
          {/* Narrative Content */}
          <div className="prose prose-xl text-gray-600 space-y-8 max-w-none">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              I’m a product-first thinker from India, working at the intersection of users, data, and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <div className="space-y-6">
                <p className="leading-relaxed">
                  Over the last few years, I’ve built and scaled products across HealthTech, AI-powered SaaS, employee platforms, and PM communities. I've owned everything from problem discovery and PRDs to launch, analytics, and iteration.
                </p>
                <p className="leading-relaxed">
                  I thrive in 0→1 environments where I can collaborate closely with engineering and design to ship products that move real metrics—not just features.
                </p>
              </div>
              <div className="space-y-6">
                <p className="leading-relaxed font-medium text-gray-800">
                  Currently, I’m specializing in AI Product Management, focusing on how LLMs and RAG systems can revolutionize user experiences.
                </p>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <p className="text-sm italic text-gray-500 mb-0">
                    "My philosophy is simple: identify the core user friction, validate with data, and ship high-quality solutions that balance business needs with technical feasibility."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
