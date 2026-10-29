import React from 'react';
import { 
  MapPin, 
  Compass, 
  ArrowRightCircle, 
  Repeat, 
  Plane, 
  Users, 
  Briefcase, 
  Clock, 
  MessageCircle, 
  Check,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/travelData';
import { getWhatsAppServiceInquiryUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-gold-500" />,
  Compass: <Compass className="w-6 h-6 text-gold-500" />,
  ArrowRightCircle: <ArrowRightCircle className="w-6 h-6 text-gold-500" />,
  Repeat: <Repeat className="w-6 h-6 text-gold-500" />,
  Plane: <Plane className="w-6 h-6 text-gold-500" />,
  Users: <Users className="w-6 h-6 text-gold-500" />,
  Briefcase: <Briefcase className="w-6 h-6 text-gold-500" />,
  Clock: <Clock className="w-6 h-6 text-gold-500" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Service Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Comprehensive Car Rental &amp; Travel Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you require quick city transportation, scheduled airport drops, or comfortable outstation tours across India, explore our available service categories and enquire directly.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {iconMap[service.iconName] || <MapPin className="w-6 h-6 text-gold-500" />}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-navy-950 font-serif group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gold-600 font-semibold mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppServiceInquiryUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy-50 hover:bg-whatsapp text-navy-900 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-whatsapp group-hover/btn:text-white transition-colors" />
                  <span>Enquire on WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            * Service availability, toll charges, interstate taxes, and customized itineraries will be confirmed directly with you by the business owner upon enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};
