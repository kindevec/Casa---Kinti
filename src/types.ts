export interface ProductItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
  category: string;
  benefits?: string[];
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  promoPrice?: string;
  description: string;
  category: 'ancestral' | 'educacion';
  icon: string;
  badge?: string;
  duration?: string;
  keyBenefits?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  area: 'ancestral' | 'flores' | 'educacion';
}

export interface PathStep {
  number: string;
  keyword: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface CertificationItem {
  title: string;
  institution: string;
  icon: string;
  highlight: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceOfInterest: string;
  tentativeDate: string;
  message: string;
}
