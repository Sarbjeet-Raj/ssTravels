export interface BookingFormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  journeyType: 'Local' | 'One-Way' | 'Round Trip' | 'Airport Transfer' | 'Other';
  pickupDate: string;
  pickupTime: string;
  passengers: string;
  vehicleCategory: string;
  additionalRequirements: string;
}

export interface VehicleCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  luggage: string;
  idealFor: string;
  imageUrl: string;
  features: string[];
  isIllustrative: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DestinationItem {
  name: string;
  state: string;
  approxDistance: string;
  highlights: string;
  imageUrl: string;
}
