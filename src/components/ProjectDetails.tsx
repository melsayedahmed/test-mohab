import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPopupOpen(false);
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (isPopupOpen && project) {
        if (e.key === 'ArrowLeft') {
          setPopupImageIndex((prev) =>
            prev > 0 ? prev - 1 : project.images.length - 1
          );
        } else if (e.key === 'ArrowRight') {
          setPopupImageIndex((prev) =>
            prev < project.images.length - 1 ? prev + 1 : 0
          );
        }
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-105 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < project.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : project.images.length - 1
    );
  };

  const openPopup = (index: number) => {
    setPopupImageIndex(index);
    setIsPopupOpen(true);
  };

  const nextPopupImage = () => {
    setPopupImageIndex((prev) =>
      prev < project.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevPopupImage = () => {
    setPopupImageIndex((prev) =>
      prev > 0 ? prev - 1 : project.images.length - 1
    );
  };

  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-10 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300 group animate-slideIn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="mb-12 animate-slideIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            {project.shortDescription}
          </p>
        </div>

        <div className="relative mb-14 animate-slideIn animation-delay-200">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 dark:border-cyan-400/20 shadow-2xl bg-gray-900">
            <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openPopup(currentImageIndex)}
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-cyan-500 w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    index === currentImageIndex
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/30'
                      : 'border-gray-300 dark:border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-10 animate-slideIn animation-delay-400">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 dark:border-cyan-400/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1">
                      •
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 dark:border-cyan-400/20 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 dark:border-cyan-400/20 shadow-xl">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/50 group"
              >
                View Live Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsPopupOpen(false)}
        >
          <button
            onClick={() => setIsPopupOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-cyan-400 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="animate-scaleUp relative max-w-7xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 flex items-center justify-center">
              <img
                src={project.images[popupImageIndex]}
                alt={`${project.title} - Image ${popupImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevPopupImage}
                    className="absolute left-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>

                  <button
                    onClick={nextPopupImage}
                    className="absolute right-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-white text-sm">
                Image {popupImageIndex + 1} of {project.images.length} • Press{' '}
                <kbd className="bg-white/20 px-2 py-1 rounded">ESC</kbd> to close •
                Use <kbd className="bg-white/20 px-2 py-1 rounded">←</kbd>{' '}
                <kbd className="bg-white/20 px-2 py-1 rounded">→</kbd> to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
