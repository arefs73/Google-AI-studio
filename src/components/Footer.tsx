import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, Sparkles, FileText, User, Building, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICE_LOCATION } from '../data/mockData';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, pageId: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-teal-200 overflow-hidden flex items-center justify-center p-0.5 shadow-2xs">
                <Logo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-slate-900">RF Craft</span>
                <span className="text-[11px] text-teal-700 font-medium">Data Analytics & IT Infrastructure</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed font-normal">
              RF Craft specializes in data analytics, computer infrastructure engineering, custom web applications, WordPress & Elementor solutions, and AI integrations for forward-thinking organizations.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-teal-700 font-medium">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>24/7 AI-Powered Support Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleNav(e, 'home')} className="hover:text-teal-700 transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors">Services</a></li>
              <li><a href="#skills" onClick={(e) => handleNav(e, 'skills')} className="hover:text-teal-700 transition-colors">Tech Stack</a></li>
              <li><a href="#gallery" onClick={(e) => handleNav(e, 'gallery')} className="hover:text-teal-700 transition-colors">Portfolio</a></li>
              <li><a href="#support" onClick={(e) => handleNav(e, 'support')} className="hover:text-teal-700 transition-colors">AI Support</a></li>
              <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-teal-700 transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-slate-900">Specialized Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors block">WordPress & Elementor Engineering</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors block">Data Analytics & BI Dashboards</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors block">Computer Infrastructure & Hosting</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors block">Web Architecture & Portals</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-teal-700 transition-colors block">Custom AI Models & Gemini Chatbots</a></li>
            </ul>
          </div>

          {/* Office Contact Summary */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-slate-900">Contact & Location</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OFFICE_LOCATION.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <a href={`tel:${OFFICE_LOCATION.phones[0]}`} className="font-mono hover:text-teal-700 transition-colors">
                  {OFFICE_LOCATION.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                <a href={`mailto:${OFFICE_LOCATION.email}`} className="font-mono hover:text-teal-700 transition-colors">
                  {OFFICE_LOCATION.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* KvK Official Registration Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Official Business Registration Details (KvK - Kamer van Koophandel)
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 border border-teal-200 text-[11px] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Registered Eenmanszaak</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Trade Name (Handelsnaam)</span>
              <span className="text-slate-900 font-bold font-serif text-sm">RF Craft</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">KvK Number (KvK-nummer)</span>
              <span className="text-teal-700 font-bold font-mono text-sm">99957922</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Establishment No. (Vestigingsnr.)</span>
              <span className="text-slate-800 font-bold font-mono text-xs">000064995178</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Owner (Eigenaar)</span>
              <span className="text-slate-900 font-semibold flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-teal-600" />
                <span>Aref Soleymani</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] pt-1">
            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2">
              <Building className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-700">SBI Code & Activity:</strong>{' '}
                <span className="text-slate-600">63100 - Inrichten van computerinfrastructuur, gegevensverwerking, hosting en aanverwante activiteiten</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-700">Activity Description:</strong>{' '}
                <span className="text-slate-600">Data analist (Data Analyst & IT Infrastructure Services)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RF Craft (KvK: 99957922). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted by</span>
            <span className="text-slate-800 font-semibold">RF Craft</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
