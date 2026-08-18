import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { GallerySection } from './components/GallerySection';
import { OnlineSupportWidget } from './components/OnlineSupportWidget';
import { ContactSection } from './components/ContactSection';
import { OfficeMapSection } from './components/OfficeMapSection';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { 
  Wrench, 
  Layers, 
  FolderKanban, 
  MessageSquare, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Home as HomeIcon,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isFloatingSupportOpen, setIsFloatingSupportOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [quoteProjectTitle, setQuoteProjectTitle] = useState<string | undefined>(undefined);

  // Synchronize URL hash with activePage state
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (['home', 'hero'].includes(hash) || !hash) {
        setActivePage('home');
      } else if (['services'].includes(hash)) {
        setActivePage('services');
      } else if (['skills', 'expertise', 'tech'].includes(hash)) {
        setActivePage('skills');
      } else if (['gallery', 'projects', 'portfolio'].includes(hash)) {
        setActivePage('gallery');
      } else if (['support', 'ai'].includes(hash)) {
        setActivePage('support');
      } else if (['contact', 'map', 'map-office'].includes(hash)) {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? 'home' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setQuoteServiceId(serviceId);
    setQuoteProjectTitle(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setQuoteProjectTitle(projectTitle);
    setIsQuoteModalOpen(true);
  };

  const renderPageHeader = (title: string, subtitle: string, category: string, icon: React.ElementType) => {
    const IconComp = icon;
    return (
      <div className="bg-gradient-to-b from-teal-50/70 via-slate-50 to-slate-50 pt-28 sm:pt-32 pb-8 sm:pb-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-1 hover:text-teal-700 transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-teal-700 font-semibold">{category}</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20 mt-1">
              <IconComp className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* Header Navigation with Active Page State */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSupport={() => setIsFloatingSupportOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Multi-Page Section Views */}
      <main className="flex-1">
        
        {/* PAGE 1: HOME PAGE */}
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-300">
            <Hero
              onNavigate={handleNavigate}
              onOpenSupport={() => setIsFloatingSupportOpen(true)}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* Home Portal Cards - Direct links to separate pages */}
            <section className="py-16 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700 block mb-1">
                      RF Craft Page Directory
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                      Explore Our Specialized Pages & Divisions
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                    Navigate directly to any section to review our full service spectrum, technology capabilities, portfolio projects, and direct contact details.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Card 1: Services */}
                  <div
                    onClick={() => handleNavigate('services')}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500/80 hover:bg-white transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        Services & Solutions
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Custom Web Development, WordPress & Elementor engineering, Data Analytics & Power BI dashboards, IT Infrastructure, and AI Chatbots.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                      <span>View Services Page</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 2: Tech Stack */}
                  <div
                    onClick={() => handleNavigate('skills')}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500/80 hover:bg-white transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        Tech Stack & Expertise
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Detailed proficiency metrics across React, Next.js, Elementor, PHP, Python, Cloud Databases, and our guaranteed SLA warranty.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                      <span>View Tech Stack</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 3: Portfolio */}
                  <div
                    onClick={() => handleNavigate('gallery')}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500/80 hover:bg-white transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FolderKanban className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        Portfolio & Case Studies
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Explore featured client builds, enterprise web portals, multilingual WordPress stores, and live BI dashboards.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                      <span>Browse Projects</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 4: AI Support */}
                  <div
                    onClick={() => handleNavigate('support')}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500/80 hover:bg-white transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        24/7 AI Smart Support
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Interactive AI assistant powered by Gemini to answer technical queries, calculate project scopes, and assist in real-time.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                      <span>Launch AI Support</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 5: Contact & Location */}
                  <div
                    onClick={() => handleNavigate('contact')}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500/80 hover:bg-white transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-2"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-teal-700 font-bold bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                          KvK: 99957922
                        </span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        Contact Us & Office Location
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Direct phone lines (+31 6 14167492), official registration details (Kamer van Koophandel), and interactive satellite office map.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                      <span>Contact & View Office Map</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Smart Support Assistant Section on Home Page */}
            <div className="border-t border-slate-200">
              <OnlineSupportWidget
                isOpenFloating={false}
                onCloseFloating={() => setIsFloatingSupportOpen(false)}
              />
            </div>
          </div>
        )}

        {/* PAGE 2: SERVICES PAGE */}
        {activePage === 'services' && (
          <div className="animate-in fade-in duration-300">
            {renderPageHeader(
              'Specialized IT & Data Services',
              'End-to-end web engineering, WordPress & Elementor custom setups, data analytics, computer infrastructure, and AI integration.',
              'Services',
              Wrench
            )}
            <ServicesSection
              onSelectService={(sId) => handleOpenQuoteModal(sId)}
              onOpenQuoteModal={(sId) => handleOpenQuoteModal(sId)}
            />
          </div>
        )}

        {/* PAGE 3: TECH STACK & EXPERTISE PAGE */}
        {activePage === 'skills' && (
          <div className="animate-in fade-in duration-300">
            {renderPageHeader(
              'Tech Stack & SLA Warranties',
              'Comprehensive technical proficiency metrics, modern frameworks, database architectures, and ongoing maintenance SLAs.',
              'Expertise',
              Layers
            )}
            <SkillsSection
              onOpenSupport={() => setIsFloatingSupportOpen(true)}
            />
          </div>
        )}

        {/* PAGE 4: PORTFOLIO & PROJECTS PAGE */}
        {activePage === 'gallery' && (
          <div className="animate-in fade-in duration-300">
            {renderPageHeader(
              'Portfolio & Case Studies',
              'Real-world software projects, multilingual e-commerce stores, custom web applications, and interactive Power BI analytics.',
              'Projects',
              FolderKanban
            )}
            <GallerySection
              onSelectProjectForQuote={handleSelectProjectForQuote}
            />
          </div>
        )}

        {/* PAGE 5: AI SUPPORT PAGE */}
        {activePage === 'support' && (
          <div className="animate-in fade-in duration-300">
            {renderPageHeader(
              '24/7 AI Smart Support Assistant',
              'Get instant responses about project pricing, timelines, technology recommendations, or book a consultation directly.',
              'AI Support',
              MessageSquare
            )}
            <OnlineSupportWidget
              isOpenFloating={false}
              onCloseFloating={() => setIsFloatingSupportOpen(false)}
            />
          </div>
        )}

        {/* PAGE 6: CONTACT & LOCATION MAP PAGE */}
        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-300">
            {renderPageHeader(
              'Contact Us & Office Location',
              'Get in touch with RF Craft for inquiries, proposal reviews, or direct technical consultation. Official KvK registered business in Netherlands.',
              'Contact & Map',
              MapPin
            )}
            <ContactSection />
            <OfficeMapSection />
          </div>
        )}

      </main>

      {/* Footer Nav */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Support Modal (accessible from any page via top header button) */}
      {isFloatingSupportOpen && (
        <OnlineSupportWidget
          isOpenFloating={true}
          onCloseFloating={() => setIsFloatingSupportOpen(false)}
        />
      )}

      {/* Project Quote / Estimator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
        initialProjectTitle={quoteProjectTitle}
      />
    </div>
  );
}

