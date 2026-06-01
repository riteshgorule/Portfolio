import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket, ArrowRight, Copy, Check } from 'lucide-react';

export default function Home({ scrollToSection }) {
  const [copied, setCopied] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState(0);
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
      link: 'https://dhansathi.vercel.app/',
      image: '/projects/p4.png'
    },
    {
      title: 'Raisora',
      description: 'Social Awareness Portal to connect volunteers with local community service opportunities, promoting social awareness campaigns with dynamic content management',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://raisora.vercel.app/',
      image: '/projects/p3.png'
    },
    {
      title: 'AI-generated-text-classification',
      description: 'Web application that classifies AI-generated text using machine learning algorithms like logistic regression.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'React'],
      link: 'https://ai-generated-text-classification.vercel.app/',
      image: '/projects/p1.png'
    },
    {
      title: 'AI-speech-transcription',
      description: 'A modern, AI-powered speech-to-text transcription platform with multilingual translation and intelligent text enhancement capabilities.',
      technologies: ['Python', 'Flask', 'React', 'Tailwind', 'Gemini API', 'Whisper API'],
      link: 'https://ai-speech-transcription.vercel.app/',
      image: '/projects/p2.png'
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
      <section id="projects" className="py-16 sm:py-24 bg-retro-dark border-t-4 sm:border-t-8 border-retro-yellow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-24 font-retro tracking-[0.05em] sm:tracking-[0.2em] break-words leading-tight">
            <span className="text-retro-yellow retro-text-shadow">
              FEATURED PROJECTS
            </span>
          </h2>

          <div className="space-y-24 sm:space-y-32">
            {projects.map((project, index) => {
              // Flips the flex layout so Image is on Right, Content on Left (Project 02, 04)
              const isReversed = index % 2 === 1;

              // Aligns text to the right when Content is on the Right side (Project 01, 03)
              const alignRight = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >

                  {/* Image Placeholder Side */}
                  <div className="w-full lg:w-7/12 relative group z-0">
                    {/* Decorative background block */}
                    <div className={`absolute inset-0 border-4 border-retro-cream translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8 ${isReversed ? 'bg-retro-pink' : 'bg-retro-orange'}`}></div>

                    {/* Main Image Container */}
                    <div className="relative aspect-[16/9] bg-retro-brown border-4 border-retro-cream flex items-center justify-center overflow-hidden z-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-6/12 flex flex-col z-10 ${alignRight ? 'lg:items-end lg:-ml-12 items-start' : 'lg:items-start lg:-mr-12 items-start'}`}>

                    <div className="inline-block px-3 py-1 mb-4 border-2 border-retro-yellow text-retro-yellow font-retro text-xs sm:text-sm uppercase tracking-widest bg-retro-yellow/10 backdrop-blur-sm">
                      Project 0{index + 1}
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-retro-cream font-retro tracking-wider uppercase break-words hover:text-retro-orange transition-colors retro-text-shadow text-left ${alignRight ? 'lg:text-right' : ''}`}>
                      {project.title}
                    </h3>

                    {/* Overlapping Description Box */}
                    <div className={`bg-retro-brown border-4 border-retro-orange p-5 sm:p-8 mb-6 sm:mb-8 shadow-[6px_6px_0_#FE4444] w-full relative group-hover:-translate-y-1 transition-transform duration-300 text-left ${alignRight ? 'lg:text-right' : ''}`}>
                      <p className="text-retro-cream/90 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className={`flex flex-wrap gap-2 sm:gap-3 mb-8 justify-start ${alignRight ? 'lg:justify-end' : ''}`}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-retro-dark text-retro-cream text-xs sm:text-sm border-2 border-retro-cream/50 uppercase tracking-wider font-retro hover:border-retro-yellow transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-retro-yellow hover:bg-retro-orange text-retro-dark font-bold uppercase tracking-wider font-retro text-sm sm:text-base border-4 border-retro-dark shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#FE4444] transition-all duration-200 transform hover:-translate-y-1"
                    >
                      View Project <ExternalLink size={18} />
                    </a>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 bg-gradient-to-b from-retro-dark to-retro-brown border-t-4 sm:border-t-8 border-retro-pink relative overflow-hidden">

        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 text-9xl font-retro text-retro-cream transform -rotate-12">{"{ }"}</div>
          <div className="absolute bottom-20 right-10 text-9xl font-retro text-retro-cream transform rotate-12">&lt;/&gt;</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-12 sm:mb-16 font-retro tracking-[0.1em] sm:tracking-[0.2em] break-words">
            <span className="text-retro-pink retro-text-shadow">
              SKILLS & TECH
            </span>
          </h2>

          {/* The Switcher / Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            {skills.map((skillGroup, index) => {
              const isActive = activeSkillTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSkillTab(index)}
                  className={`px-6 sm:px-8 py-3 sm:py-4 font-retro uppercase tracking-widest text-sm sm:text-base border-4 border-retro-dark transition-all duration-200 
                    ${isActive
                      ? 'bg-retro-pink text-retro-dark shadow-none translate-y-[4px] translate-x-[4px]'
                      : 'bg-retro-brown text-retro-cream hover:bg-retro-dark hover:text-retro-pink shadow-[4px_4px_0_#FDE047] hover:shadow-[6px_6px_0_#FDE047] hover:-translate-y-1'
                    }`}
                >
                  {skillGroup.category}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Display */}
          <div className="max-w-4xl mx-auto relative group">
            {/* Decorative offset border */}
            {/* <div className="absolute inset-0 bg-retro-yellow border-4 border-retro-dark translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6"></div> */}

            {/* Main content box */}
            <div className="relative bg-retro-dark border-4 border-retro-cream p-8 sm:p-12 z-10 min-h-[250px] flex flex-col justify-center">

              <div className="flex items-center gap-4 mb-8 border-b-4 border-retro-pink/30 pb-4">
                <div className="w-4 h-4 bg-green-500 animate-pulse"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-retro-cream uppercase tracking-wider font-retro">
                  {skills[activeSkillTab].category} Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {skills[activeSkillTab].items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-retro-brown border-2 border-retro-orange text-retro-cream font-retro text-sm sm:text-lg tracking-wide hover:bg-retro-orange hover:text-retro-dark transition-colors duration-300 cursor-default flex items-center gap-3"
                  >
                    <span className="text-retro-yellow font-bold text-xl leading-none opacity-70">#</span>
                    {skill}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="px-4 py-8 sm:px-8 sm:py-12 bg-[#2a0a0a]">
        {/* Large Rounded Card Container */}
        <div className="max-w-7xl mx-auto bg-[#FDF8E8] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 flex flex-col justify-between min-h-[500px] sm:min-h-[550px] relative overflow-hidden">

          {/* Header Row: Logo & CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 sm:mb-20">
            <div>
              {/* Simulating the "flomodia" serif logo style */}
              <h3 className="text-[#3E1C1C] text-3xl sm:text-4xl font-serif font-black italic tracking-tight">
                Ritesh.
              </h3>
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
              © {new Date().getFullYear()} Portfolio. Website made by Ritesh.
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