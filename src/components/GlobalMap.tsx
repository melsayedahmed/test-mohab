import { useEffect, useRef, useState } from 'react';
import { Globe as Globe2, MapPin, Folder, Activity } from 'lucide-react';
import { projectsData, studentsData } from '../data/mapData';

type LayerMode = 'projects' | 'students' | 'both';

export default function GlobalMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [layerMode, setLayerMode] = useState<LayerMode>('both');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredStudent, setHoveredStudent] = useState<string | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      if (!ctx) return;

      time += 0.01;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid(ctx, canvas.width, canvas.height, time);

      if (layerMode === 'projects' || layerMode === 'both') {
        drawProjectCountries(ctx, canvas.width, canvas.height, time);
      }

      if (layerMode === 'students' || layerMode === 'both') {
        drawStudentMarkers(ctx, canvas.width, canvas.height, time);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [layerMode]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    const gridSize = 40;
    const offsetX = (time * 20) % gridSize;
    const offsetY = (time * 20) % gridSize;

    for (let x = -offsetX; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = -offsetY; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const drawProjectCountries = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const countryPositions = [
      { name: 'Saudi Arabia', x: 0.62, y: 0.45 },
      { name: 'Egypt', x: 0.55, y: 0.45 },
      { name: 'United States', x: 0.25, y: 0.35 },
      { name: 'United Arab Emirates', x: 0.64, y: 0.47 },
      { name: 'Kuwait', x: 0.61, y: 0.43 },
      { name: 'Jordan', x: 0.57, y: 0.44 },
    ];

    countryPositions.forEach((pos) => {
      const project = projectsData.find(p => p.country === pos.name);
      if (!project) return;

      const x = pos.x * width;
      const y = pos.y * height;
      const isHovered = hoveredCountry === pos.name;

      ctx.save();

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 60);
      gradient.addColorStop(0, isHovered ? 'rgba(34, 197, 94, 0.4)' : 'rgba(34, 197, 94, 0.2)');
      gradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.1)');
      gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 60, 0, Math.PI * 2);
      ctx.fill();

      const glowIntensity = 0.5 + Math.sin(time * 2) * 0.3;
      ctx.strokeStyle = isHovered ? `rgba(34, 197, 94, ${glowIntensity * 1.5})` : `rgba(34, 197, 94, ${glowIntensity})`;
      ctx.lineWidth = isHovered ? 3 : 2;
      ctx.beginPath();
      ctx.arc(x, y, 50, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = isHovered ? '#22c55e' : '#10b981';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
  };

  const drawStudentMarkers = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    studentsData.forEach((location) => {
      const x = ((location.lng + 180) / 360) * width;
      const y = ((90 - location.lat) / 180) * height;

      const size = Math.max(8, Math.min(20, location.students / 10));
      const isHovered = hoveredStudent === location.name;

      ctx.save();

      const pulseSize = size + Math.sin(time * 3) * 3;
      const pulseOpacity = 0.3 + Math.sin(time * 3) * 0.2;

      const pulseGradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize * 2);
      pulseGradient.addColorStop(0, `rgba(6, 182, 212, ${pulseOpacity})`);
      pulseGradient.addColorStop(0.5, `rgba(6, 182, 212, ${pulseOpacity * 0.5})`);
      pulseGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = pulseGradient;
      ctx.beginPath();
      ctx.arc(x, y, pulseSize * 2, 0, Math.PI * 2);
      ctx.fill();

      const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size + 5);
      glowGradient.addColorStop(0, isHovered ? 'rgba(6, 182, 212, 1)' : 'rgba(6, 182, 212, 0.8)');
      glowGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.3)');
      glowGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(x, y, size + 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isHovered ? '#22d3ee' : '#06b6d4';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(x - size / 3, y - size / 3, size / 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let foundCountry = false;
    let foundStudent = false;

    if (layerMode === 'projects' || layerMode === 'both') {
      const countryPositions = [
        { name: 'Saudi Arabia', x: 0.62, y: 0.45 },
        { name: 'Egypt', x: 0.55, y: 0.45 },
        { name: 'United States', x: 0.25, y: 0.35 },
        { name: 'United Arab Emirates', x: 0.64, y: 0.47 },
        { name: 'Kuwait', x: 0.61, y: 0.43 },
        { name: 'Jordan', x: 0.57, y: 0.44 },
      ];

      for (const pos of countryPositions) {
        const px = pos.x * canvas.width;
        const py = pos.y * canvas.height;
        const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2);

        if (distance < 50) {
          setHoveredCountry(pos.name);
          foundCountry = true;
          break;
        }
      }
    }

    if (!foundCountry) {
      setHoveredCountry(null);
    }

    if (layerMode === 'students' || layerMode === 'both') {
      for (const location of studentsData) {
        const px = ((location.lng + 180) / 360) * canvas.width;
        const py = ((90 - location.lat) / 180) * canvas.height;
        const size = Math.max(8, Math.min(20, location.students / 10));
        const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2);

        if (distance < size + 10) {
          setHoveredStudent(location.name);
          foundStudent = true;
          break;
        }
      }
    }

    if (!foundStudent) {
      setHoveredStudent(null);
    }
  };

  const getTooltipContent = () => {
    if (hoveredCountry) {
      const project = projectsData.find(p => p.country === hoveredCountry);
      return project ? `${hoveredCountry}\n${project.projects} Projects` : null;
    }
    if (hoveredStudent) {
      const student = studentsData.find(s => s.name === hoveredStudent);
      return student ? `${hoveredStudent}\n${student.students} Students` : null;
    }
    return null;
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
      <style>{`
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .scan-line {
          animation: scanLine 3s linear infinite;
        }

        .fade-transition {
          transition: opacity 0.5s ease-in-out;
        }

        .toggle-button {
          position: relative;
          transition: all 0.3s ease;
        }

        .toggle-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(34, 197, 94, 0.3));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .toggle-button.active::before {
          opacity: 1;
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-green-500/5 pointer-events-none"></div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        onMouseMove={handleCanvasMouseMove}
        onMouseLeave={() => {
          setHoveredCountry(null);
          setHoveredStudent(null);
        }}
      />

      <div className="absolute top-8 left-8 bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 min-w-[280px]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 scan-line h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white glow-text">Global Tracking</h2>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">System Active</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Projects:</span>
                <span className="text-white font-bold">{projectsData.reduce((acc, p) => acc + p.projects, 0)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Students:</span>
                <span className="text-white font-bold">{studentsData.reduce((acc, s) => acc + s.students, 0)}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-3">Layer View</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setLayerMode('projects')}
                className={`toggle-button px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  layerMode === 'projects'
                    ? 'active bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setLayerMode('students')}
                className={`toggle-button px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  layerMode === 'students'
                    ? 'active bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setLayerMode('both')}
                className={`toggle-button px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  layerMode === 'both'
                    ? 'active bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-white border border-cyan-500/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800'
                }`}
              >
                Both
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Legend</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                <span className="text-sm text-gray-300">Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse"></div>
                <span className="text-sm text-gray-300">Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {getTooltipContent() && (
        <div className="fixed pointer-events-none z-50 bg-gray-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg px-4 py-3 shadow-2xl shadow-cyan-500/30"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-white whitespace-pre-line text-center">
            {getTooltipContent()?.split('\n').map((line, i) => (
              <div key={i} className={i === 0 ? 'font-bold text-cyan-400' : 'text-sm text-gray-300'}>
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-sm text-gray-300 font-medium">Live Tracking Enabled</span>
        </div>
      </div>
    </div>
  );
}
