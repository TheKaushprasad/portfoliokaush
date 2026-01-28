
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';

const About: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCartoonAvatar = async () => {
    setIsGenerating(true);
    try {
      // Initialize the AI client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      // Request a high-quality cartoon generation
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A high-end, professional 3D cartoon illustration of a 26-year-old Indian man named Kaushal. He has a friendly expression, modern hairstyle, slight stubble, and is wearing a stylish blue denim jacket over a green t-shirt. Pixar-style, cinematic lighting, vibrant colors, clean blurred background, masterpiece quality.',
            },
          ],
        },
      });

      // Extract the image from the response parts
      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        setAvatarUrl(`data:image/png;base64,${part.inlineData.data}`);
      } else {
        throw new Error("No image data found in response");
      }
    } catch (error) {
      console.error("Failed to generate avatar:", error);
      // Fallback to the provided static portrait if generation fails
      setAvatarUrl('./portrait.png');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    // Generate the cartoon persona on first load
    generateCartoonAvatar();
  }, []);

  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Portrait with AI Generation Logic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-100/40 blur-[100px] rounded-full animate-pulse-glow z-0"></div>
            
            <div className="relative z-10 w-full max-w-[420px] animate-float">
              <div className="portrait-frame group bg-white">
                <div className="absolute -inset-2 border border-gray-100 rounded-[3rem] -z-10 opacity-50 group-hover:inset-0 transition-all duration-500"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gray-50 aspect-[4/5] shadow-inner flex items-center justify-center">
                  {isGenerating ? (
                    <div className="flex flex-col items-center space-y-3 p-8 text-center">
                      <div className="relative">
                        <Loader2 className="w-12 h-12 text-black animate-spin" />
                        <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-500 animate-pulse" />
                      </div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] animate-pulse">Designing Persona...</p>
                    </div>
                  ) : (
                    <img 
                      src={avatarUrl || './portrait.png'} 
                      alt="Kaushal Prasad - AI Generated Cartoon" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => {
                         e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=1000&q=80";
                      }}
                    />
                  )}
                  
                  {/* Regeneration Action */}
                  {!isGenerating && (
                    <button 
                      onClick={generateCartoonAvatar}
                      className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white transform hover:rotate-180"
                      title="Regenerate Cartoon Kaushal"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-reveal" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-xs font-black text-gray-900 uppercase tracking-widest whitespace-nowrap">AI Persona Active</span>
                  </div>
                </div>
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
