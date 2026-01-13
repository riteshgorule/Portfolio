import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   if (!showLoader) {
  //     const handleScroll = () => {
  //       const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
  //       const current = sections.find(section => {
  //         const element = document.getElementById(section);
  //         if (element) {
  //           const rect = element.getBoundingClientRect();
  //           return rect.top <= 100 && rect.bottom >= 100;
  //         }
  //         return false;
  //       });
  //       if (current) setActiveSection(current);
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [showLoader]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if (showLoader) {
  //   return <Loader onComplete={() => setShowLoader(false)} />;
  // }

  return (
    <div className="min-h-screen bg-retro-dark text-retro-cream overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;