import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Zap, Code, Bot, Smartphone, LineChart } from 'lucide-react';

interface HeroProps {
  onOpenSupport: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport, onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-medium uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Leading IT & Artificial Intelligence Solutions</span>
            </div>

            {/* Main Headline with Serif & Italic Accent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-100 leading-tight tracking-tight">
              Pioneering <br />
              <span className="text-teal-500 italic font-serif">Smart IT Solutions</span> & Web Engineering
            </h1>

            {/* Subtitle Description */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-zinc-100 font-bold">RF Craft</strong> combines data analytics expertise with IT infrastructure engineering, custom web platforms, Gemini AI models, and mobile application solutions for modern businesses.
            </p>

            {/* Service Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: Code, label: 'Web Development' },
                { icon: Bot, label: 'Gemini AI Solutions' },
                { icon: Smartphone, label: 'Mobile Apps' },
                { icon: LineChart, label: 'Data Analytics' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 font-medium"
                  >
                    <IconComp className="w-3.5 h-3.5 text-teal-400" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-500 hover:bg-teal-600 text-zinc-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>Instant Project & Cost Estimator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSupport}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-all duration-200 shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>24/7 AI Smart Support</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-500 border-t border-zinc-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Guaranteed On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Enterprise Security & Quality Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Dedicated Technical SLA</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Console Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-zinc-800 rounded-3xl blur-xl opacity-50" />

              {/* Main Card Console Box */}
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-6">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
                    RFCraft_Core_Engine.ts
                  </div>
                </div>

                {/* Tech Highlights Grid inside Console */}
                <div className="space-y-3 font-mono text-xs text-zinc-300">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-teal-400" />
                      <span className="text-zinc-200">Web & App Engineering</span>
                    </div>
                    <span className="text-teal-400 text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      Active (99.9% SLA)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-teal-400" />
                      <span className="text-zinc-200">Gemini AI Model</span>
                    </div>
                    <span className="text-teal-400 text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      Server Online
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LineChart className="w-4 h-4 text-teal-400" />
                      <span className="text-zinc-200">Data BI & Analytics</span>
                    </div>
                    <span className="text-teal-400 text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      Live Stream
                    </span>
                  </div>
                </div>

                {/* Live Stats Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-2xl font-serif font-bold text-teal-400">150+</div>
                    <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Projects Delivered</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-2xl font-serif font-bold text-teal-400">98%</div>
                    <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Client Satisfaction</div>
                  </div>
                </div>

                {/* Interactive Prompt Sample */}
                <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-xs text-zinc-300 text-left">
                    <p className="font-semibold text-teal-400 mb-0.5">24/7 Online Support</p>
                    <p className="text-[11px] text-zinc-400">Instant AI answers to your technology queries</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
