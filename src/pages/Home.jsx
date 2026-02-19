import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket, ArrowRight, Copy, Check } from 'lucide-react';

export default function Home({ scrollToSection }) {
  const [copied, setCopied] = useState(false);
  const email = "riteshgorule9@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: 'Dhansathi',
      description: 'Financial Empowerment Platform for Women in Rural Areas, offering financial literacy resources and help manage money, track expenses.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://dhansathi.vercel.app/'
    },
    {
      title: 'Raisora',
      description: 'Social Awareness Portal to connect volunteers with local community service opportunities, promoting social awareness campaigns with dynamic content management',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/riteshgorule/Raisora'
    },
    {
      title: 'AI-generated-text-classification',
      description: 'Web application that classifies AI-generated text using machine learning algorithms like logistic regression.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'React'],
      link: 'https://ai-generated-text-classification.vercel.app/'
    },
    {
      title: 'AI-speech-transcription',
      description: 'A modern, AI-powered speech-to-text transcription platform with multilingual translation and intelligent text enhancement capabilities.',
      technologies: ['Python', 'Flask', 'React', 'Tailwind', 'Gemini API', 'Whisper API'],
      link: 'https://ai-speech-transcription.vercel.app/'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Supabase', 'Vercel'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Responsive Design', 'Animations'] }
  ];

  return (
    <div className="bg-[#2a0a0a]"> {/* Dark wrapper for the whole page bottom compatibility */}
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-retro-sunset-pink via-retro-sunset-orange to-retro-sunset-purple">
        <div className="absolute inset-0 bg-retro-noise opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in font-retro tracking-[0.05em] sm:tracking-[0.2em] leading-tight">
            <span className="text-retro-cream retro-text-shadow break-words">
              CREATIVE
            </span>
            <br />
            <span className="text-retro-cream retro-text-shadow break-words">
              DEVELOPER
            </span>
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl text-retro-cream mb-8 max-w-3xl mx-auto animate-fade-in-delay tracking-wide sm:tracking-wider">
            CRAFTING DIGITAL EXPERIENCES SINCE '24
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-retro-orange hover:bg-retro-yellow text-retro-dark font-bold uppercase tracking-wider font-retro text-sm sm:text-base border-4 border-retro-dark shadow-none hover:shadow-[6px_6px_0_#000] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-4 border-retro-cream text-retro-cream hover:bg-retro-cream hover:text-retro-dark font-bold uppercase tracking-wider font-retro text-sm sm:text-base shadow-none hover:shadow-[6px_6px_0_#000] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              Get in Touch
            </button>
          </div>
          <div className="flex justify-center gap-3 sm:gap-6 mt-8 sm:mt-12 animate-fade-in-delay-3">
            <a href="https://github.com/riteshgorule" className="text-retro-cream hover:text-retro-orange transition-colors transform hover:scale-105 p-2 sm:p-3 border-2 border-retro-cream hover:border-retro-orange">
              <Github size={20} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/ritesh-gorule-830375326/" className="text-retro-cream hover:text-retro-orange transition-colors transform hover:scale-105 p-2 sm:p-3 border-2 border-retro-cream hover:border-retro-orange">
              <Linkedin size={20} className="sm:w-7 sm:h-7" />
            </a>
            <a href={`mailto:${email}`} className="text-retro-cream hover:text-retro-orange transition-colors transform hover:scale-105 p-2 sm:p-3 border-2 border-retro-cream hover:border-retro-orange">
              <Mail size={20} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-retro-brown border-t-4 sm:border-t-8 border-retro-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-16 font-retro tracking-[0.1em] sm:tracking-[0.3em] break-words">
            <span className="text-retro-orange retro-text-shadow">
              ABOUT ME
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE: Description & Stats */}
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-retro-cream/90 text-base sm:text-lg leading-relaxed">
                  I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. Skilled in integrating machine learning models into scalable web solutions and delivering intuitive user experiences.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-retro-orange/10 px-4 py-2 border-2 border-retro-orange text-retro-orange rounded-full">
                    <Code2 size={18} className="flex-shrink-0" />
                    <span className="text-retro-cream uppercase tracking-wider font-retro text-xs sm:text-sm">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2 bg-retro-yellow/10 px-4 py-2 border-2 border-retro-yellow text-retro-yellow rounded-full">
                    <Palette size={18} className="flex-shrink-0" />
                    <span className="text-retro-cream uppercase tracking-wider font-retro text-xs sm:text-sm">Beautiful Design</span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t-2 border-retro-orange/30">
                <div className="bg-retro-dark border-2 sm:border-4 border-retro-orange p-4 sm:p-6 shadow-[4px_4px_0_#FE4444] hover:shadow-[6px_6px_0_#FE4444] transition-all duration-200 hover:-translate-y-1">
                  <div className="text-3xl sm:text-5xl font-bold text-retro-cream mb-1 font-retro retro-text-shadow">1+</div>
                  <div className="text-xs sm:text-sm text-retro-orange uppercase tracking-widest font-bold">Years Exp.</div>
                </div>
                <div className="bg-retro-dark border-2 sm:border-4 border-retro-yellow p-4 sm:p-6 shadow-[4px_4px_0_#FDE047] hover:shadow-[6px_6px_0_#FDE047] transition-all duration-200 hover:-translate-y-1">
                  <div className="text-3xl sm:text-5xl font-bold text-retro-cream mb-1 font-retro retro-text-shadow">6+</div>
                  <div className="text-xs sm:text-sm text-retro-yellow uppercase tracking-widest font-bold">Projects</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Photo Placeholder */}
            <div className="relative flex justify-center mt-8 md:mt-0">
              <div className="w-full max-w-sm lg:max-w-md relative group">
                {/* Decorative background shadow/frame */}
                <div className="absolute inset-0 bg-retro-orange border-4 border-retro-dark translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-300"></div>
                
                {/* Main Photo Container */}
                <div className="aspect-[4/5] bg-retro-dark border-4 sm:border-8 border-retro-cream relative flex items-center justify-center transform group-hover:-rotate-2 transition-transform duration-300 z-10 overflow-hidden">
                  
                  {/* Dashed placeholder border inside */}
                  <div className="absolute inset-4 sm:inset-6 border-2 border-dashed border-retro-cream/30 flex items-center justify-center">
                    <div className="text-center px-4">
                      <span className="text-retro-cream/50 font-retro tracking-widest uppercase text-sm sm:text-base block mb-2">
                        Photo Placement
                      </span>
                      <span className="text-retro-cream/30 text-xs">
                        (Replace with &lt;img /&gt;)
                      </span>
                    </div>
                  </div>

                  {/* NOTE: When you're ready to add your image, delete the dashed div above and use something like this:
                    <img 
                      src="/your-photo.jpg" 
                      alt="Ritesh" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 bg-retro-dark border-t-4 sm:border-t-8 border-retro-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-16 font-retro tracking-[0.05em] sm:tracking-[0.3em] break-words leading-tight">
            <span className="text-retro-yellow retro-text-shadow">
              FEATURED PROJECTS
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-retro-brown border-4 border-retro-orange p-4 sm:p-8 hover:border-retro-yellow transition-all transform hover:scale-101 shadow-retro-heavy hover:shadow-retro-xl group"
              >
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-retro-orange group-hover:text-retro-yellow transition-colors font-retro tracking-wider uppercase break-words">
                  {project.title}
                </h3>
                <p className="text-retro-cream/80 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-retro-orange/20 text-retro-orange text-xs sm:text-sm border-2 border-retro-orange uppercase tracking-wider font-retro"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-retro-yellow hover:text-retro-orange transition-colors uppercase tracking-wider font-retro text-xs sm:text-sm font-bold"
                >
                  View Project <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 bg-gradient-to-b from-retro-dark to-retro-brown border-t-4 sm:border-t-8 border-retro-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-16 font-retro tracking-[0.1em] sm:tracking-[0.3em] break-words">
            <span className="text-retro-pink retro-text-shadow">
              SKILLS & TECH
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-retro-brown border-4 border-retro-pink p-4 sm:p-6 hover:border-retro-yellow transition-all transform hover:scale-101 shadow-retro-heavy"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-retro-orange uppercase tracking-wider font-retro">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-retro-cream/90 flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-2 h-2 bg-retro-yellow flex-shrink-0"></span>
                      <span className="break-words">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW CONTACT & FOOTER SECTION 
         Based on the "flomodia" inspiration image.
      */}
      <section id="contact" className="px-4 py-8 sm:px-8 sm:py-12 bg-[#2a0a0a]">
        {/* Large Rounded Card Container */}
        <div className="max-w-7xl mx-auto bg-[#FDF8E8] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 flex flex-col justify-between min-h-[500px] sm:min-h-[600px] relative overflow-hidden">
          
          {/* Header Row: Logo & CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 sm:mb-20">
            <div>
               {/* Simulating the "flomodia" serif logo style */}
               <h3 className="text-[#3E1C1C] text-3xl sm:text-4xl font-serif font-black italic tracking-tight">
                 Ritesh.
               </h3>
               <p className="text-[#3E1C1C] text-sm font-medium mt-1">Inspire, educate and build.</p>
            </div>

            <div className="flex flex-wrap gap-4">
               <a href="#" className="hidden sm:block text-[#3E1C1C] font-semibold hover:opacity-70 transition-opacity">Channels</a>
               <a href="#" className="hidden sm:block text-[#3E1C1C] font-semibold hover:opacity-70 transition-opacity">The Vision</a>
               <a 
                 href="https://www.linkedin.com/in/ritesh-gorule-830375326/"
                 className="bg-[#E53E3E] text-white px-6 py-2 rounded-full font-bold shadow-[0_4px_0_#9c2221] hover:shadow-[0_2px_0_#9c2221] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
               >
                 Work together?
               </a>
            </div>
          </div>

          {/* Main Content: Big Typography & Email Input */}
          <div className="w-full max-w-4xl z-10">
            <h2 className="text-[#3E1C1C] text-5xl sm:text-7xl md:text-8xl font-retro font-bold mb-8 leading-none tracking-tight">
              Let's Connect
            </h2>
            
            {/* Functional Email "Input" - Click to Copy */}
            <div className="relative group max-w-2xl">
              <div 
                onClick={handleCopyEmail}
                className="bg-[#3E1C1C] rounded-full p-2 pl-6 sm:pl-8 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <span className="text-[#FDF8E8]/50 text-xs uppercase tracking-widest font-bold mb-1">
                    {copied ? "Copied!" : "Drop me an email"}
                  </span>
                  <span className="text-[#FDF8E8] text-lg sm:text-2xl font-medium truncate pr-4">
                    {email}
                  </span>
                </div>
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${copied ? 'bg-green-600' : 'bg-[#5C2B2B] group-hover:bg-[#7a3939]'}`}>
                  {copied ? <Check className="text-white" /> : <ArrowRight className="text-white w-6 h-6" />}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Row (Inside the card) */}
          <div className="mt-16 sm:mt-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-[#3E1C1C]/10">
            <p className="text-[#3E1C1C]/70 font-medium text-sm">
               © 2025 Portfolio. Website made by Ritesh.
            </p>
            
            <div className="flex gap-4">
               <a href="https://github.com/riteshgorule" className="bg-white p-3 rounded-full border-2 border-[#3E1C1C]/10 hover:border-[#3E1C1C] hover:scale-110 transition-all text-[#3E1C1C]">
                 <Github size={20} />
               </a>
               <a href="https://www.linkedin.com/in/ritesh-gorule-830375326/" className="bg-white p-3 rounded-full border-2 border-[#3E1C1C]/10 hover:border-[#3E1C1C] hover:scale-110 transition-all text-[#3E1C1C]">
                 <Linkedin size={20} />
               </a>
               <a href={`mailto:${email}`} className="bg-white p-3 rounded-full border-2 border-[#3E1C1C]/10 hover:border-[#3E1C1C] hover:scale-110 transition-all text-[#3E1C1C]">
                 <Mail size={20} />
               </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}