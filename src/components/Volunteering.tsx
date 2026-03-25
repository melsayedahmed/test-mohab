import { useEffect, useRef, useState } from 'react';

export default function Volunteering() {
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

  const volunteering = [
    {
      logo: 'https://thumbs2.imgbox.com/f8/5c/LwMb1Spn_t.jpeg',
      role: 'Speaker Web Development',
      organization: 'GDG Minia',
      dateRange: 'June 2024',
      description: 'Shared web development expertise and best practices with the community.',
    },
    {
      logo: 'https://thumbs2.imgbox.com/f7/6a/6tUYUcxX_t.jpeg',
      role: 'Speaker Web Development',
      organization: 'Nile University',
      dateRange: 'October 2023',
      description: 'Delivered comprehensive web development sessions to university students.',
    },
    {
      logo: 'https://thumbs2.imgbox.com/b8/35/lfJ8hLmX_t.jpeg',
      role: 'Head Frontend + Instructor ReactJS',
      organization: 'Dragons',
      dateRange: 'February 2023 – May 2023 (4 months)',
      description: 'Led advanced frontend team and taught ReactJS fundamentals and best practices.',
    },
    {
      logo: 'https://thumbs2.imgbox.com/51/0e/6GDxEdRg_t.jpeg',
      role: 'Head of Activities Group',
      organization: 'Cluster',
      dateRange: 'March 2021 – March 2023 (2 years)',
      description: 'This community is founded in Egyptian E-learning University Menoufia, Faculty of Computers and Information & Business administration',
    },
  ];

  return (
    <section
      id="volunteering"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900 dark:via-blue-900/20 relative overflow-hidden"
    >
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .volunteer-item {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .volunteer-item:nth-child(1) { animation-delay: 0.1s; }
        .volunteer-item:nth-child(2) { animation-delay: 0.2s; }
        .volunteer-item:nth-child(3) { animation-delay: 0.3s; }
        .volunteer-item:nth-child(4) { animation-delay: 0.4s; }

        .timeline-line {
          position: relative;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 60px;
          bottom: -100%;
          width: 2px;
          background: linear-gradient(180deg, rgba(0, 188, 212, 0.5) 0%, rgba(0, 188, 212, 0) 100%);
        }

        .timeline-line:last-child::before {
          display: none;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-300/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Volunteering & Community Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Contributing to communities and sharing knowledge
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {volunteering.map((item, index) => (
            <div
              key={index}
              className={`volunteer-item transition-all duration-500 transform ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } timeline-line mb-8`}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border-2 border-cyan-400 dark:border-cyan-500 relative z-10">
                    <img
                      src={item.logo}
                      alt={item.organization}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400/50 hover:shadow-lg dark:hover:shadow-cyan-400/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 rounded-full w-fit">
                      {item.dateRange}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
