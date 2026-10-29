import { BookingFormData } from '../types';

export const BUSINESS_INFO = {
  name: 'S&S ROYAL TOURS & TRAVELS',
  primaryPhone: '+91 9811746447',
  primaryPhoneRaw: '+919811746447',
  secondaryPhone: '+91 9956824335',
  secondaryPhoneRaw: '+919956824335',
  email: 'ssroyaltours099@gmail.com',
  whatsappNumber: '919811746447',
  primaryServiceAreas: [
    'Delhi NCR',
    'Greater Noida',
    'Noida',
    'Ghaziabad',
    'Gurugram',
    'Faridabad',
    'Outstation Destinations Across India'
  ],
};

/**
 * Builds the exact WhatsApp booking enquiry text as specified
 */
export function buildBookingWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    `Hello S&S ROYAL TOURS & TRAVELS, I would like to enquire about a car booking.`,
    `Name: ${data.name.trim() || 'Not specified'}`,
    `Phone: ${data.phone.trim() || 'Not specified'}`,
    `Pickup: ${data.pickup.trim() || 'Not specified'}`,
    `Destination: ${data.destination.trim() || 'Not specified'}`,
    `Journey Type: ${data.journeyType || 'Not specified'}`,
    `Date: ${data.pickupDate || 'Not specified'}`,
    `Time: ${data.pickupTime || 'Not specified'}`,
    `Passengers: ${data.passengers || 'Not specified'}`,
    `Vehicle Preference: ${data.vehicleCategory || 'Any suitable vehicle'}`,
    `Additional Requirements: ${data.additionalRequirements.trim() || 'None'}`,
    `Please share availability and the estimated fare.`
  ];

  return lines.join('\n');
}

/**
 * Generates direct WhatsApp URL with pre-filled message
 */
export function getWhatsAppBookingUrl(data: BookingFormData): string {
  const message = buildBookingWhatsAppMessage(data);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct WhatsApp URL for quick inquiry
 */
export function getWhatsAppQuickChatUrl(customMessage?: string): string {
  const text = customMessage || `Hello S&S ROYAL TOURS & TRAVELS, I would like to enquire about your car rental services.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates direct WhatsApp URL for vehicle check
 */
export function getWhatsAppVehicleInquiryUrl(vehicleName: string): string {
  const text = `Hello S&S ROYAL TOURS & TRAVELS, I would like to check availability and fare details for ${vehicleName}. Please share the details.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates direct WhatsApp URL for service inquiry
 */
export function getWhatsAppServiceInquiryUrl(serviceName: string): string {
  const text = `Hello S&S ROYAL TOURS & TRAVELS, I am interested in your "${serviceName}" service. Please share availability, vehicle options, and fare estimates.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
