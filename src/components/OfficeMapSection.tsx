import React, { useEffect, useRef, useState } from 'react';
import { OFFICE_LOCATION } from '../data/mockData';
import L from 'leaflet';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Building,
  Clock,
  Phone,
  Layers,
  Map as MapIcon,
  Compass
} from 'lucide-react';

export const OfficeMapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeTileLayer, setActiveTileLayer] = useState<'dark' | 'street'>('street');

  const { lat, lng } = OFFICE_LOCATION.coordinates;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization error
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 16,
      zoomControl: false,
    });

    mapInstanceRef.current = map;

    // Custom Tile URLs
    const darkTileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    const streetTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const tileUrl = activeTileLayer === 'dark' ? darkTileUrl : streetTileUrl;

    L.tileLayer(tileUrl, {
      attribution: '&copy; OpenStreetMap contributors & CartoDB',
      maxZoom: 19,
    }).addTo(map);

    // Zoom Controls
    L.control.zoom({ position: 'topleft' }).addTo(map);

    // Custom Glowing SVG Icon for Marker
    const customMarkerIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; inset: 0; background: rgba(13, 148, 136, 0.4); border-radius: 50%; filter: blur(8px); animation: pulse 2s infinite;"></div>
          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #0d9488, #2563eb); border-radius: 50%; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -40],
    });

    // Add Marker
    const marker = L.marker([lat, lng], { icon: customMarkerIcon }).addTo(map);

    // Popup Content
    const popupHtml = `
      <div style="direction: ltr; text-align: left; padding: 4px;">
        <h4 style="font-weight: 800; font-size: 14px; color: #0f172a; margin-bottom: 4px;">${OFFICE_LOCATION.name}</h4>
        <p style="font-size: 11px; color: #475569; margin-bottom: 8px; line-height: 1.5;">${OFFICE_LOCATION.address}</p>
        <div style="font-size: 11px; color: #0d9488; font-weight: 700;">Tel: ${OFFICE_LOCATION.phones[0]}</div>
      </div>
    `;

    marker.bindPopup(popupHtml).openPopup();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, activeTileLayer]);

  const copyAddress = () => {
    navigator.clipboard.writeText(OFFICE_LOCATION.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="map-office" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-teal-700 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Compass className="w-4 h-4 text-teal-600" />
            <span>Headquarters Office Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Interactive Office Location Map
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Visit our corporate headquarters for in-person consultations, technical scoping sessions, and project kickoff meetings.
          </p>
        </div>

        {/* Map Container & Navigation Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Leaflet Interactive Map View */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-3 shadow-xl relative min-h-[420px] flex flex-col">
            
            {/* Map Header Controls */}
            <div className="p-3 bg-slate-50 rounded-2xl mb-3 flex flex-wrap items-center justify-between gap-3 text-xs border border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <MapIcon className="w-4 h-4 text-teal-600" />
                <span>Live Location Map (Headquarters)</span>
              </div>

              {/* Map Theme Toggle */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveTileLayer('street')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeTileLayer === 'street'
                      ? 'bg-teal-600 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Street Mode
                </button>
                <button
                  onClick={() => setActiveTileLayer('dark')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeTileLayer === 'dark'
                      ? 'bg-teal-600 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dark Mode
                </button>
              </div>
            </div>

            {/* Map Canvas */}
            <div
              ref={mapContainerRef}
              className="w-full flex-1 min-h-[350px] rounded-2xl overflow-hidden border border-slate-200"
            />

            {/* Quick Navigation Action Buttons */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={OFFICE_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-600" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`https://maps.apple.com/?q=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-teal-600" />
                <span>Open in Apple Maps</span>
              </a>
            </div>

          </div>

          {/* Office Address Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-xl space-y-6 text-left">
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900">{OFFICE_LOCATION.name}</h3>
                  <span className="text-xs text-teal-700 font-mono">KvK: {OFFICE_LOCATION.kvkNumber} | {OFFICE_LOCATION.city}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-widest block mb-1 font-bold">Address:</span>
                  <p className="text-slate-800 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {OFFICE_LOCATION.address}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">KvK-nummer</span>
                    <span className="font-mono text-teal-700 font-bold">{OFFICE_LOCATION.kvkNumber}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Vestigingsnr.</span>
                    <span className="font-mono text-slate-800 font-bold">{OFFICE_LOCATION.vestigingsnummer}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-500 uppercase tracking-widest block font-bold">Operating Hours:</span>
                  <p className="text-slate-700 font-medium">{OFFICE_LOCATION.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200">
              <button
                onClick={copyAddress}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 transition-all"
              >
                {copiedAddress ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedAddress ? 'Address Copied!' : 'Copy Office Address'}</span>
              </button>

              <a
                href={`tel:${OFFICE_LOCATION.phones[0]}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>Call Ahead Before Visit</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
