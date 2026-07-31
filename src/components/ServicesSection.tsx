import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';
import {
  Globe,
  Cpu,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Clock,
  Tag,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Layers,
  Zap
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe':
      return Globe;
    case 'Cpu':
      return Cpu;
    case 'Smartphone':
      return Smartphone;
    case 'BarChart3':
      return BarChart3;
    default:
      return Globe;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuoteModal }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>(SERVICES_DATA[0].id);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedTabId) || SERVICES_DATA[0];

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-medium uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Specialized Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Next-Gen Tech Solutions Built for Enterprise Growth
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We deliver end-to-end custom web engineering, Gemini AI model integration, mobile apps, and BI analytics designed to international enterprise software standards.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl max-w-full overflow-x-auto gap-2">
            {SERVICES_DATA.map((service, index) => {
              const IconComp = getServiceIcon(service.iconName);
              const isActive = service.id === selectedTabId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedTabId(service.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-teal-500 text-zinc-950 shadow-lg shadow-teal-500/20'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-zinc-950' : 'text-teal-400'}`} />
                  <span>0{index + 1}. {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Active Service Showcase Card */}
        {activeService && (
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Service Info & Features */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                    {React.createElement(getServiceIcon(activeService.iconName), {
                      className: 'w-6 h-6 text-teal-400',
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-zinc-100">{activeService.title}</h3>
                    <span className="text-xs text-teal-400 font-bold font-mono">
                      Service Module 0{SERVICES_DATA.findIndex(s => s.id === activeService.id) + 1}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Key Features List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Key Features & Capabilities:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badge Chips */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold block">Tech Stack & Tools:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-teal-400 font-mono text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Specs Side Box */}
              <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-6">
                <h4 className="text-base font-bold text-zinc-100 pb-3 border-b border-zinc-800 flex items-center justify-between">
                  <span>Specifications & Deliverables</span>
                  <Zap className="w-4 h-4 text-teal-400" />
                </h4>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-zinc-800/60">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-400" />
                      Estimated Timeframe:
                    </span>
                    <span className="font-bold text-zinc-100">{activeService.estimatedTime}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-zinc-800/60">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-teal-400" />
                      Starting Price:
                    </span>
                    <span className="font-bold text-teal-400 text-sm">{activeService.startingPrice}</span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-zinc-400 font-medium block">Project Deliverables:</span>
                    <ul className="space-y-1.5">
                      {activeService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => onOpenQuoteModal(activeService.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-teal-500 hover:bg-teal-600 text-zinc-950 shadow-lg shadow-teal-500/20 transition-all"
                  >
                    <span>Order & Request Detailed Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
                  >
                    <span>Request Technical Consultation</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Overview Grid of all 4 services matching Design HTML numbered card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = getServiceIcon(service.iconName);
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-teal-500 font-bold text-lg font-serif">0{index + 1}</div>
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-teal-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Feature Quick List */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-zinc-800 space-y-2 animate-in fade-in duration-200">
                      <span className="text-[11px] font-semibold text-teal-400">Key Highlights:</span>
                      <ul className="space-y-1 text-zinc-300 text-[11px]">
                        {service.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-zinc-500 hover:text-zinc-200 text-xs font-medium flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTabId(service.id);
                      onOpenQuoteModal(service.id);
                    }}
                    className="text-teal-400 hover:text-teal-300 text-xs font-bold flex items-center gap-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
