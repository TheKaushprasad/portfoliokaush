
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects & Proof of Work', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an internal anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-2' : 'bg-transparent border-b border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Scrolls to Top */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="text-2xl font-black text-gray-900 tracking-tighter hover:opacity-70 transition-opacity"
            >
              KP<span className="text-gray-400">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-gray-600 hover:text-black transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-black focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-scale origin-top">
          <div className="px-4 pt-4 pb-8 space-y-2 bg-white/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-5 text-lg font-bold text-gray-900 border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="block w-full text-center px-4 py-5 bg-black text-white text-lg font-black rounded-2xl hover:bg-gray-800 transition-all active:scale-95 shadow-xl"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
