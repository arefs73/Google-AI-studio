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

export default function App() {
  const [isFloatingSupportOpen, setIsFloatingSupportOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [quoteProjectTitle, setQuoteProjectTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Ensure initial page view starts at the very top of the website
    window.scrollTo(0, 0);
  }, []);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setQuoteServiceId(serviceId);
    setQuoteProjectTitle(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setQuoteProjectTitle(projectTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* Header Navigation */}
      <Header
        onOpenSupport={() => setIsFloatingSupportOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenSupport={() => setIsFloatingSupportOpen(true)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Services Section (Web, AI, Mobile, Data Analysis) */}
        <ServicesSection
          onSelectService={(sId) => handleOpenQuoteModal(sId)}
          onOpenQuoteModal={(sId) => handleOpenQuoteModal(sId)}
        />

        {/* Technical Skills & Support SLAs */}
        <SkillsSection
          onOpenSupport={() => setIsFloatingSupportOpen(true)}
        />

        {/* Products & Projects Gallery */}
        <GallerySection
          onSelectProjectForQuote={handleSelectProjectForQuote}
        />

        {/* Dedicated Live Online Support Section (#support) */}
        <OnlineSupportWidget
          isOpenFloating={isFloatingSupportOpen}
          onCloseFloating={() => setIsFloatingSupportOpen(false)}
        />

        {/* Contact Form (#contact) */}
        <ContactSection />

        {/* Interactive Office Location Map (#map-office) */}
        <OfficeMapSection />
      </main>

      {/* Footer */}
      <Footer />

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
