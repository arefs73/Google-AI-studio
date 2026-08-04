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
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-teal-700 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Award className="w-4 h-4 text-teal-600" />
            <span>Technical Expertise & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Cutting-Edge Engineering & World-Class SLA
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our senior engineering team spans web architecture, custom WordPress platforms, Gemini AI models, mobile apps, and BI analytics to deliver high-availability systems.
          </p>
        </div>

        {/* Category Filter Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Terminal;
            const isActive = cat.id === activeCategoryId;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Skills Cards Grid */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                {React.createElement(categoryIcons[activeCategory.id] || Terminal, {
                  className: 'w-5 h-5 text-teal-600',
                })}
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">{activeCategory.description}</p>
            </div>
            <span className="text-xs font-mono font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 hidden sm:inline-block">
              {activeCategory.skills.length} Specializations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-600 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                      {skill.experienceYears}
                    </span>
                    <span className="text-xs font-bold font-mono text-teal-700">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>

                {/* Mastery Progress Bar */}
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Commitments & SLA Section */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5 text-teal-600" />
                <span>24/7 Technical SLA & Post-Launch Support</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Round-the-Clock Monitoring & AI Helpdesk
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                All RF Craft projects include technical SLA support, periodic security patches, performance optimization, and 24/7 AI assistance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Instant Response in &lt;10s</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>24/7 Monitoring & Backups</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-sm font-bold text-slate-900">AI Technical Consultation</span>
              <p className="text-xs text-slate-500">
                Get instant answers regarding estimates, technical scope, and architecture
              </p>
              <button
                onClick={onOpenSupport}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md shadow-teal-600/20"
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
