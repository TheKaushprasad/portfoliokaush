
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { RefreshCw, BrainCircuit } from 'lucide-react';

const About: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateIllustration = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Create a minimalist, black-and-white, cartoon-style illustration of a fictional young man. 
      Style: Clean line-art, Flat, modern, editorial illustration, No colors (pure black and white), Slightly cartoonish but professional (portfolio-friendly), Soft rounded edges, confident posture. 
      Appearance: Short hair, Casual modern outfit (t-shirt or hoodie), Friendly, thoughtful expression, Standing or half-body portrait. 
      Mood: Calm, intelligent, and approachable. White background. 
      Do NOT make it realistic. Do NOT resemble any real person. Do NOT include text.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64EncodeString}`);
        }
      }
    } catch (error) {
      console.error("Failed to generate illustration:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateIllustration();
  }, []);

  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: AI Generated Illustration */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-100 blur-[100px] rounded-full z-0 opacity-50"></div>
            
            <div className="relative z-10 w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-50 aspect-square shadow-2xl border border-gray-100 group">
                {isLoading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gray-50">
                    <div className="w-12 h-12 border-4 border-black/10 border-t-black rounded-full animate-spin"></div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] animate-pulse">Generating Persona...</p>
                  </div>
                ) : imageUrl ? (
                  <>
                    <img 
                      src={imageUrl} 
                      alt="AI Generated Persona Illustration" 
                      className="w-full h-full object-cover animate-fade-slow"
                    />
                    <button 
                      onClick={generateIllustration}
                      className="absolute bottom-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
                      title="Regenerate Illustration"
                    >
                      <RefreshCw className="w-4 h-4 text-gray-600" />
                    </button>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <BrainCircuit className="w-12 h-12 text-gray-300" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Narrative Content */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Profile Overview</p>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                About <span className="gradient-text">Kaushal</span>
              </h2>
              <div className="w-20 h-1.5 bg-black rounded-full"></div>
            </div>
            
            <div className="prose prose-xl text-gray-600 space-y-8">
              <p className="text-2xl font-semibold text-gray-900 leading-snug">
                I’m a product-first thinker from India, working at the intersection of users, data, and technology.
              </p>
              <p className="leading-relaxed">
                Over the last few years, I’ve built and scaled products across HealthTech, AI-powered SaaS, employee platforms, and PM communities. I've owned everything from problem discovery and PRDs to launch, analytics, and iteration.
              </p>
              <p className="leading-relaxed">
                I thrive in 0→1 environments where I can collaborate closely with engineering and design to ship products that move real metrics—not just features.
              </p>
              <p className="leading-relaxed font-medium text-gray-800">
                Currently, I’m specializing in AI Product Management, focusing on how LLMs and RAG systems can revolutionize user experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
