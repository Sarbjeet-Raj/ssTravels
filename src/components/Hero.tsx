import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Check } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section id="home" className="relative bg-navy-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background radial gradients for royal ambiance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines and Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>S&amp;S ROYAL TOURS &amp; TRAVELS</span>
              <span className="text-navy-500">•</span>
              <span className="text-slate-300">Delhi NCR &amp; All India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
              Your Journey, <br />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-snug">
              Reliable Car Rental &amp; Travel Services Across Delhi NCR and Beyond.
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Book your next city ride, airport transfer, family trip, or outstation journey with <strong className="text-white font-semibold">S&amp;S ROYAL TOURS &amp; TRAVELS</strong>. Contact us directly by phone or WhatsApp for your travel requirements.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-base transition-all shadow-royal hover:shadow-gold-500/30 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="w-5 h-5 mr-2.5 text-navy-950" />
                <span>Call Now: {BUSINESS_INFO.primaryPhone}</span>
              </a>

              {/* Book on WhatsApp */}
              <a
                href={getWhatsAppQuickChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base transition-all shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 mr-2.5" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Key Service Badges */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Direct Owner Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Local &amp; Outstation</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Airport Transfers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Premium Card Glow Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30 bg-navy-900 group">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
                  alt="S&S Royal Tours and Travels premium car rental fleet illustrative representation"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-navy-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Ready to Travel?</p>
                      <p className="text-sm font-semibold text-white">Direct WhatsApp Assistance</p>
                    </div>
                    <button
                      onClick={onScrollToForm}
                      className="px-3.5 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors"
                    >
                      Fill Trip Form
                    </button>
                  </div>
                </div>
              </div>

              {/* Service locations pill */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-slate-400 bg-navy-900/60 rounded-xl py-2 px-4 border border-navy-800">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Serving Greater Noida, Noida, Delhi, Ghaziabad, Gurugram &amp; Faridabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
