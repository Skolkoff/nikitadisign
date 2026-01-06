
export interface Project {
  id: string;
  title: {
    ru: string;
    en: string;
  };
  residentialComplex: {
    ru: string;
    en: string;
  };
  address: {
    ru: string;
    en: string;
  };
  sqm: number;
  category: 'Residential' | 'Technical' | 'Commercial';
  description: {
    ru: string;
    en: string;
  };
  mainImage: string;
  gallery: string[];
  pdfFiles?: {
    name: { ru: string; en: string };
    url: string;
  }[];
  year: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}
