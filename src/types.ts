export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  bullets: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryForm {
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}
