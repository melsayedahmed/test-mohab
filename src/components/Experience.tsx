import { Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
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

  const experiences = [
    {
      type: 'work',
      title: 'Project Manager',
      company: 'Deal CRM',
      period: 'November 2024 - Present',
      location: 'Cairo, Egypt · Hybrid',
      description: [
        'Oversee end-to-end lifecycle of project development',
        'Managing cross-functional teams for timely delivery',
        'Planning and executing high-quality CRM solutions',
        'Implementing effective project management methodologies',
      ],
    },
    {
      type: 'work',
      title: 'CEO & Founder',
      company: 'Functo Software House',
      period: 'March 2023 - Present',
      location: 'Egypt · Remote',
      description: [
        'Leading the company by managing projects and coordinating teams',
        'Delivering tailored IT solutions including web and mobile apps',
        'Managing custom UI/UX designs and frontend/backend development',
        'Driving innovation and scalable technical solutions',
      ],
    },
    {
      type: 'work',
      title: 'Project Manager',
      company: 'Functo Software House',
      period: 'November 2024 - Present',
      location: 'Egypt · Part-time',
      description: [
        'Overseeing project development lifecycle',
        'Collaborating with stakeholders to align business goals',
        'Managing both frontend and backend development processes',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Functo Software House',
      period: 'March 2023 - May 2025',
      location: 'Egypt · Part-time',
      description: [
        'Developing modern web applications using React and Next.js',
        'Creating responsive designs with Tailwind CSS',
        'Implementing best practices for code quality',
      ],
    },
    {
      type: 'work',
      title: 'Course Instructor',
      company: 'Mag Camp',
      period: 'November 2024 - Present',
      location: 'Egypt · Remote',
      description: [
        'Teaching modern web development technologies',
        'Mentoring students through hands-on projects',
        'Providing feedback and code reviews',
        'Designing structured lessons for different skill levels',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Mentor',
      company: 'Mag Camp',
      period: 'February 2023 - November 2024',
      location: 'Egypt · Part-time',
      description: [
        'Guiding aspiring developers with detailed feedback',
        'Reviewing and improving code quality',
        'Sharing industry insights and career advice',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'Minufiya University',
      period: 'January 2018 - July 2023',
      location: 'Information Technology',
      description: [],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-900/5 dark:to-blue-900/5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0
                  ? 'opacity-0 -translate-x-10'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-16 pl-20' : 'md:pr-16 pl-20 md:pl-0'
                  }`}
                >
                  <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="text-blue-600 dark:text-cyan-400 font-semibold mb-1">
                      {exp.company}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {exp.period}
                    </div>
                    <div className="text-gray-500 dark:text-gray-500 text-sm mb-3">
                      {exp.location}
                    </div>
                    {exp.description.length > 0 && (
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-blue-600 dark:text-cyan-400 mr-2">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
