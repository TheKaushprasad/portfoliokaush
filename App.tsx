
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import CaseStudyModal from './components/CaseStudyModal';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CaseStudy } from './types';

const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCaseStudy]);

  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main>
        <div className="animate-reveal">
          <Hero />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <About />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <Skills />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <Experience />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <Education />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <Projects />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <CaseStudies onSelect={setSelectedCaseStudy} />
        </div>
        <div className="reveal-on-scroll translate-y-10">
          <Testimonials />
        </div>
      </main>

      <Footer />

      {selectedCaseStudy && (
        <CaseStudyModal 
          study={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </div>
  );
};

export default App;
