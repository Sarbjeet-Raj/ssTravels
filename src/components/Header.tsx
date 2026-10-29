import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

interface HeaderProps {
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Cars', href: '#cars' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-navy-950/95 backdrop-blur-md border-b border-navy-800 text-white shadow-xl transition-all">
      {/* Top micro-bar for quick contact */}
      <div className="hidden lg:block bg-navy-900 border-b border-navy-800/80 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>Direct Booking with Business Owner • Personalized Service</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              Serving: <strong className="text-white font-medium">Delhi NCR, Greater Noida, Noida, Ghaziabad, Gurugram, Faridabad &amp; Outstation</strong>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`} 
              className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors"
              title="Call Secondary Support"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 border border-gold-500/50 flex items-center justify-center shadow-royal group-hover:border-gold-400 transition-all">
              <div className="text-center">
                <span className="block font-serif font-bold text-gold-400 text-base leading-none tracking-wider">S&amp;S</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold leading-tight">ROYAL</span>
              </div>
            </div>
            <div>
              <span className="block font-serif font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-gold-400 transition-colors">
                S&amp;S ROYAL TOURS
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-medium">
                &amp; Travels • Delhi NCR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-navy-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Call button */}
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center px-4 py-2.5 rounded-lg border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 font-semibold text-sm transition-all shadow-sm"
              title="Call Primary Number"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppQuickChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm transition-all shadow-md shadow-whatsapp/20 hover:shadow-whatsapp/40 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="p-2.5 rounded-lg bg-navy-800 border border-gold-500/30 text-gold-400"
              aria-label="Call S&S Royal Tours"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-navy-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-gold-400 hover:bg-navy-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-navy-800 space-y-2.5">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold px-1">
              Direct Contact &amp; Booking
            </div>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-navy-800 border border-gold-500/40 text-gold-400 font-semibold text-sm"
            >
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gold-400" />
                Call Primary: {BUSINESS_INFO.primaryPhone}
              </span>
              <span className="text-xs text-gold-500 uppercase bg-navy-900 px-2 py-0.5 rounded">Fast</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
              className="flex items-center w-full px-4 py-2.5 rounded-lg bg-navy-800/60 text-slate-300 font-medium text-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-slate-400" />
              Call Alternate: {BUSINESS_INFO.secondaryPhone}
            </a>

            <a
              href={getWhatsAppQuickChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp Now
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center justify-center w-full px-4 py-2 text-xs text-slate-400 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
