
import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { ru: 'Теплый минимализм', en: 'Warm Minimalism' },
    residentialComplex: { ru: 'ЖК «Симфония»', en: 'The Symphony' },
    address: { ru: 'ул. Зорге, Москва', en: 'Zorge St, Moscow' },
    sqm: 85,
    category: 'Residential',
    description: { 
      ru: 'Интерьер в стиле мягкого минимализма с использованием натурального шпона и скрытого освещения. Особое внимание уделено эргономике и тактильным ощущениям материалов.', 
      en: 'Interior in the style of soft minimalism using natural veneer and hidden lighting. Special attention is paid to ergonomics and the tactile sensations of materials.' 
    },
    mainImage: 'public/projects/project1/6.webp',
    gallery: [
      'public/projects/project1/5.webp',
      'public/projects/project1/6.webp'
    ],
    pdfFiles: [
      {
        name: { ru: 'Техническая документация', en: 'Technical documentation' },
        url: ''
      }
    ],
    year: '2024'
  },
  {
    id: '2',
    title: { ru: 'Индустриальная эссенция', en: 'Industrial Essence' },
    residentialComplex: { ru: 'ЖК «Символ»', en: 'RC Symbol' },
    address: { ru: 'ул. Золоторожский Вал, Москва', en: 'Zolotorozhsky Val, Moscow' },
    sqm: 110,
    category: 'Residential',
    description: { 
      ru: 'Трансформация лофт-пространства в уютную семейную резиденцию. Бетонные текстуры в сочетании с мягким текстилем создают атмосферу защищенности.', 
      en: 'Transformation of a loft space into a cozy family residence. Concrete textures combined with soft textiles create an atmosphere of security.' 
    },
    mainImage: '/projects/project2/render1.jpg',
    gallery: [
      '/projects/project2/render1.jpg'
    ],
    pdfFiles: [
      {
        name: { ru: 'Технические чертежи', en: 'Technical Drawings' },
        url: '/projects/project2/technical-drawings.pdf'
      }
    ],
    year: '2023'
  },
  {
    id: '3',
    title: { ru: 'Технический регламент', en: 'Technical Standards' },
    residentialComplex: { ru: 'Проектная документация', en: 'Technical Documentation' },
    address: { ru: 'Различные объекты', en: 'Various Locations' },
    sqm: 0,
    category: 'Technical',
    description: { 
      ru: 'Пример полного пакета рабочих чертежей. Гарантированная точность для строительных бригад и детальная проработка узлов.', 
      en: 'An example of a full set of working drawings. Guaranteed precision for construction crews and detailed joint development.' 
    },
    mainImage: '/images/technical-main.jpg',
    gallery: [
      '/images/drawing-sample-1.jpg',
      '/images/drawing-sample-2.jpg'
    ],
    pdfFiles: [
      {
        name: { ru: 'Полный альбом PDF', en: 'Full PDF Album' },
        url: '/projects/technical/full-set.pdf'
      }
    ],
    year: '2022-2024'
  }
];
