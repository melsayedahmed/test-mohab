import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-floatReverse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-6 animate-fadeIn">
              <span className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-medium animate-pulse">
                Where Strategy Meets Code
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Mohab Mohammed
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 space-y-2">
              <p className="animate-slideInLeft">Project & Product Manager</p>
               <p className="relative text-base sm:text-lg md:text-xl animate-gradient-text font-semibold animate-glow">
                I help startups build fast, scalable web applications using modern tech.
              </p>

            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn animation-delay-600">
              I'm a Project Manager, Frontend Developer, and Frontend Instructor with a
              strong foundation in software development and a passion for building
              high-quality digital experiences.
            </p>
            
           
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 animate-fadeIn animation-delay-800">
              <button
                onClick={() => navigate('/projects')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1-tbbcNS-zPfE1mwUQRkSG7RoQQl85uLQ"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-full font-medium text-sm sm:text-base hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Download CV
              </a>
            </div>

            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 animate-fadeIn animation-delay-1000">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </a>
              <a
                href="mailto:mohab@functo.com"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center absolute bottom-4 sm:bottom-6">
  <button
    onClick={() => scrollToSection('about')}
    className="animate-bounce p-2"
  >
    <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-400" />
  </button>
</div>

    </section>
  );
}
