import { useEffect, useRef, useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface TabContent {
  title: string;
  subtitle: string;
  cards: PackageCard[];
}

interface PackageCard {
  title: string;
  price?: string;
  duration: string;
  features: string[];
  badge?: string;
}

export default function Packages() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('training');
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

  const tabs = [
    { id: 'training', label: 'Training & Mentorship' },
    { id: 'freelance', label: 'Freelancing Projects' },
    { id: 'opportunities', label: 'Work Opportunities' },
    { id: 'workshops', label: 'Workshops & Talks' },
    { id: 'coming', label: 'Coming Soon' },
  ];

  const tabContents: Record<string, TabContent> = {
    training: {
      title: 'Training & Mentorship',
      subtitle:
        'Course-style packages in Frontend Development with guidance and hands-on practice.',
      cards: [
        {
          title: 'Starter Pack',
          price: '1500 EGP',
          duration: '4 sessions × 1h',
          features: ['Beginner friendly', 'Q&A support', 'Practical tasks'],
        },
        {
          title: 'Advanced Pack',
          price: '3500 EGP',
          duration: '8 sessions × 1.5h',
          features: ['Code reviews', 'Real projects', 'Follow-up support'],
        },
      ],
    },
    freelance: {
      title: 'Freelance Projects',
      subtitle: 'Custom web development projects tailored for clients.',
      cards: [
        {
          title: 'Landing Page',
          price: '150 $',
          duration: '1–2 weeks',
          features: ['Dashboard','Responsive design', 'SEO', 'Fast delivery'],
        },
        {
          title: 'Small Project',
          price: '450 $',
          duration: '3–5 weeks',
          features: ['Dashboard', 'API integration', 'Authentication'],
        },
        {
          title: 'Medium Project',
          price: '1000 $',
          duration: '5–8 weeks',
          features: ['Dashboard', 'API integration', 'Authentication'],
        },
        {
          title: 'Large Project',
          price: '2000 $',
          duration: '16–24 weeks',
          features: ['Dashboard', 'API integration', 'Mobile App'],
        },
      ],
    },
    opportunities: {
      title: 'Work Opportunities',
      subtitle: 'Available for Remote, Part Time, Full Time or Hybrid Roles.',
      cards: [
        {
          title: 'Remote',
          price: '18,000 EGP',
          duration: 'Available Role',
          features: ['Project Manager', 'Project Coordinator', 'Scrum Master', 'Product Owner'],
        },
        {
          title: 'Full Time',
          price: '25,000 EGP',
          duration: 'Available Role',
          features: ['Project Manager', 'Project Coordinator', 'Scrum Master', 'Product Owner'],
        },
         {
          title: 'Part Time',
          price: 'Negotiable',
          duration: 'Available Role',
          features: ['Project Manager', 'Project Coordinator', 'Scrum Master', 'Product Owner'],
        },
      ],
    },
    workshops: {
      title: 'Workshops & Talks',
      subtitle: 'Interactive Sessions to Share Web Development & PM Knowledge and skills',
      cards: [
           {
          title: 'Online Workshop',
          price: '2000 EGP',
          duration: '2-3 Hours',
          features: ['Q&A', 'Recording Included'],
        },
        {
          title: 'Offilne Workshop',
          price: '5000 EGP',
          duration: '2-3-4-5-6 Hours',
          features: ['Q&A', 'Follow-up support'],
        },
      ],
    },
    coming: {
      title: 'Coming Soon',
      subtitle: 'Future content to expand learning and reach.',
      cards: [
        {
          title: 'Podcast',
          badge: 'upcoming',
          duration: 'Topics: Frontend career, Freelancing, Tech trends',
          features: [],
        },
        {
          title: 'YouTube Channel',
          badge: 'upcoming',
          duration: 'Topics: Frontend tutorials, Project Management tutorials, Tips & tricks, Live coding',
          features: [],
        },
      ],
    },
  };

  const currentContent = tabContents[activeTab];

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .package-card {
          animation: float 3s ease-in-out infinite;
        }

        .package-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .package-card:nth-child(3) {
          animation-delay: 0.4s;
        }

        .tab-button {
          position: relative;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .tab-button.active {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .tab-button:not(.active) {
          border: 2px solid #e5e7eb;
          background-color: transparent;
          color: #6b7280;
        }

        .tab-button:not(.active):hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .dark .tab-button:not(.active) {
          border-color: #374151;
          color: #d1d5db;
        }

        .dark .tab-button:not(.active):hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .tab-content {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .price-badge {
          position: absolute;
          top: -6px;
          right: 24px;
          background: blue;
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
        }

        .upcoming-badge {
          position: absolute;
          top: -6px;
          right: 24px;
          background: blue;
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
            <Sparkles size={24} />
            <span className="text-sm font-semibold tracking-widest uppercase">packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Services & Packages
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Tailored solutions for your learning and project needs
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
         {tabs.map((tab) => (
  <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className={`tab-button px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap
      ${activeTab === tab.id ? 'active' : ''}
    `}
    aria-pressed={activeTab === tab.id}
  >
    {tab.label}
  </button>
))}
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="tab-content text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {currentContent.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          {currentContent.cards.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.cards.map((card, index) => (
                <div
                  key={index}
                  className="package-card group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 dark:from-blue-500/0 dark:to-blue-500/0 group-hover:from-blue-50 dark:group-hover:from-blue-900/10 group-hover:to-blue-100/0 dark:group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>

                  {card.price && <div className="price-badge">{card.price}</div>}
                  {card.badge && <div className="upcoming-badge">{card.badge}</div>}

                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 pt-6">
                      {card.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
                      {card.duration}
                    </p>

                    {card.features.length > 0 && (
                      <div className="space-y-3 mb-8">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Check size={20} className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                   <a
  href="https://wa.me/201146198234"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
>
  Get This Package
  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Sparkles className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                Coming soon! Stay tuned for exciting packages.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
