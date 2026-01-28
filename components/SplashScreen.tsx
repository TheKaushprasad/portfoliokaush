
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const greetings = [
    { text: "Hello!", color: "text-white" },
    { text: "Namaste!", color: "gradient-text" },
    { text: "Namaskara!", color: "text-white" }
  ];

  useEffect(() => {
    if (step < greetings.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsExiting(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step, greetings.length, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative overflow-hidden h-24 md:h-32 flex items-center justify-center">
        {greetings.map((g, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 transform ${
              step === i 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h1 className={`text-6xl md:text-8xl font-black tracking-tighter ${g.color}`}>
              {g.text}
            </h1>
          </div>
        ))}
      </div>
      
      {/* Decorative pulse element */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${step < greetings.length ? 'opacity-20' : 'opacity-0'}`}>
        <div className="flex space-x-2">
          {greetings.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${step === i ? 'bg-white scale-150' : 'bg-gray-700 scale-100'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
