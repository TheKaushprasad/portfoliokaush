
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Proof of Work</h2>
            <p className="text-lg text-gray-600">Building products, tools, and communities outside the day job.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group p-8 bg-white border border-gray-100 rounded-3xl card-shadow flex flex-col h-full hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-black transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-3 mb-8">
                {project.impact.map((imp, j) => (
                  <div key={j} className="flex items-center text-sm font-medium text-gray-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                    {imp}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;