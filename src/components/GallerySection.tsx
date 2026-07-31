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
    <section id="gallery" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-medium uppercase tracking-widest">
            <FolderGit2 className="w-4 h-4" />
            <span>Product & Project Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Case Studies & Featured Works
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Explore our portfolio of enterprise web platforms, custom AI integrations, mobile apps, and business intelligence dashboards built for high impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeFilter === filter.id
                  ? 'bg-teal-500 text-zinc-950 border-teal-500 shadow-lg shadow-teal-500/20'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Lightbox Trigger */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-950/90 text-teal-400 border border-zinc-800 backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-zinc-950/90 text-zinc-100 border border-zinc-800 hover:bg-teal-500 hover:text-zinc-950 hover:border-teal-400 transition-colors shadow-lg"
                  title="View Project Details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>{project.client}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-serif font-bold text-zinc-100 hover:text-teal-400 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="pt-2">
                  <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
                    {project.impactMetrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="text-left">
                        <span className="text-[10px] text-zinc-500 block">{metric.label}</span>
                        <span className="text-xs font-bold font-serif text-teal-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & Footer CTA */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 font-mono text-[10px] border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-500 text-[10px]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-950 text-teal-400 border border-zinc-800">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedProject.completionDate}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar text-left">
              
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-zinc-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Client */}
              <div>
                <h3 className="text-xl font-serif font-bold text-zinc-100 mb-1">{selectedProject.title}</h3>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span>Client: <strong className="text-zinc-200">{selectedProject.client}</strong></span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Metrics Showcase */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                <h4 className="text-xs font-bold text-teal-400 flex items-center gap-1.5 uppercase tracking-widest">
                  <TrendingUp className="w-4 h-4" />
                  <span>Key Impact & Delivered Metrics:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                      <span className="text-[11px] text-zinc-500 block mb-1">{metric.label}</span>
                      <span className="text-base font-serif font-bold text-teal-400">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="space-y-2">
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold block">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-teal-400 text-xs font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onSelectProjectForQuote(title);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-600 text-zinc-950 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Project Like This</span>
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
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
