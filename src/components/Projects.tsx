import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900 dark:via-blue-900/20 relative overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 188, 212, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0);
          }
        }

        @keyframes shimmer-overlay {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes glow-border {
          0%, 100% {
            border-color: rgba(0, 188, 212, 0.2);
            box-shadow: 0 0 20px rgba(0, 188, 212, 0.1);
          }
          50% {
            border-color: rgba(0, 188, 212, 0.4);
            box-shadow: 0 0 30px rgba(0, 188, 212, 0.15);
          }
        }

        .project-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 188, 212, 0.02) 100%);
          border: 1px solid rgba(0, 188, 212, 0.2);
          backdrop-filter: blur(8px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 188, 212, 0.08),
            transparent
          );
          background-size: 1000px 100%;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          z-index: 1;
        }

        .project-card:hover::before {
          animation: shimmer-overlay 2.5s infinite;
          opacity: 1;
        }

        .project-card:hover {
          border-color: rgba(0, 188, 212, 0.5);
          box-shadow: 0 20px 40px rgba(0, 188, 212, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 188, 212, 0.08) 100%);
          transform: translateY(-6px);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          background: #1a1a1a;
        }

        .project-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0, 188, 212, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 1;
        }

        .project-card:hover .project-image::after {
          opacity: 1;
        }

        .project-image img {
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.320, 1);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-card:hover .project-image img {
          transform: scale(1.12) rotateZ(0.5deg);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .external-button {
          animation: float 3s ease-in-out infinite;
        }

        .external-button:hover {
          animation: pulse-ring 1.5s infinite;
        }

        .skill-item {
          animation: float 3s ease-in-out infinite;
        }

        .skill-item:nth-child(2) {
          animation-delay: 0.2s;
        }

        .skill-item:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div
          className="absolute w-[300px] h-[300px] bg-cyan-300/10 dark:bg-cyan-400/5 rounded-full blur-2xl transition-all duration-300 pointer-events-none"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-cyan-600 dark:text-cyan-400">
            <span className="text-sm font-semibold tracking-widest uppercase">portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Some of my recent work and achievements
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/project/${project.id}`}
                className="project-card rounded-2xl overflow-hidden h-full flex flex-col block"
              >
                <div className="project-image relative h-56">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="project-overlay">
                    <div className="external-button">
                      <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white/60 dark:from-gray-900/50 to-gray-100/60 dark:to-gray-950/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 flex-1 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 pt-4 border-t border-cyan-400/30 dark:border-cyan-400/20 flex items-center justify-between">
                    <span className="text-xs text-cyan-600 dark:text-cyan-400/60 uppercase tracking-widest font-medium">
                      View Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400/60 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}