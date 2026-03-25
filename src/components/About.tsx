import { Award, Users, Briefcase, Code } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Circle } from "lucide-react";


export default function About() {
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

  const stats = [
    { icon: Briefcase, value: '4+', label: 'Years Experience', color: 'blue' },
    { icon: Code, value: '50+', label: 'Projects Completed', color: 'cyan' },
    { icon: Users, value: '200+', label: 'Students Taught', color: 'blue' },
    { icon: Award, value: '10+', label: 'Certifications', color: 'cyan' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            Passionate about technology, leadership, and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center mb-16">
          <div
  className={`transition-all duration-1000 delay-200 transform ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
  } col-span-3 md:col-span-1 flex justify-center`}
>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://images2.imgbox.com/64/5d/aN3SjWKS_o.jpg"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        <div
  className={`space-y-6 transition-all duration-1000 delay-400 transform ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
  } col-span-1 md:col-span-2`}
>
  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3">
    <Circle className="text-blue-500 w-4 h-4 flex-shrink-0 mt-1 animate-glow" strokeWidth={2} />
    <span>
      I lead end-to-end project lifecycles, from planning and execution to delivery,
      ensuring seamless collaboration between cross-functional teams. I focus on delivering
      scalable CRM and web-based solutions tailored to client needs, while aligning business
      goals with technical execution.
    </span>
  </p>

  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3">
    <Circle className="text-blue-500 w-4 h-4 flex-shrink-0 mt-1 animate-glow" strokeWidth={2} />
    <span>
      As a Frontend Developer, I specialize in creating modern, responsive web applications
      using technologies like HTML, CSS, JavaScript, Tailwind, and React. I've developed 
      multiple projects for various clients and consistently ensure that all deliverables 
      meet high performance and usability standards.
    </span>
  </p>

  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3">
    <Circle className="text-blue-500 w-4 h-4 flex-shrink-0 mt-1 animate-glow" strokeWidth={2} />
    <span>
      In addition to my technical work, I’m also a Frontend Instructor — helping others 
      grow their skills and confidence in the software field through structured learning 
      and hands-on experience. I deliver courses and workshops that help beginners kickstart 
      their journey in web development and build a strong foundation for their tech careers.
    </span>
  </p>

  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium flex items-start gap-3">
    <Circle className="text-blue-500 w-4 h-4 flex-shrink-0 mt-1 animate-glow" strokeWidth={2} />
    <span>
      I bring strong problem-solving skills, clear communication, and a mindset focused on 
      continuous improvement and innovation.
    </span>
  </p>
</div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      stat.color === 'blue'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-cyan-600 dark:text-cyan-400'
                    }`}
                  />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
