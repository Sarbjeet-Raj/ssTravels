import React from 'react';
import { ShieldCheck, UserCheck, HeartHandshake, PhoneCall, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold uppercase tracking-wider border border-gold-500/20">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>About S&amp;S ROYAL TOURS &amp; TRAVELS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 leading-tight">
              Dedicated to Reliable, Comfortable &amp; Direct Travel Assistance
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <strong>S&amp;S ROYAL TOURS &amp; TRAVELS</strong> provides dependable car rental and travel services across Delhi NCR, Greater Noida, Noida, Ghaziabad, Gurugram, Faridabad, and popular outstation destinations across India.
              </p>
              <p>
                We believe that every journey should be stress-free from the moment you plan it. Instead of dealing with impersonal app algorithms, automated customer support, or hidden surge fares, our customers enjoy direct, personalized communication with the business owner.
              </p>
              <p>
                Whether you need a quick sedan for a city business meeting, an early morning airport drop to Indira Gandhi International Airport, or an expansive SUV for an extended outstation family holiday, we focus on vehicle cleanliness, driver punctuality, and straightforward communication.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-gold-400 mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-sm mb-1">Direct Owner Assistance</h4>
                <p className="text-xs text-slate-600">
                  Discuss your travel requirements directly with the owner for genuine availability, fair pricing, and customized stops.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-gold-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-sm mb-1">Punctual &amp; Maintained</h4>
                <p className="text-xs text-slate-600">
                  Clean, well-maintained vehicles with courteous, experienced highway and city chauffeurs who prioritize your safety.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-gold-400 mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-sm mb-1">Transparent Communication</h4>
                <p className="text-xs text-slate-600">
                  Clear fare estimates upfront. No unexpected hidden charges, sudden cancellations, or confusing booking rules.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-gold-400 mb-3">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-950 text-sm mb-1">Simple Phone &amp; WhatsApp Booking</h4>
                <p className="text-xs text-slate-600">
                  No complicated registration portals or forced card payments. Confirm your journey simply through a chat or phone call.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/30">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="Chauffeur driven car rental service S&S Royal Tours"
                  className="w-full h-96 object-cover object-center"
                />
              </div>

              {/* Monogram card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-navy-950 text-white p-6 rounded-2xl shadow-xl border border-navy-800 max-w-xs hidden sm:block">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center font-serif font-bold text-gold-400">
                    S&amp;S
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">S&amp;S ROYAL TOURS</h5>
                    <p className="text-[11px] text-gold-400">&amp; TRAVELS</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Serving your travel priorities across Delhi NCR, Greater Noida, and nationwide destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
