import { useEffect, useRef, useState } from 'react';
import { Globe as Globe2, Activity } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { projectsData, studentsData } from '../data/mapData';

type LayerMode = 'projects' | 'students' | 'both';

interface GeoJSONFeature {
  type: string;
  properties: {
    name: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][];
  };
}

interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

export default function GlobalMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersRef = useRef<{
    projects: L.GeoJSON | null;
    students: L.LayerGroup | null;
  }>({ projects: null, students: null });

  const [layerMode, setLayerMode] = useState<LayerMode>('both');
  const [geoData, setGeoData] = useState<GeoJSONData | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const getProjectsForCountry = (countryName: string) => {
    return projectsData.find(p => p.country.toLowerCase() === countryName.toLowerCase());
  };

  const initializeMap = () => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: true,
      attributionControl: false,
    });

    map.on('click', () => {
      setHoveredCountry(null);
      setHoveredMarker(null);
    });

    const customTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '',
      maxZoom: 19,
    });

    customTileLayer.addTo(map);

    mapInstanceRef.current = map;
  };

  const loadCountriesGeoJSON = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json');
      const data: GeoJSONData = await response.json();
      setGeoData(data);
    } catch (error) {
      console.error('Error loading GeoJSON:', error);
    }
  };

  useEffect(() => {
    initializeMap();
    loadCountriesGeoJSON();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !geoData) return;

    const map = mapInstanceRef.current;

    if (layersRef.current.projects) {
      map.removeLayer(layersRef.current.projects);
    }

    if (layerMode === 'projects' || layerMode === 'both') {
      const projectsGeoJSON = L.geoJSON(geoData, {
        filter: (feature) => {
          const countryName = feature.properties.name;
          return !!getProjectsForCountry(countryName);
        },
        style: () => ({
          color: '#10b981',
          weight: 2,
          opacity: 0.8,
          fillColor: '#10b981',
          fillOpacity: 0.2,
        }),
        onEachFeature: (feature: GeoJSONFeature, layer) => {
          const countryName = feature.properties.name;
          const projectInfo = getProjectsForCountry(countryName);

          if (projectInfo) {
            layer.on('mouseover', () => {
              setHoveredCountry(countryName);
              (layer as L.Path).setStyle({
                weight: 3,
                fillOpacity: 0.4,
                color: '#22c55e',
              });
            });

            layer.on('mouseout', () => {
              setHoveredCountry(null);
              (layer as L.Path).setStyle({
                weight: 2,
                fillOpacity: 0.2,
                color: '#10b981',
              });
            });

            layer.bindPopup(
              `<div class="bg-gray-900 border border-cyan-500/50 rounded-lg p-3 text-white">
                <div class="font-bold text-green-400">${countryName}</div>
                <div class="text-sm text-gray-300">${projectInfo.projects} Projects</div>
              </div>`,
              { className: 'custom-popup' }
            );
          }
        },
      });

      projectsGeoJSON.addTo(map);
      layersRef.current.projects = projectsGeoJSON;
    }
  }, [geoData, layerMode, hoveredCountry]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    if (layersRef.current.students) {
      map.removeLayer(layersRef.current.students);
    }

    if (layerMode === 'students' || layerMode === 'both') {
      const studentsGroup = L.layerGroup();

      studentsData.forEach((location) => {
        const size = Math.max(8, Math.min(20, location.students / 10));

        const svgIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="relative w-full h-full flex items-center justify-center">
              <style>
                @keyframes pulse {
                  0%, 100% { transform: scale(1); opacity: 0.8; }
                  50% { transform: scale(1.2); opacity: 0.5; }
                }
                .student-marker {
                  animation: pulse 2s infinite;
                }
              </style>
              <div class="student-marker absolute rounded-full bg-cyan-500 shadow-lg"
                   style="width: ${size * 2}px; height: ${size * 2}px; box-shadow: 0 0 ${size * 3}px rgba(6, 182, 212, 0.8);"></div>
              <div class="absolute rounded-full bg-white"
                   style="width: ${size * 0.8}px; height: ${size * 0.8}px;"></div>
            </div>
          `,
          iconSize: [size * 3, size * 3],
          iconAnchor: [size * 1.5, size * 1.5],
        });

        const marker = L.marker([location.lat, location.lng], {
          icon: svgIcon,
        });

        marker.on('mouseover', () => {
          setHoveredMarker(location.name);
          marker.setPopupContent(
            `<div class="bg-gray-900 border border-cyan-500/50 rounded-lg p-3 text-white">
              <div class="font-bold text-cyan-400">${location.name}</div>
              <div class="text-sm text-gray-300">${location.students} Students</div>
            </div>`
          );
          marker.openPopup();
        });

        marker.on('mouseout', () => {
          setHoveredMarker(null);
          marker.closePopup();
        });

        marker.bindPopup(
          `<div class="bg-gray-900 border border-cyan-500/50 rounded-lg p-3 text-white">
            <div class="font-bold text-cyan-400">${location.name}</div>
            <div class="text-sm text-gray-300">${location.students} Students</div>
          </div>`,
          { className: 'custom-popup' }
        );

        marker.addTo(studentsGroup);
      });

      studentsGroup.addTo(map);
      layersRef.current.students = studentsGroup;
    }
  }, [layerMode, hoveredMarker]);

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
      <style>{`
        .leaflet-container {
          background-color: #0f172a;
          font-family: inherit;
        }

        .leaflet-popup-content-wrapper {
          background-color: transparent;
          box-shadow: none;
          border: none;
        }

        .leaflet-popup-tip {
          display: none;
        }

        .leaflet-control-zoom {
          border: 1px solid rgba(6, 182, 212, 0.3) !important;
          background-color: rgba(17, 24, 39, 0.8) !important;
          backdrop-filter: blur(12px);
        }

        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
          background-color: transparent !important;
          color: #06b6d4 !important;
          border-bottom: 1px solid rgba(6, 182, 212, 0.2) !important;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .leaflet-control-zoom-in:hover,
        .leaflet-control-zoom-out:hover {
          background-color: rgba(6, 182, 212, 0.1) !important;
          color: #22d3ee !important;
        }

        .custom-popup .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }

        .custom-marker {
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4));
        }

        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
        }

        .grid-overlay {
          animation: gridMove 20s linear infinite;
        }

        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .scan-line {
          animation: scanLine 3s linear infinite;
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
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
          z-index: -1;
        }

        .toggle-button.active::before {
          opacity: 1;
        }
      `}</style>

      <div ref={mapRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-cyan-500/20 w-[calc(100%-2rem)] sm:w-auto sm:min-w-[300px] max-h-[calc(100vh-2rem)] overflow-y-auto z-40">
        <style>{`
          @media (max-width: 640px) {
            .control-panel-content {
              max-height: calc(100vh - 8rem);
            }
          }
        `}</style>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 scan-line h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white glow-text truncate">Global Tracking</h2>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-green-400 animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm text-green-400 font-medium whitespace-nowrap">System Active</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400 whitespace-nowrap">Countries:</span>
                <span className="text-white font-bold flex-shrink-0">{projectsData.length}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400 whitespace-nowrap">Projects:</span>
                <span className="text-white font-bold flex-shrink-0">{projectsData.reduce((acc, p) => acc + p.projects, 0)}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400 whitespace-nowrap">Locations:</span>
                <span className="text-white font-bold flex-shrink-0">{studentsData.length}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-400 whitespace-nowrap">Students:</span>
                <span className="text-white font-bold flex-shrink-0">{studentsData.reduce((acc, s) => acc + s.students, 0)}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-3">Layer View</label>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              <button
                onClick={() => setLayerMode('projects')}
                className={`toggle-button px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all ${
                  layerMode === 'projects'
                    ? 'active bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setLayerMode('students')}
                className={`toggle-button px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all ${
                  layerMode === 'students'
                    ? 'active bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setLayerMode('both')}
                className={`toggle-button px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all ${
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
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-gray-300 truncate">Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-gray-300 truncate">Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40 px-4">
        <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
          <span className="text-xs sm:text-sm text-gray-300 font-medium truncate">Live Tracking</span>
        </div>
      </div>

      {hoveredCountry && (
        <div className="fixed pointer-events-none z-50 bg-gray-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg px-4 py-3 shadow-2xl shadow-cyan-500/30"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-white whitespace-pre-line text-center">
            <div className="font-bold text-green-400">{hoveredCountry}</div>
            <div className="text-sm text-gray-300">
              {getProjectsForCountry(hoveredCountry)?.projects || 0} Projects
            </div>
          </div>
        </div>
      )}

      {hoveredMarker && (
        <div className="fixed pointer-events-none z-50 bg-gray-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg px-4 py-3 shadow-2xl shadow-cyan-500/30"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-white whitespace-pre-line text-center">
            <div className="font-bold text-cyan-400">{hoveredMarker}</div>
            <div className="text-sm text-gray-300">
              {studentsData.find(s => s.name === hoveredMarker)?.students || 0} Students
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
