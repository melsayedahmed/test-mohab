import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes orb-float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(50px, -50px) scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes orb-float-2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-60px, 40px) scale(1.3);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes orb-float-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(40px, 50px) scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.5),
                        0 0 40px rgba(37, 99, 235, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 99, 235, 0.8),
                        0 0 80px rgba(37, 99, 235, 0.5),
                        inset 0 0 20px rgba(37, 99, 235, 0.3);
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: -1000px 0;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 1000px 0;
            opacity: 0.3;
          }
        }

        @keyframes ring-rotate {
          0% {
            transform: rotate(0deg) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes ring-rotate-reverse {
          0% {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(0deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes line-animate {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0;
          }
        }

        .orb-1 {
          animation: orb-float 6s ease-in-out infinite;
        }

        .orb-2 {
          animation: orb-float-2 7s ease-in-out infinite;
        }

        .orb-3 {
          animation: orb-float-3 8s ease-in-out infinite;
        }

        .core-circle {
          animation: glow-pulse 2s ease-in-out infinite, scale-pulse 3s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.3) 100%
          );
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .ring-1 {
          animation: ring-rotate 3s ease-out infinite;
        }

        .ring-2 {
          animation: ring-rotate-reverse 4s ease-out 0.5s infinite;
        }

        .line-animation {
          animation: line-animate 2s ease-in-out infinite;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(37, 99, 235, 0.6),
            transparent
          );
        }

        .particle {
          position: absolute;
          border-radius: 50%;
        }
      `}</style>

      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl orb-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl orb-2"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl orb-3"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full core-circle relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-black text-white drop-shadow-lg">M</div>
                </div>
              </div>
            </div>

            <svg
              className="absolute inset-0 w-full h-full ring-1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="64"
                cy="64"
                r="60"
                fill="none"
                stroke="rgba(37, 99, 235, 0.4)"
                strokeWidth="2"
              />
            </svg>

            <svg
              className="absolute inset-0 w-full h-full ring-2"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="64"
                cy="64"
                r="45"
                fill="none"
                stroke="rgba(37, 99, 235, 0.3)"
                strokeWidth="2"
              />
            </svg>

            <div className="absolute inset-4 flex items-center justify-center">
              <div className="w-20 h-0.5 line-animation"></div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-2 shimmer-text">
              MOHAB
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-4 rounded-full"></div>
            {/* <p className="text-gray-400 text-sm font-medium tracking-widest">
              LOADING EXPERIENCE
            </p> */}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-0 right-0 text-center">
          <p className="text-xs text-gray-500 font-light tracking-wider">
            Mohab Mohammed
          </p>
        </div>
      </div>
    </div>
  );
}
