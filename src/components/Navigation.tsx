import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === path) {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
  };

 const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'YouTube', path: '/youtube' },
  { label: 'Blog', path: '/blogs' },
  { label: 'Map', path: '/map' },
  { label: 'Contact', path: '/contact' },
];


  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        .nav-link {
          position: relative;
          font-size: clamp(0.875rem, 2vw, 1rem);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, rgb(37, 99, 235), rgb(0, 188, 212));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .logo {
          font-size: clamp(1.25rem, 3vw, 1.875rem);
          font-weight: 700;
        }

        .mobile-menu-item {
          position: relative;
          padding-left: 0;
        }

        .mobile-menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          width: 3px;
          height: 0;
          background: linear-gradient(180deg, rgb(37, 99, 235), rgb(0, 188, 212));
          transition: height 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-item:hover::before {
          height: 100%;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg'
            : 'bg-gradient-to-b from-white/50 dark:from-gray-900/50 to-transparent backdrop-blur-md'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div
              className="logo bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigation('/')}
            >
              Mohab
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.sectionId)}
                  className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-3 sm:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 absolute top-16 sm:top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="w-full px-4 sm:px-6 py-4 sm:py-6 space-y-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.sectionId)}
                  className="mobile-menu-item block w-full text-left px-4 py-3 sm:py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium"
                  style={{
                    animation: `slideDown 0.3s ease-out ${index * 50}ms backwards`,
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
