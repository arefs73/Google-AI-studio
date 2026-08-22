import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe, LineChart, Cpu, Smartphone } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onNavigate?: (page: string) => void;
  onOpenSupport: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenSupport, onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background Soft Glows & Tech Grid Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-teal-50/90 via-blue-50/60 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:-ml-[70px] lg:-mr-[56px] lg:-mt-[56px] p-0">
          
          {/* Left Column: Structured & Organized Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 order-last lg:order-none mt-10 lg:mt-0">
            
            {/* 1. Header Group */}
            <div className="space-y-6 text-left text-[17px] leading-[25px] lg:w-[800px] lg:mb-[32px] lg:ml-[67px]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-teal-700 text-xs font-semibold shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span>RF Craft • Next-Gen IT Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15] mb-[24px] p-0 max-w-full lg:w-[900px]">
                Empowering Growth Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 inline-block w-auto lg:w-[600px] lg:whitespace-normal">
                  Data & Custom Tech
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                <strong className="text-slate-900 font-semibold">RF Craft</strong> provides expert analytics, robust infrastructure, scalable web engineering, and AI integrations tailored for your business.
              </p>
            </div>

            {/* 2. Organized Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-[20px] pb-[24px] mb-[32px] px-0 lg:pl-[62px] border-y border-slate-200/60 w-full lg:w-[600px]">
              {[
                { icon: LineChart, label: 'Data Analytics & Power BI', page: 'services' },
                { icon: Globe, label: 'Web & WordPress/Elementor', page: 'services' },
                { icon: Cpu, label: 'Gemini AI Solutions', page: 'services' },
                { icon: Smartphone, label: 'Mobile Engineering', page: 'services' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate?.(item.page)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 hover:bg-white border border-transparent hover:border-teal-200 text-sm font-medium text-slate-700 hover:text-teal-800 transition-all shadow-sm hover:shadow-md text-left group w-full lg:w-[294px]"
                  >
                    <div className="p-1.5 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors">
                      <IconComp className="w-4 h-4 text-teal-600" />
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 3. CTAs & Trust Indicators */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:w-[500px] lg:pl-[60px]">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <span>Request Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenSupport}
                  className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 transition-all duration-200 shadow-sm group"
                >
                  <MessageSquare className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                  <span>24/7 AI Support</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Logo Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center order-first lg:order-none relative lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-blue-200/20 rounded-full blur-3xl transform scale-110 -z-10" />
            <div className="flex items-center justify-center transition-transform duration-700 hover:scale-105 relative w-[300px] h-[300px] m-0 p-0 mb-[1px]">
              <Logo className="w-[300px] h-[300px] ml-[22px] mt-0 drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

