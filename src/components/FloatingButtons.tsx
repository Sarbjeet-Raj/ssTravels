import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop / Tablet Floating Action Stack (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end space-y-3">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-navy-900/90 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700 shadow-md flex items-center justify-center transition-all transform hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Quick Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
          aria-label={`Call S&S Royal Tours at ${BUSINESS_INFO.primaryPhone}`}
          className="group flex items-center bg-navy-950 text-gold-400 hover:text-white hover:bg-navy-900 border border-gold-500/50 rounded-full p-3 shadow-xl transition-all transform hover:-translate-y-1"
          title={`Call ${BUSINESS_INFO.primaryPhone}`}
        >
          <Phone className="w-6 h-6 text-gold-400" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2.5 text-xs font-bold text-white">
            Call: {BUSINESS_INFO.primaryPhone}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={getWhatsAppQuickChatUrl("Hello S&S ROYAL TOURS & TRAVELS, I would like to enquire about a car booking.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with S&S Royal Tours on WhatsApp"
          className="group flex items-center bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full p-3.5 shadow-2xl animate-wa-pulse transition-all transform hover:scale-105"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-3 text-sm font-bold">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-2.5 px-4 shadow-floating">
        <div className="grid grid-cols-2 gap-3">
          {/* Mobile Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
            aria-label={`Call S&S Royal Tours ${BUSINESS_INFO.primaryPhone}`}
            className="flex items-center justify-center space-x-2 py-3 px-3 rounded-xl bg-gold-500 active:bg-gold-600 text-navy-950 font-bold text-sm shadow-md"
          >
            <Phone className="w-4 h-4 text-navy-950 shrink-0" />
            <span className="truncate">Call Now</span>
          </a>

          {/* Mobile WhatsApp Now */}
          <a
            href={getWhatsAppQuickChatUrl("Hello S&S ROYAL TOURS & TRAVELS, I would like to enquire about a car booking.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp with S&S Royal Tours"
            className="flex items-center justify-center space-x-2 py-3 px-3 rounded-xl bg-whatsapp active:bg-whatsapp-hover text-white font-bold text-sm shadow-md"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
