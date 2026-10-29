import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMessage, setQuickMessage] = useState('');

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hello S&S ROYAL TOURS & TRAVELS,`,
      `Name: ${quickName || 'Customer'}`,
      `Phone: ${quickPhone || 'Not provided'}`,
      `Message: ${quickMessage || 'I would like to inquire about your travel services.'}`,
      `Please reply with details.`
    ].join('\n');

    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contact" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Direct Customer Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Contact S&amp;S ROYAL TOURS &amp; TRAVELS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out directly to discuss your travel requirements, check car availability, and obtain transparent fare estimates with no middleman markups.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone & Email Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Phone 1 Card (Primary) */}
            <div className="bg-navy-900/90 border border-gold-500/40 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-gold-400 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-royal">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Primary Contact &amp; Booking</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30">Main</span>
                    </div>
                    <a 
                      href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`} 
                      className="text-2xl sm:text-3xl font-bold font-serif text-white hover:text-gold-400 transition-colors block mt-1"
                    >
                      {BUSINESS_INFO.primaryPhone}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Direct booking enquiries, instant availability &amp; fare estimates
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-navy-950" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={getWhatsAppQuickChatUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone 2 Card (Secondary) */}
            <div className="bg-navy-900/70 border border-navy-800 rounded-2xl p-6 sm:p-7 shadow-lg hover:border-navy-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 text-slate-200 border border-navy-700 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Secondary Support Line</span>
                    <a 
                      href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`} 
                      className="text-2xl sm:text-3xl font-bold font-serif text-white hover:text-gold-400 transition-colors block mt-1"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Alternative phone line for travel assistance and general coordination
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white font-bold text-xs transition-colors border border-navy-700"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call Line 2</span>
                </a>
              </div>
            </div>

            {/* Email & Operational Area Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-navy-900/70 border border-navy-800 rounded-2xl p-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Email Inquiries</span>
                    <span className="text-xs text-slate-300 font-medium">Official Correspondence</span>
                  </div>
                </div>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-sm font-semibold text-gold-400 hover:underline break-all block mt-2"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-navy-900/70 border border-navy-800 rounded-2xl p-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Operational Region</span>
                    <span className="text-xs text-slate-300 font-medium">Doorstep Pickup</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Delhi NCR, Greater Noida, Noida, Ghaziabad, Gurugram, Faridabad, and Outstation Across India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Contact / Quick Chat Box */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-white">
                  Send a Quick Inquiry
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Have a quick question? Message us directly to initiate a live WhatsApp conversation with S&amp;S ROYAL TOURS &amp; TRAVELS.
                </p>
              </div>

              <form onSubmit={handleQuickContact} className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="quick-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="e.g. 9811XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="quick-msg" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Travel Requirement
                  </label>
                  <textarea
                    id="quick-msg"
                    rows={3}
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="e.g. Need a sedan for Delhi airport drop on Friday morning..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Start WhatsApp Conversation</span>
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-navy-800/80 flex items-center justify-center space-x-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Your contact info is used strictly to reply to your travel enquiry.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
