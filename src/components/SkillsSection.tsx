import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/mockData';
import {
  Code2,
  Brain,
  Smartphone,
  Database,
  ShieldCheck,
  Headphones,
  Zap,
  CheckCircle,
  Award,
  Terminal,
  Clock,
  Sparkles
} from 'lucide-react';

interface SkillsSectionProps {
  onOpenSupport: () => void;
}

const categoryIcons: Record<string, any> = {
  development: Code2,
  'ai-ml': Brain,
  mobile: Smartphone,
  'data-bi': Database,
  devops: ShieldCheck,
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onOpenSupport }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SKILL_CATEGORIES[0].id);

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 bg-slate-900/60 relative overflow-hidden border-y border-slate-800/80">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-medium uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>Technical Expertise & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Cutting-Edge Engineering & World-Class SLA
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            AriaTech's senior engineering team spans web architecture, Gemini AI engineering, mobile platforms, and cybersecurity to deliver 24/7 technical monitoring and high-availability systems.
          </p>
        </div>

        {/* Category Filter Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Terminal;
            const isActive = cat.id === activeCategoryId;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-teal-500 text-zinc-950 border-teal-500 shadow-md shadow-teal-500/10'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-zinc-950' : 'text-teal-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Skills Cards Grid */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800">
            <div>
              <h3 className="text-xl font-serif font-bold text-zinc-100 flex items-center gap-2">
                {React.createElement(categoryIcons[activeCategory.id] || Terminal, {
                  className: 'w-5 h-5 text-teal-400',
                })}
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{activeCategory.description}</p>
            </div>
            <span className="text-xs font-mono text-teal-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 hidden sm:inline-block">
              {activeCategory.skills.length} Registered Specializations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-teal-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-zinc-500 font-mono bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {skill.experienceYears}
                    </span>
                    <span className="text-xs font-bold font-mono text-teal-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Mastery Progress Bar */}
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                  <div
                    className="h-full bg-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Commitments & SLA Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-teal-400 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" />
                <span>24/7 Technical SLA & Post-Launch Support</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-zinc-100">
                Round-the-Clock Monitoring & AI Helpdesk
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                All AriaTech projects include 1 year of complimentary SLA technical support, periodic security patches, bug fixes, and 24/7 AI-powered assistance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant Response in &lt;10s</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>24/7 Support Including Holidays</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-sm font-bold text-zinc-100">AI Technical Consultation</span>
              <p className="text-xs text-zinc-400">
                Get instant answers regarding estimates, technical scope, and architecture
              </p>
              <button
                onClick={onOpenSupport}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-600 text-zinc-950 transition-all shadow-md shadow-teal-500/20"
              >
                Launch AI Support
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
