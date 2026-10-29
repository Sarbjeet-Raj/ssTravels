import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS_LIST } from '../data/travelData';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-navy-800" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Clear, transparent answers about car booking, outstation trips, airport transfers, and fare inquiries.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white shadow-sm hover:border-gold-500/40"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy-950 text-base sm:text-lg font-serif">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-gold-500 text-navy-950' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <h3 className="text-lg font-bold text-navy-950 font-serif mb-2">
            Have a Specific Question About Your Travel Route?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Speak directly with the business owner for custom quotes, special requirements, or urgent vehicle bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 mr-2 text-gold-400" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
            <a
              href={getWhatsAppQuickChatUrl("Hello S&S ROYAL TOURS & TRAVELS, I have a quick question regarding car booking.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
