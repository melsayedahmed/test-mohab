import { ExternalLink, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLogo(null);
      }
    };

    if (selectedLogo) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedLogo]);

  const certifications = [
    {
      logo: 'https://images2.imgbox.com/a5/e6/57v4LRCN_o.png',
      title: 'Project Management & Product Management',
      organization: 'Sprints',
      issueDate: 'September 2025',
      credentialId: 'SPR-3707CT',
      skills: ['إدارة المنتجات', 'Project Management', 'متطلبات المنتج', 'إدارة المشروعات', 'Scrum', 'Agile', 'إدارة دورة حياة المنتج'],
      credentialUrl: 'https://drive.google.com/file/d/1LKis7eU0HremlmqLEhUKk4opGcPYYCZe/view?usp=sharing',
    },
    {
      logo: 'https://thumbs2.imgbox.com/50/65/cPXyFVKX_t.png',
      title: 'React.js',
      organization: 'MaharaTech - ITIMooca',
      issueDate: 'March 2023',
      credentialId: 'XnBrvwYwab',
      skills: ['React.js','Type Script'],
      credentialUrl: 'https://drive.google.com/file/d/1JMRXt5XcQeO6I5SP_j8GeSbrRYpHSE_1/view?usp=sharing',
    },
    {
      logo: 'https://images2.imgbox.com/ca/c9/b4ue5mWP_o.png',
      title: 'HTML & CSS',
      organization: 'MaharaTech - ITIMooca',
      issueDate: 'November 2022',
      credentialId: 'rl5E4Ar9yw',
      skills: ['CSS3', 'HTML5'],
      credentialUrl: 'https://drive.google.com/file/d/1XBCgID7X-dazI-15wtODVE226gyKKxB3/view?usp=sharing',
    },
    {
      logo: 'https://thumbs2.imgbox.com/50/65/cPXyFVKX_t.png',
      title: 'JavaScript',
      organization: 'MaharaTech - ITIMooca',
      issueDate: 'November 2022',
      credentialId: 'mMlmlczFe9',
      skills: ['JavaScript'],
      credentialUrl: 'https://drive.google.com/file/d/1cui5EzDEtcG8FbsTEB8Lsl8vGhe-qEXZ/view?usp=sharing',
    },
    {
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHcVFUCeGV-NA/company-logo_200_200/company-logo_200_200/0/1713358716053/maharatechiti_logo?e=1766016000&v=beta&t=0-m5u4tl2Ll_4K0nMt45uiU0pR0_tSAY5qDe69H1bJ8',
      title: 'The Principles of Writing Clean Code',
      organization: 'MaharaTech - ITIMooca',
      issueDate: 'November 2022',
      credentialId: 'LILEDu5dqs',
      skills: ['تطوير الويب'],
      credentialUrl: 'https://drive.google.com/file/d/1pAV1npyV2tRkBGfcSoM4dFHn5IEFHTDw/view?usp=sharing',
    },
    {
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGEeA7Kew0qJw/company-logo_200_200/company-logo_200_200/0/1630589510780?e=1766016000&v=beta&t=dJSCTkvsKk46e3D23CJisDwCwjTm2OA6Motu-xq1wwI',
      title: 'Web Design Certificate',
      organization: 'National Telecommunication Institute (NTI)',
      issueDate: 'August 2022',
      credentialId: '63865',
      skills: ['CSS3', 'Bootstrap', 'HTML5', 'JavaScript', 'تطوير الويب'],
      credentialUrl: 'https://drive.google.com/file/d/1GxmsvwFI4mZhIT53nUv62K51YbJTEu7z/view?usp=sharing',
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900 dark:via-blue-900/20 relative overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cert-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:nth-child(4) { animation-delay: 0.4s; }
        .cert-card:nth-child(5) { animation-delay: 0.5s; }
        .cert-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-300/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications & Licenses
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Professional credentials and certifications earned
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card transition-all duration-500 transform ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="h-full bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400/50 hover:shadow-lg dark:hover:shadow-cyan-400/20 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                  <button
                    onClick={() => setSelectedLogo(cert.logo)}
                    className="h-48 w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.organization}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    {cert.organization}
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Issue Date:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                      <code className="text-gray-900 dark:text-white font-mono text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                        {cert.credentialId}
                      </code>
                    </div>
                  </div>

                  <div className="mb-4 flex-1">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group/btn"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedLogo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedLogo(null)}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }
            @keyframes scaleUp {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-scaleUp {
              animation: scaleUp 0.3s ease-out;
            }
          `}</style>

          <div
            className="animate-scaleUp relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors p-2 focus:outline-none"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedLogo}
                alt="Logo fullscreen"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-center text-white text-sm mt-4">
              Press <kbd className="bg-white/20 px-2 py-1 rounded">ESC</kbd> to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
