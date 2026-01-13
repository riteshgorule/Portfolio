import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['about', 'projects', 'skills', 'contact'];

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-retro-brown/95 backdrop-blur-sm border-b-4 border-retro-orange z-50 shadow-retro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="text-base sm:text-4xl font-bold text-retro-orange tracking-[0.1em] sm:tracking-[0.3em] font-retro">
            {"<Ritesh/>"}
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                className={`uppercase tracking-wider transition-colors hover:text-retro-orange font-retro text-sm ${
                  activeSection === section ? 'text-retro-orange' : 'text-retro-cream/70'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-retro-orange"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-retro-brown border-t-4 border-retro-orange">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                className={`block w-full text-left px-3 py-3 uppercase tracking-wider transition-colors hover:text-retro-orange font-retro text-sm ${
                  activeSection === section ? 'text-retro-orange' : 'text-retro-cream/70'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}