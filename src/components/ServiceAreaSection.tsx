import React from 'react';
import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/whatsapp';

export const ServiceAreaSection: React.FC = () => {
  const regions = [
    {
      title: 'Greater Noida & Noida',
      desc: 'Pari Chowk, Knowledge Park, Noida Expressway, Sector 18, Sector 62, Sector 137, Greater Noida West (Noida Extension).',
      badge: 'Core Hub',
    },
    {
      title: 'Delhi (All Zones)',
      desc: 'Connaught Place, South Delhi, Dwarka, Rohini, Saket, Karol Bagh, Laxmi Nagar, and all central residential & commercial sectors.',
      badge: 'Daily Service',
    },
    {
      title: 'Airport Transfers (IGI & Hindon)',
      desc: 'Scheduled 24/7 transfers for Indira Gandhi International Airport (Terminals 1, 2, and 3) & Hindon Airport.',
      badge: 'Timely Transfer',
    },
    {
      title: 'Ghaziabad & East NCR',
      desc: 'Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Crossings Republik, and NH9/NH24 corridors.',
      badge: 'Local Pickups',
    },
    {
      title: 'Gurugram & Faridabad',
      desc: 'Cyber Hub, Golf Course Road, Sohna Road, Udyog Vihar, Faridabad Mathura Road, and surrounding tech parks.',
      badge: 'Corporate & Trips',
    },
    {
      title: 'Outstation Across India',
      desc: 'Agra, Jaipur, Haridwar, Rishikesh, Mathura, Shimla, Manali, Chandigarh, Lucknow, Dehradun, and nationwide destinations.',
      badge: 'Interstate',
    },
  ];

  return (
    <section className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Operational Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Primary Service Areas Across Delhi NCR &amp; Beyond
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We provide punctual doorstep car rental pickups across all major sectors of Delhi NCR, as well as seamless intercity road trips to destinations all over India.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-800 bg-navy-50 px-2.5 py-1 rounded-md border border-navy-100">
                  {region.badge}
                </span>
                <MapPin className="w-4 h-4 text-gold-500" />
              </div>

              <h3 className="text-lg font-bold text-navy-950 font-serif mb-2">
                {region.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {region.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Callout */}
        <div className="mt-12 bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-gold-400">
              Need a Pickup from Another Location?
            </h4>
            <p className="text-sm text-slate-300">
              Contact us with your specific pickup and drop requirements. We regularly arrange custom route pickups across northern India.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm transition-colors shrink-0 shadow-md"
          >
            Check Pickup Availability: {BUSINESS_INFO.primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
