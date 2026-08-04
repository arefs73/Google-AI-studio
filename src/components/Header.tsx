import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSupport: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSupport, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Projects', href: '#gallery' },
    { name: 'AI Support', href: '#support' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600 text-white font-bold shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-slate-900 flex items-center gap-2">
                RF Craft
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-sans font-semibold">
                  Data & IT
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                Data Analytics & IT Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Support Launcher */}
            <button
              onClick={onOpenSupport}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-all duration-200 group"
              title="24/7 AI Smart Support"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <MessageSquare className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
              <span className="text-slate-800 font-medium">AI Support</span>
            </button>

            {/* Quote / Project Order Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-teal-100" />
              <span>Project Quote</span>
            </button>

            {/* Phone direct link */}
            <a
              href="tel:+31614167492"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-teal-600 border border-slate-200 transition-colors"
              title="Call +31 6 14167492"
            >
              <Phone className="w-4 h-4 text-teal-600" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSupport}
              className="p-2 rounded-lg bg-slate-100 text-teal-600 border border-slate-200 md:hidden"
              title="AI Support"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 mt-2 backdrop-blur-xl animate-in slide-in-from-top duration-200 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Instant Project Estimate</span>
            </button>

            <a
              href="tel:+31614167492"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Direct Phone: +31 6 14167492</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
