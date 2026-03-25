import { Play, List, ArrowUpRight, Youtube } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Playlist {
  id: string;
  title: string;
  videoId: string;
  playlistId: string;
  url: string;
}

interface Video {
  id: string;
  title: string;
  url: string;
}

export default function YouTubePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<'playlists' | 'videos'>('playlists');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const playlists: Playlist[] = [
    {
      id: '1',
      title: 'Introduction to Programming',
      videoId: 'HFINShp0wuo',
      playlistId: 'PLilKnLmX5TnHieTAuvw5Vx6EIQvMmkCSw',
      url: 'https://www.youtube.com/watch?v=HFINShp0wuo&list=PLilKnLmX5TnHieTAuvw5Vx6EIQvMmkCSw',
    },
    {
      id: '2',
      title: 'Events',
      videoId: 'gf8xu6yBbRE',
      playlistId: 'PLilKnLmX5TnFCXVSEkIzwnalcnFPNwzWu',
      url: 'https://www.youtube.com/watch?v=gf8xu6yBbRE&list=PLilKnLmX5TnFCXVSEkIzwnalcnFPNwzWu',
    },
    {
      id: '3',
      title: 'Frontend Course',
      videoId: 'XmJ1opqt9L4',
      playlistId: 'PLilKnLmX5TnEl4jMRToVG1QvUlrpsO2e4',
      url: 'https://www.youtube.com/watch?v=XmJ1opqt9L4&list=PLilKnLmX5TnEl4jMRToVG1QvUlrpsO2e4',
    },
  ];

  const videos: Video[] = [
    {
      id: 'JNfRyORmA9c',
      title: '5amsat Clone with HTML CSS',
      url: 'https://www.youtube.com/watch?v=JNfRyORmA9c&t=5422s',
    },
    {
      id: '2xaDeU_IuEg',
      title: 'How to make Media Query in CSS',
      url: 'https://www.youtube.com/watch?v=2xaDeU_IuEg&t=929s',
    },
    {
      id: 'blttGfp_Od8',
      title: 'How to upload project to GITHUB and Free Host',
      url: 'https://www.youtube.com/watch?v=blttGfp_Od8&t=325s',
    },
  ];

  const scrollToSection = (section: 'playlists' | 'videos') => {
    setActiveSection(section);
    if (sectionRef.current) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'} relative overflow-hidden`}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3),
                        0 0 40px rgba(255, 0, 0, 0.2),
                        inset 0 0 20px rgba(255, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.5),
                        0 0 60px rgba(255, 0, 0, 0.3),
                        inset 0 0 30px rgba(255, 0, 0, 0.2);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .card-animate {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .card-animate:nth-child(1) { animation-delay: 0.1s; }
        .card-animate:nth-child(2) { animation-delay: 0.2s; }
        .card-animate:nth-child(3) { animation-delay: 0.3s; }
        .card-animate:nth-child(4) { animation-delay: 0.4s; }
        .card-animate:nth-child(5) { animation-delay: 0.5s; }
        .card-animate:nth-child(6) { animation-delay: 0.6s; }

        .playlist-card {
          position: relative;
          background: ${isDark ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%)' : 'linear-gradient(135deg, rgba(248, 248, 248, 0.95) 0%, rgba(240, 240, 240, 1) 100%)'};
          border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          overflow: hidden;
        }

        .playlist-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 0, 0, 0.1),
            transparent
          );
          background-size: 1000px 100%;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .playlist-card:hover::before {
          animation: shimmer 2s infinite;
          opacity: 1;
        }

        .playlist-card:hover {
          border-color: rgba(255, 0, 0, 0.5);
          box-shadow: 0 20px 60px rgba(255, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-10px) scale(1.02);
        }

        .video-card {
          position: relative;
          background: ${isDark ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%)' : 'linear-gradient(135deg, rgba(248, 248, 248, 0.95) 0%, rgba(240, 240, 240, 1) 100%)'};
          border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          overflow: hidden;
        }

        .video-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 0, 0, 0.1),
            transparent
          );
          background-size: 1000px 100%;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .video-card:hover::before {
          animation: shimmer 2s infinite;
          opacity: 1;
        }

        .video-card:hover {
          border-color: rgba(255, 0, 0, 0.5);
          box-shadow: 0 20px 60px rgba(255, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-10px) scale(1.02);
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .playlist-card:hover .thumbnail-overlay,
        .video-card:hover .thumbnail-overlay {
          opacity: 0.9;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 80px;
          height: 80px;
          background: rgba(255, 0, 0, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5);
        }

        .playlist-card:hover .play-button,
        .video-card:hover .play-button {
          transform: translate(-50%, -50%) scale(1);
          animation: glow-pulse 2s infinite;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0) 70%);
          filter: blur(60px);
          animation: float 20s ease-in-out infinite;
        }

        .section-tab {
          position: relative;
          padding: 10px 16px;
          background: transparent;
          border: 2px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          color: ${isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
          font-weight: 600;
          transition: all 0.3s;
          overflow: hidden;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .section-tab {
            padding: 12px 24px;
          }
        }

        @media (min-width: 768px) {
          .section-tab {
            padding: 12px 32px;
          }
        }

        .section-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.1));
          transform: translateX(-100%);
          transition: transform 0.3s;
        }

        .section-tab:hover::before {
          transform: translateX(0);
        }

        .section-tab.active {
          border-color: rgba(255, 0, 0, 0.8);
          color: white;
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.1) 100%);
        }

        .section-tab:hover {
          border-color: rgba(255, 0, 0, 0.5);
          color: ${isDark ? 'white' : 'black'};
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb w-[600px] h-[600px] -top-48 -left-48"></div>
        <div className="glow-orb w-[500px] h-[500px] top-1/3 -right-32" style={{ animationDelay: '5s' }}></div>
        <div className="glow-orb w-[400px] h-[400px] -bottom-32 left-1/3" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Youtube className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              YouTube Content
            </h1>
          </div>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2 sm:px-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my curated playlists and featured videos on web development, programming, and tech tutorials
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => scrollToSection('playlists')}
            className={`section-tab rounded-full text-sm sm:text-base px-4 sm:px-6 ${activeSection === 'playlists' ? 'active' : ''}`}
          >
            <List className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" />
            Playlists
          </button>
          <button
            onClick={() => scrollToSection('videos')}
            className={`section-tab rounded-full text-sm sm:text-base px-4 sm:px-6 ${activeSection === 'videos' ? 'active' : ''}`}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" />
            Featured Videos
          </button>
        </div>

        <section
          id="playlists"
          ref={sectionRef}
          className={`mb-24 sm:mb-28 md:mb-32 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-10 sm:mb-12">
            <List className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Video Playlists
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {playlists.map((playlist, index) => (
              <a
                key={playlist.id}
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="playlist-card rounded-2xl overflow-hidden block card-animate"
              >
                <div className="relative w-full aspect-video sm:aspect-video md:aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${playlist.videoId}/maxresdefault.jpg`}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${playlist.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="thumbnail-overlay"></div>
                  <div className="play-button">
                    <List className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                    <List className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="hidden xs:inline">PLAYLIST</span>
                    <span className="inline xs:hidden">PL</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-red-400 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {playlist.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>View Full Playlist</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="videos"
          className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-10 sm:mb-12">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Featured Videos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {videos.map((video, index) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-card rounded-2xl overflow-hidden block card-animate"
              >
                <div className="relative w-full aspect-video sm:aspect-video md:aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="thumbnail-overlay"></div>
                  <div className="play-button">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                  </div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white text-xs font-semibold">
                    <span className="hidden xs:inline">WATCH NOW</span>
                    <span className="inline xs:hidden">WATCH</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-red-400 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Watch on YouTube</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div
          className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://www.youtube.com/@FUNCTO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span>Subscribe to my Channel</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
