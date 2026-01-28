
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mohammed Fahad F S",
      role: "Product Manager",
      text: "Kaushal has a profound understanding of product development and scaling. His ability to quickly grasp concepts and consistently deliver makes him one of the best collaborators I’ve worked with."
    },
    {
      name: "Antony Wenisch",
      role: "Customer Success Manager",
      text: "Kaushal brings a rare mix of technical expertise and strategic thinking. His dedication, collaborative mindset, and execution excellence make him a standout product professional."
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">Wall of Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-10 bg-white/5 rounded-3xl border border-white/10">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="text-lg font-bold text-white">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
