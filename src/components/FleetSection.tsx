import React from 'react';
import { Users, Luggage, Check, MessageCircle, Info, Shield, Sparkles } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../data/travelData';
import { getWhatsAppVehicleInquiryUrl } from '../utils/whatsapp';

interface FleetSectionProps {
  onSelectVehicleForForm: (categoryName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicleForForm }) => {
  return (
    <section id="cars" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3 border border-gold-500/20">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-gold-600" />
            <span>Vehicle Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Comfortable &amp; Well-Maintained Vehicles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from a selection of vehicle categories tailored to individual city commuters, executive travelers, families, and larger tour groups.
          </p>

          {/* Illustrative Notice Pill */}
          <div className="mt-4 inline-flex items-center space-x-2 text-xs text-amber-900 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> Vehicle photos shown below are representative and illustrative. Exact vehicle models, colors, and availability will be personally confirmed by the business owner.
            </span>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLE_CATEGORIES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-gold-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-56 overflow-hidden bg-navy-950">
                  <img
                    src={vehicle.imageUrl}
                    alt={`${vehicle.name} - ${vehicle.tagline} representative car rental`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Illustrative representation badge */}
                  <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md text-[11px] text-gold-300 font-medium px-2.5 py-1 rounded-md border border-navy-700 flex items-center space-x-1">
                    <Shield className="w-3 h-3 text-gold-400" />
                    <span>Representative Image</span>
                  </div>

                  {/* Category Title inside image bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold font-serif text-white drop-shadow-md">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-gold-400 font-medium drop-shadow-sm">
                      {vehicle.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Capacity & Luggage Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-lg text-slate-700 font-medium">
                      <Users className="w-4 h-4 text-navy-700 shrink-0" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-lg text-slate-700 font-medium">
                      <Luggage className="w-4 h-4 text-navy-700 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Ideal For */}
                  <div className="bg-navy-50/60 p-3 rounded-xl border border-navy-100/60 text-xs">
                    <span className="font-semibold text-navy-950 block mb-0.5">Ideal For:</span>
                    <span className="text-slate-600">{vehicle.idealFor}</span>
                  </div>

                  {/* Key Features */}
                  <div className="pt-2">
                    <div className="grid grid-cols-2 gap-1.5">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600">
                          <Check className="w-3 h-3 text-emerald-600 mr-1.5 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                {/* Check Availability on WhatsApp button */}
                <a
                  href={getWhatsAppVehicleInquiryUrl(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-md shadow-whatsapp/20 hover:shadow-whatsapp/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Check Availability on WhatsApp</span>
                </a>

                {/* Pre-fill in form button */}
                <button
                  onClick={() => onSelectVehicleForForm(vehicle.name)}
                  className="w-full py-2 text-xs font-semibold text-navy-800 hover:text-gold-600 hover:underline transition-colors text-center"
                >
                  Select this category in trip enquiry form &darr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
