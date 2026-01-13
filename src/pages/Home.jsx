import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket } from 'lucide-react';

export default function Home({ scrollToSection }) {
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
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React',, 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Supabase', 'Vercel'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Responsive Design', 'Animations'] }
  ];

  return (
    <>
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
            <a href="#" className="text-retro-cream hover:text-retro-orange transition-colors transform hover:scale-105 p-2 sm:p-3 border-2 border-retro-cream hover:border-retro-orange">
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
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-retro-cream/90 text-base sm:text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. Skilled in integrating machine learning models into scalable web solutions and delivering intuitive user experiences.
              </p>
              <p className="text-retro-cream/90 text-base sm:text-lg leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring every project not only meets requirements but exceeds expectations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-retro-orange">
                  <Code2 size={20} className="flex-shrink-0" />
                  <span className="text-retro-cream uppercase tracking-wider font-retro text-xs sm:text-sm">Clean Code</span>
                </div>
                <div className="flex items-center gap-2 text-retro-yellow">
                  <Palette size={20} className="flex-shrink-0" />
                  <span className="text-retro-cream uppercase tracking-wider font-retro text-xs sm:text-sm">Beautiful Design</span>
                </div>
                <div className="flex items-center gap-2 text-retro-pink">
                  <Rocket size={20} className="flex-shrink-0" />
                  <span className="text-retro-cream uppercase tracking-wider font-retro text-xs sm:text-sm">Fast Performance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-retro-orange to-retro-pink border-4 sm:border-8 border-retro-cream flex items-center justify-center shadow-retro-heavy">
                <div className="text-center p-4 sm:p-8">
                  <div className="text-5xl sm:text-7xl font-bold text-retro-cream mb-2 sm:mb-4 font-retro retro-text-shadow">1+</div>
                  <div className="text-base sm:text-xl text-retro-cream uppercase tracking-wider font-retro">Years Experience</div>
                  <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-4xl font-bold text-retro-cream font-retro retro-text-shadow">6+</div>
                      <div className="text-xs sm:text-sm text-retro-cream/80 uppercase tracking-wider font-retro">Projects</div>
                    </div>
                    {/* <div>
                      <div className="text-2xl sm:text-4xl font-bold text-retro-cream font-retro retro-text-shadow">30+</div>
                      <div className="text-xs sm:text-sm text-retro-cream/80 uppercase tracking-wider font-retro">Clients</div>
                    </div> */}
                  </div>
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

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-retro-dark border-t-4 sm:border-t-8 border-retro-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-retro tracking-[0.05em] sm:tracking-[0.3em] break-words leading-tight">
            <span className="text-retro-orange retro-text-shadow">
              LET'S WORK TOGETHER
            </span>
          </h2>
          <p className="text-retro-cream text-sm sm:text-lg mb-8 sm:mb-12 tracking-wide sm:tracking-wider">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshgorule9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-retro-orange hover:bg-retro-yellow text-retro-dark font-bold uppercase tracking-wider font-retro text-sm sm:text-base border-4 border-retro-dark shadow-none hover:shadow-[6px_6px_0_#000] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-gorule-830375326/"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-4 border-retro-cream text-retro-cream hover:bg-retro-cream hover:text-retro-dark font-bold uppercase tracking-wider font-retro text-sm sm:text-base shadow-none hover:shadow-[6px_6px_0_#000] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-brown border-t-4 sm:border-t-8 border-retro-orange py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-retro-cream/70">
          <p className="uppercase tracking-wider font-retro text-xs sm:text-base">&copy; 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}