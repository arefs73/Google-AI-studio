import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe, LineChart, Cpu, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenSupport: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport, onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background Soft Glows & Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-teal-50/80 via-blue-50/50 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Minimal Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-700 text-xs font-semibold shadow-sm mb-6">
          <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>RF Craft • Data Analytics & IT Solutions</span>
        </div>

        {/* Main Headline Slogan */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6">
          Empowering Business Growth Through <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
            Data Analytics & Custom Technology
          </span>
        </h1>

        {/* Short & Concise Description */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          <strong className="text-slate-900 font-semibold">RF Craft</strong> provides expert data analytics, computer infrastructure, custom web engineering (React & WordPress), and AI integrations tailored for growth.
        </p>

        {/* Service Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-10">
          {[
            { icon: LineChart, label: 'Data Analytics & Power BI' },
            { icon: Globe, label: 'Web & WordPress Engineering' },
            { icon: Cpu, label: 'Gemini AI Solutions' },
            { icon: Smartphone, label: 'Mobile Engineering' },
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <IconComp className="w-3.5 h-3.5 text-teal-600" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Call To Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>Request Project & Cost Estimate</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSupport}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all duration-200 shadow-sm group"
          >
            <MessageSquare className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
            <span>24/7 AI Smart Support</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>On-Time Project Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>KvK Registered (99957922)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed SLA Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
};

