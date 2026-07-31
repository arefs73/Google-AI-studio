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
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500 text-zinc-950 font-bold shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-zinc-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-zinc-100 flex items-center gap-2">
                RF Craft
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-sans font-medium">
                  Data & IT
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 font-normal tracking-wide">
                Data Analytics & IT Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-400 transition-colors py-1"
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
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-all duration-200 group"
              title="24/7 AI Smart Support"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <MessageSquare className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
              <span className="text-zinc-200">AI Support</span>
            </button>

            {/* Quote / Project Order Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-600 text-zinc-950 shadow-md shadow-teal-500/20 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Project Quote</span>
            </button>

            {/* Phone direct link */}
            <a
              href="tel:+31614167492"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-400 border border-zinc-800 transition-colors"
              title="Call +31 6 14167492"
            >
              <Phone className="w-4 h-4 text-teal-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSupport}
              className="p-2 rounded-lg bg-zinc-900 text-teal-400 border border-zinc-800 md:hidden"
              title="AI Support"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-3 mt-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium text-zinc-300 hover:bg-zinc-900 hover:text-teal-400 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-teal-500 text-zinc-950 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Instant Project Estimate</span>
            </button>

            <a
              href="tel:+31614167492"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Direct Phone: +31 6 14167492</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
