import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, Sparkles, FileText, User, Building, CheckCircle2 } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-zinc-100">RF Craft</span>
                <span className="text-[11px] text-teal-400 font-medium">Data Analytics & IT Infrastructure</span>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed font-normal">
              RF Craft specializes in data analytics, computer infrastructure engineering, custom web applications, and AI integrations for forward-thinking organizations.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-teal-400 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>24/7 AI-Powered Support Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-zinc-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition-colors">Tech Stack</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Portfolio</a></li>
              <li><a href="#support" className="hover:text-teal-400 transition-colors">AI Support</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-zinc-100">Specialized Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 transition-colors">Data Analytics & BI Dashboards</li>
              <li className="hover:text-teal-400 transition-colors">Computer Infrastructure & Hosting</li>
              <li className="hover:text-teal-400 transition-colors">Web Architecture & Enterprise Portals</li>
              <li className="hover:text-teal-400 transition-colors">Custom AI Models & Gemini Chatbots</li>
              <li className="hover:text-teal-400 transition-colors">Mobile Engineering (iOS & Android)</li>
            </ul>
          </div>

          {/* Office Contact Summary */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-serif font-bold text-zinc-100">Contact & Location</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OFFICE_LOCATION.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${OFFICE_LOCATION.phones[0]}`} className="font-mono hover:text-teal-400 transition-colors">
                  {OFFICE_LOCATION.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${OFFICE_LOCATION.email}`} className="font-mono hover:text-teal-400 transition-colors">
                  {OFFICE_LOCATION.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* KvK Official Registration Card */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-left shadow-lg space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Official Business Registration Details (KvK - Kamer van Koophandel)
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[11px] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Registered Eenmanszaak</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Trade Name (Handelsnaam)</span>
              <span className="text-zinc-100 font-bold font-serif text-sm">RF Craft</span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">KvK Number (KvK-nummer)</span>
              <span className="text-teal-400 font-bold font-mono text-sm">99957922</span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Establishment No. (Vestigingsnr.)</span>
              <span className="text-zinc-200 font-bold font-mono text-xs">000064995178</span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Owner (Eigenaar)</span>
              <span className="text-zinc-100 font-semibold flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-teal-400" />
                <span>Aref Soleymani</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] pt-1">
            <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/60 flex items-start gap-2">
              <Building className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-300">SBI Code & Activity:</strong>{' '}
                <span className="text-zinc-400">63100 - Inrichten van computerinfrastructuur, gegevensverwerking, hosting en aanverwante activiteiten</span>
              </div>
            </div>

            <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/60 flex items-start gap-2">
              <FileText className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-300">Activity Description:</strong>{' '}
                <span className="text-zinc-400">Data analist (Data Analyst & IT Infrastructure Services)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} RF Craft (KvK: 99957922). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Crafted by</span>
            <span className="text-zinc-200 font-semibold">RF Craft</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
