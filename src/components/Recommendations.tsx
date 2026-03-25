import { Quote, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Recommendations() {
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

  const recommendations = [
    {
      name: 'Motaz Ramadan',
      title: 'Software Engineer | Co-Founder of Functo©',
      relationship: 'Worked together in the same team',
      text: 'I am honored to recommend Mohab Mohammed, the CEO of Functo and a highly accomplished Project Manager with whom I had the pleasure of working on several key projects. Throughout our collaboration, Mohab consistently demonstrated exceptional leadership, strategic thinking, and a deep understanding of both the technical and business aspects of project management. His ability to set clear goals, communicate effectively with cross-functional teams, and drive projects to successful completion was instrumental to our success. As the CEO of Functo, Mohab fostered a culture of innovation, collaboration, and excellence. His vision and dedication inspired the entire team to deliver high-quality results under tight deadlines while maintaining a strong focus on client satisfaction and continuous improvement. Mohab\'s unique blend of leadership, project management expertise, and business acumen make him an invaluable leader and a true asset to any organization.',
      image: 'MR',
    },
    {
      name: 'Mahmoud Morrsi',
      title: 'UI/UX - Visual Design Expert | Prototyping - User Research Specialist',
      relationship: 'Worked together in the same team',
      text: 'I am pleased to recommend Mohab Mohammed, a front-end developer with exceptional technical skills and a strong commitment to quality. Mohab has consistently demonstrated expertise in modern web technologies including React, Next.js, and TypeScript. His attention to detail and dedication to writing clean, maintainable code makes him a valuable asset to any development team. Beyond his technical abilities, Mohab is an excellent communicator and collaborator who brings positive energy to every project.',
      image: 'MM',
    },
  ];

  return (
    <section
      id="recommendations"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-900/5 dark:to-cyan-900/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            What colleagues say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4 sm:gap-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      {rec.image}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {rec.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 line-clamp-1">
                        {rec.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {rec.relationship}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600/20 dark:text-cyan-400/20 group-hover:scale-110 transition-transform flex-shrink-0" />
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1 mb-6">
                  {rec.text}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">View on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 px-4 sm:px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Linkedin className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <a
              href="https://www.linkedin.com/in/mohab-mohammed-pm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-blue-600 dark:text-cyan-400 font-medium hover:underline text-center"
            >
              View all recommendations on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
