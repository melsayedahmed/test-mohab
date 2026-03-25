import { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Code,
  Palette,
  Grid3x3,
  Zap,
  RotateCcw,
  Users,
  MessageSquare,
  ListChecks,
  DollarSign,
  CheckCircle,
  GitBranch,
  BarChart3,
  Lightbulb,
  Bug,
  Atom,
  Layers,
  Braces,
  LayoutTemplate,
} from 'lucide-react';

export default function Skills() {
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

  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, typeof Code> = {
      'React.js': Atom,
      'Next.js': Layers,
      'JavaScript': Braces,
      'TypeScript': Braces,
      'HTML5 & CSS3': LayoutTemplate,
      'Tailwind CSS': Palette,
      'Bootstrap': Grid3x3,
      'Sass': Palette,
      'Agile & Scrum': Zap,
      'Product Lifecycle': RotateCcw,
      'Team Leadership': Users,
      'Client Communication': MessageSquare,
      'Requirements Gathering': ListChecks,
      'Budgeting': DollarSign,
      'ClickUp': CheckCircle,
      'Git & GitHub': GitBranch,
      'Business Analysis': BarChart3,
      'Problem Solving': Lightbulb,
      'Debugging': Bug,
    };
    return iconMap[skillName] || Code;
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '⚛️',
      skills: [
        'React.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Sass',
      ],
    },
    {
      title: 'Project Management',
      icon: '📊',
      skills: [
        'Agile & Scrum',
        'Product Lifecycle',
        'Team Leadership',
        'Client Communication',
        'Requirements Gathering',
        'Budgeting',
        'ClickUp',
        'monday.com',
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        'Git & GitHub',
        'Business Analysis',
        'Problem Solving',
        'Debugging',
      ],
    },
  ];

  const additionalSkills = [
    'PHP',
    'SQL',
    'Java',
    'UI/UX Design',
    'Conflict Resolution',
    'Performance Evaluation',
    'Resource Allocation',
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900 dark:via-blue-900/20 relative overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 188, 212, 0.3),
                        inset 0 0 20px rgba(0, 188, 212, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 188, 212, 0.5),
                        inset 0 0 30px rgba(0, 188, 212, 0.2);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes line-grow {
          from { width: 0; }
          to { width: 100%; }
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

        .skill-item:nth-child(4) {
          animation-delay: 0.6s;
        }

        .skill-item:nth-child(5) {
          animation-delay: 0.8s;
        }

        .skill-item:nth-child(6) {
          animation-delay: 1s;
        }

        .glow-line {
          position: relative;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 188, 212, 0.5),
            transparent
          );
          overflow: hidden;
          margin-top: 8px;
        }

        .glow-line::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 188, 212, 1),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .skill-tag:hover .glow-line::before {
          animation-duration: 1.5s;
        }

        .category-card {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(0, 188, 212, 0.05) 100%
          );
          border: 1px solid rgba(0, 188, 212, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .category-card:hover {
          border-color: rgba(0, 188, 212, 0.5);
          box-shadow: 0 8px 32px rgba(0, 188, 212, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(0, 188, 212, 0.1) 100%
          );
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
            <Sparkles size={24} />
            <span className="text-sm font-semibold tracking-widest uppercase">expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="category-card rounded-2xl p-8 h-full hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = getSkillIcon(skill);
                    return (
                      <div
                        key={skillIndex}
                        className="skill-tag group cursor-default"
                        style={{
                          transitionDelay: `${categoryIndex * 150 + skillIndex * 50}ms`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-cyan-500 dark:text-cyan-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-medium">
                            {skill}
                          </span>
                        </div>
                        <div className="glow-line"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-6">
              Additional Skills
            </h3>
            <div className="inline-flex flex-wrap justify-center gap-3 max-w-4xl">
              {additionalSkills.map((tag, index) => (
                <div
                  key={index}
                  className={`skill-item transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 30}ms` }}
                >
                  <div className="px-4 py-2 rounded-full border border-cyan-400/50 dark:border-cyan-400/30 text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-600 dark:hover:border-cyan-400/60 hover:bg-cyan-100 dark:hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm font-medium">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
