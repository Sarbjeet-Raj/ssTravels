import React from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pb-20 sm:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 border border-gold-500/50 flex items-center justify-center shadow-royal">
                <div className="text-center">
                  <span className="block font-serif font-bold text-gold-400 text-base leading-none">S&amp;S</span>
                  <span className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold leading-tight">ROYAL</span>
                </div>
              </div>
              <div>
                <span className="block font-serif font-bold text-xl text-white">
                  S&amp;S ROYAL TOURS &amp; TRAVELS
                </span>
                <span className="block text-xs uppercase tracking-widest text-gold-400 font-medium">
                  Car Rental &amp; Travel Services
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Your dependable travel partner for city rides, corporate transfers, airport pickups, and outstation tours. Direct communication with the business owner ensures transparent pricing and punctual service.
            </p>

            <div className="flex items-center space-x-3 text-xs text-gold-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Direct Booking Assistance • No Middleman Fees</span>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gold-500" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gold-500" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#cars" className="hover:text-gold-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gold-500" />
                  <span>Our Cars</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gold-500" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gold-500" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-serif">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Greater Noida</li>
              <li>• Noida</li>
              <li>• Delhi NCR</li>
              <li>• Ghaziabad</li>
              <li>• Gurugram</li>
              <li>• Faridabad</li>
              <li>• IGI &amp; Hindon Airport</li>
              <li>• Outstation Across India</li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-serif">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="flex items-center space-x-2.5 text-slate-300 hover:text-gold-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-400 group-hover:border-gold-500/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase">Primary Phone</span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.primaryPhone}</span>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                className="flex items-center space-x-2.5 text-slate-300 hover:text-gold-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-400 group-hover:border-gold-500/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase">Secondary Phone</span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.secondaryPhone}</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-2.5 text-slate-300 hover:text-gold-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-400 group-hover:border-gold-500/40">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase">Email</span>
                  <span className="font-medium text-xs text-white break-all">{BUSINESS_INFO.email}</span>
                </div>
              </a>

              <a
                href={getWhatsAppQuickChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-whatsapp hover:text-whatsapp-hover mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: +{BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} <strong className="text-slate-400">S&amp;S ROYAL TOURS &amp; TRAVELS</strong>. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Designed for direct phone &amp; WhatsApp car rental bookings across Delhi NCR and India.
          </p>
        </div>
      </div>
    </footer>
  );
};
