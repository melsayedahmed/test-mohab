import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight, Heart, Youtube  } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Training & Mentorship', id: 'packages' },
    { label: 'Freelance Projects', id: 'packages' },
    { label: 'Web Development', id: 'projects' },
    { label: 'Consulting', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/melsayedahmed', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohab-mohammed-pm', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black dark:from-gray-950 dark:via-black dark:to-black overflow-hidden"
    >
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 188, 212, 0.2),
                        inset 0 0 20px rgba(0, 188, 212, 0.05);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 188, 212, 0.4),
                        inset 0 0 30px rgba(0, 188, 212, 0.1);
          }
        }

        @keyframes line-grow {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-item {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .footer-item:nth-child(1) { animation-delay: 0.1s; }
        .footer-item:nth-child(2) { animation-delay: 0.2s; }
        .footer-item:nth-child(3) { animation-delay: 0.3s; }
        .footer-item:nth-child(4) { animation-delay: 0.4s; }

        .footer-link {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, rgb(0, 188, 212), rgb(6, 182, 212));
          transition: width 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .social-icon {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(6, 182, 212, 0.02) 100%);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .social-icon:hover {
          border-color: rgba(0, 188, 212, 0.8);
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%);
          box-shadow: 0 0 30px rgba(0, 188, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-6px);
        }

        .divider-line {
          position: relative;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.3), transparent);
          overflow: hidden;
        }

        .divider-line::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.8), transparent);
          animation: line-grow 2s ease-in-out infinite;
        }

        .back-to-top {
          position: relative;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(0, 188, 212, 0.4);
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          backdrop-filter: blur(10px);
        }

        .back-to-top:hover {
          border-color: rgba(0, 188, 212, 1);
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%);
          box-shadow: 0 0 30px rgba(0, 188, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0) 70%);
          filter: blur(40px);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb w-[500px] h-[500px] -top-48 -left-48 animate-pulse"></div>
        <div className="glow-orb w-[400px] h-[400px] -bottom-32 -right-32 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16 lg:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
gap-8 lg:gap-12 mb-12 
text-center md:text-left
justify-items-center md:justify-items-start">
            <div className="footer-item">
              <h3 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Frontend Developer & Project Manager passionate about building elegant digital solutions and mentoring aspiring developers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Egypt</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+20 1146198234</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                  <a href="mailto:contact@example.com" className="footer-link text-gray-400 text-sm hover:text-cyan-400">
                    mohab.moh2020@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-item">
              <h3 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="footer-link text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 font-medium"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Connect
              </h3>
<div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon text-gray-400 hover:text-cyan-400"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
             <a
  href="https://www.youtube.com/@FUNCTO"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/50 hover:border-red-500 text-red-500 hover:text-white rounded-lg transition-all duration-300 hover:bg-red-500/10 text-sm font-medium group"
>
  <Youtube size={16} />Subscribe on YouTube
  <ArrowUpRight
    size={16}
    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
  />
</a>
            </div>
          </div>

          <div className="divider-line my-8 lg:my-12"></div>

<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-center md:text-left">
          <div className="footer-item text-center md:text-center">
  <p className="text-gray-500 text-sm flex flex-wrap items-center justify-center gap-1">
    Made by Mohab Mohammed • © 2026 All rights reserved
  </p>
</div>



            <div className="flex justify-center md:justify-end">
  <button
    onClick={scrollToTop}
    className="back-to-top"
    aria-label="Back to top"
  >
    <ArrowUpRight
      size={20}
      className="text-cyan-400 transform -rotate-90"
    />
  </button>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}
