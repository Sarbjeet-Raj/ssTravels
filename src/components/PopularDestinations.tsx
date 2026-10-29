import React from 'react';
import { Navigation, MessageCircle } from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/travelData';
import { getWhatsAppQuickChatUrl } from '../utils/whatsapp';

export const PopularDestinations: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3 border border-gold-500/30">
            <span>Outstation Travel Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Popular Getaways &amp; Pilgrimages from Delhi NCR
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Planning a weekend road trip, religious pilgrimage, or family vacation? S&amp;S ROYAL TOURS &amp; TRAVELS arranges comfortable round-trip and one-way outstation cabs across North India.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <div
              key={idx}
              className="bg-navy-950 rounded-2xl overflow-hidden border border-navy-800 shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={`Car rental from Delhi NCR to ${dest.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                      {dest.state}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center text-xs text-slate-400 bg-navy-900/90 py-1.5 px-3 rounded-lg border border-navy-800">
                    <Navigation className="w-3.5 h-3.5 text-gold-400 mr-2 shrink-0" />
                    <span>{dest.approxDistance}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {dest.highlights}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppQuickChatUrl(`Hello S&S ROYAL TOURS & TRAVELS, I am planning a trip from Delhi NCR to ${dest.name} (${dest.state}). Could you please share the estimated fare and car options?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-gold-500 text-slate-200 hover:text-navy-950 font-bold text-xs sm:text-sm transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-whatsapp group-hover/btn:text-navy-950 transition-colors" />
                  <span>Enquire Delhi NCR &rarr; {dest.name} Fare</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
