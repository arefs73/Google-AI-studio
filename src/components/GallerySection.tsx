import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/mockData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  ExternalLink,
  X,
  Maximize2,
  Calendar,
  Building2,
  TrendingUp,
  Check,
  Code2,
  Sparkles
} from 'lucide-react';

interface GallerySectionProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'data', label: 'Data Analytics' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-teal-700 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <FolderGit2 className="w-4 h-4 text-teal-600" />
            <span>Product & Project Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Case Studies & Featured Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our portfolio of enterprise web platforms, custom WordPress sites, Gemini AI integrations, mobile apps, and business intelligence dashboards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeFilter === filter.id
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-teal-500 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Lightbox Trigger */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-teal-700 border border-slate-200 backdrop-blur-md shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 text-slate-700 border border-slate-200 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors shadow-md"
                  title="View Project Details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{project.client}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-serif font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="pt-2">
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    {project.impactMetrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="text-left">
                        <span className="text-[10px] text-slate-500 block">{metric.label}</span>
                        <span className="text-xs font-bold font-serif text-teal-700">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & Footer CTA */}
                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-mono text-[10px] border border-teal-200/80 font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedProject.completionDate}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar text-left">
              
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Client */}
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{selectedProject.title}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span>Client: <strong className="text-slate-800">{selectedProject.client}</strong></span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Metrics Showcase */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-teal-700 flex items-center gap-1.5 uppercase tracking-widest">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  <span>Key Impact & Delivered Metrics:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                      <span className="text-[11px] text-slate-500 block mb-1">{metric.label}</span>
                      <span className="text-base font-serif font-bold text-teal-700">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="space-y-2">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onSelectProjectForQuote(title);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Project Like This</span>
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
