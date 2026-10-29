import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  MapPin, 
  Navigation, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { BookingFormData } from '../types';
import { getWhatsAppBookingUrl, BUSINESS_INFO } from '../utils/whatsapp';

interface BookingFormProps {
  initialVehicle?: string;
  initialJourneyType?: BookingFormData['journeyType'];
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialVehicle = 'Sedans (Comfortable)', 
  initialJourneyType = 'Local' 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    journeyType: initialJourneyType,
    pickupDate: '',
    pickupTime: '',
    passengers: '1-4',
    vehicleCategory: initialVehicle,
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialVehicle) {
      setFormData(prev => ({ ...prev, vehicleCategory: initialVehicle }));
    }
  }, [initialVehicle]);

  React.useEffect(() => {
    if (initialJourneyType) {
      setFormData(prev => ({ ...prev, journeyType: initialJourneyType }));
    }
  }, [initialJourneyType]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Please provide the pickup address or city.';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please provide your destination.';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Please select a pickup date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Focus first error element
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(`field-${firstError}`);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Build the properly encoded WhatsApp URL
    const whatsappUrl = getWhatsAppBookingUrl(formData);

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden" id="booking-form">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-8 text-white relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold mb-2 border border-gold-500/30">
              <span>Instant WhatsApp Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Trip Details &amp; Booking Enquiry
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Submit your itinerary below. We will instantly open WhatsApp so you can review and chat directly with the owner for availability and fare estimates.
            </p>
          </div>
          <div className="hidden lg:flex items-center bg-navy-800/80 rounded-xl p-3 border border-navy-700 text-xs text-slate-300 space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>No upfront payment required to enquire</span>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6" noValidate>
        {/* Row 1: Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Customer Name */}
          <div>
            <label htmlFor="field-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="field-name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className={`w-full pl-10 pr-3.5 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.name}</p>}
          </div>

          {/* Customer Phone */}
          <div>
            <label htmlFor="field-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                id="field-phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="e.g. 9811XXXXXX"
                className={`w-full pl-10 pr-3.5 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pickup Location */}
          <div>
            <label htmlFor="field-pickup" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="field-pickup"
                value={formData.pickup}
                onChange={(e) => handleInputChange('pickup', e.target.value)}
                placeholder="e.g. Sector 62, Noida / IGI Airport T3"
                className={`w-full pl-10 pr-3.5 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.pickup ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
            </div>
            {errors.pickup && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.pickup}</p>}
          </div>

          {/* Destination */}
          <div>
            <label htmlFor="field-destination" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Destination <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-600">
                <Navigation className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="field-destination"
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
                placeholder="e.g. Agra / Jaipur / Connaught Place"
                className={`w-full pl-10 pr-3.5 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.destination ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
            </div>
            {errors.destination && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.destination}</p>}
          </div>
        </div>

        {/* Row 3: Journey Type & Vehicle Preference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Journey Type */}
          <div>
            <label htmlFor="field-journeyType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Journey Type <span className="text-red-500">*</span>
            </label>
            <select
              id="field-journeyType"
              value={formData.journeyType}
              onChange={(e) => handleInputChange('journeyType', e.target.value as BookingFormData['journeyType'])}
              className="w-full px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-600 focus:bg-white transition-all"
            >
              <option value="Local">Local City Travel (Delhi NCR)</option>
              <option value="One-Way">One-Way Intercity Drop</option>
              <option value="Round Trip">Round Trip / Tour Package</option>
              <option value="Airport Transfer">Airport Pickup or Drop</option>
              <option value="Other">Other / Long-Duration Rental</option>
            </select>
          </div>

          {/* Preferred Vehicle Category */}
          <div>
            <label htmlFor="field-vehicleCategory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Vehicle Category
            </label>
            <div className="relative">
              <select
                id="field-vehicleCategory"
                value={formData.vehicleCategory}
                onChange={(e) => handleInputChange('vehicleCategory', e.target.value)}
                className="w-full px-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-600 focus:bg-white transition-all"
              >
                <option value="Hatchbacks (Economical)">Hatchbacks — Economical City Travel</option>
                <option value="Sedans (Comfortable)">Sedans — Comfortable Everyday</option>
                <option value="SUVs and MUVs (Family & Outstation)">SUVs &amp; MUVs — Family &amp; Outstation</option>
                <option value="Premium & Luxury Cars (Special Occasions)">Premium &amp; Luxury — Special Occasions</option>
                <option value="Tempo Travellers (Group Journeys)">Tempo Travellers — Group Journeys</option>
                <option value="Any Available Vehicle">Any Suitable Vehicle Available</option>
              </select>
            </div>
          </div>

          {/* Number of Passengers */}
          <div>
            <label htmlFor="field-passengers" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Passengers
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Users className="w-4 h-4" />
              </div>
              <select
                id="field-passengers"
                value={formData.passengers}
                onChange={(e) => handleInputChange('passengers', e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-600 focus:bg-white transition-all"
              >
                <option value="1-2">1 - 2 Passengers</option>
                <option value="3-4">3 - 4 Passengers</option>
                <option value="5-7">5 - 7 Passengers (SUV/MUV)</option>
                <option value="8-12">8 - 12 Passengers (Large Group)</option>
                <option value="12+">12+ Passengers (Tempo Traveller)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 4: Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Pickup Date */}
          <div>
            <label htmlFor="field-pickupDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pickup Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                id="field-pickupDate"
                value={formData.pickupDate}
                onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                className={`w-full pl-10 pr-3.5 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.pickupDate ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
            </div>
            {errors.pickupDate && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.pickupDate}</p>}
          </div>

          {/* Pickup Time */}
          <div>
            <label htmlFor="field-pickupTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pickup Time (Approx.)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Clock className="w-4 h-4" />
              </div>
              <input
                type="time"
                id="field-pickupTime"
                value={formData.pickupTime}
                onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-600 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 5: Additional Requirements */}
        <div>
          <label htmlFor="field-additionalRequirements" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Additional Requirements (Optional)
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
              <FileText className="w-4 h-4" />
            </div>
            <textarea
              id="field-additionalRequirements"
              rows={3}
              value={formData.additionalRequirements}
              onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
              placeholder="e.g. Flight number for airport pickup, multiple stops, child seat, outstation night halt, or luggage specifics..."
              className="w-full pl-10 pr-3.5 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-600 focus:bg-white transition-all resize-y"
            ></textarea>
          </div>
        </div>

        {/* Notice & Submission Action */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-start space-x-2">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Submitting this form prepares your exact itinerary and opens WhatsApp with business number <strong className="text-navy-950">+{BUSINESS_INFO.whatsappNumber}</strong>. The owner will review and respond promptly.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-base font-bold rounded-xl shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 transition-all transform hover:-translate-y-0.5 shrink-0 focus:outline-none focus:ring-4 focus:ring-whatsapp/30"
            >
              <Send className="w-5 h-5 mr-2" />
              <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Enquiry via WhatsApp'}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
