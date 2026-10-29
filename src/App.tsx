import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { PopularDestinations } from './components/PopularDestinations';
import { AboutSection } from './components/AboutSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';
import { ShieldCheck, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppQuickChatUrl } from './utils/whatsapp';

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState('Sedans (Comfortable)');

  const handleSelectVehicleForForm = (categoryName: string) => {
    setSelectedVehicle(categoryName);
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onScrollToForm={handleScrollToForm} />

        {/* Booking Form Anchor Section (Immediately below Hero) */}
        <section className="relative -mt-8 sm:-mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm initialVehicle={selectedVehicle} />
        </section>

        {/* Why Choose S&S Royal Tours Highlights Strip */}
        <section className="py-12 bg-white border-b border-slate-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Direct Owner Care</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Personalized scheduling &amp; transparent communication.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Sanitized &amp; Maintained</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Clean interiors, working AC, and comfortable rides.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Punctual Pickups</h4>
                  <p className="text-xs text-slate-500 mt-0.5">On-time airport drops and city doorstep pickups.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Instant WhatsApp Booking</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Quick replies on availability and fair estimates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <ServicesSection />

        {/* Our Cars Section */}
        <FleetSection onSelectVehicleForForm={handleSelectVehicleForForm} />

        {/* Outstation Highlights Section */}
        <PopularDestinations />

        {/* Service Areas Section */}
        <ServiceAreaSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Booking Call To Action Banner */}
        <section className="py-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white border-y border-gold-500/30 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Ready for Your Next Trip Across Delhi NCR or Outstation?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect directly with <strong>S&amp;S ROYAL TOURS &amp; TRAVELS</strong> now. We will provide instant vehicle availability and a fair price estimate for your route.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base transition-all shadow-royal"
              >
                <PhoneCall className="w-5 h-5 mr-2 text-navy-950" />
                <span>Call Now to Enquire: {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={getWhatsAppQuickChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Book Your Ride on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;
