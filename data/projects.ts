
import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { ru: 'ЖК «Симфония»', en: 'The Symphony' },
    residentialComplex: { ru: 'ЖК «Симфония»', en: 'The Symphony' },
    address: { ru: 'УЛ. 2-Я ХУТОРСКАЯ Д. 34, Москва', en: '2nd Hutorskaya St, 34, Moscow' },
    sqm: 64,
    category: 'Residential',
    description: { 
      ru: 'Интерьер в стиле мягкого минимализма с использованием натурального шпона и скрытого освещения. Особое внимание уделено эргономике и тактильным ощущениям материалов.', 
      en: 'Interior in the style of soft minimalism using natural veneer and hidden lighting. Special attention is paid to ergonomics and the tactile sensations of materials.' 
    },
    mainImage: '/projects/project1/6.jpg',
    gallery: [
      '/projects/project1/1.jpg',
      '/projects/project1/2.jpg',
      '/projects/project1/3.jpg',
      '/projects/project1/4.jpg',
      '/projects/project1/5.jpg',
      '/projects/project1/6.jpg',
      '/projects/project1/7.jpg',
      '/projects/project1/8.jpg',
      '/projects/project1/9.jpg',
      '/projects/project1/10.jpg',
      '/projects/project1/11.jpg',
      '/projects/project1/12.jpg',
      '/projects/project1/13.jpg',
      '/projects/project1/14.jpg',
      '/projects/project1/15.jpg',
      '/projects/project1/16.jpg',
      '/projects/project1/17.jpg',
      '/projects/project1/18.jpg',
      '/projects/project1/19.jpg',
      '/projects/project1/20.jpg',
      '/projects/project1/21.jpg',
      '/projects/project1/22.jpg',
      '/projects/project1/23.jpg',
      '/projects/project1/24.jpg',
      '/projects/project1/25.jpg',
      '/projects/project1/26.jpg',
      '/projects/project1/27.jpg',
      '/projects/project1/28.jpg',
      '/projects/project1/29.jpg',
      '/projects/project1/30.jpg',
    ],
    pdfFiles: [
      {
        name: { ru: 'Техническая документация', en: 'Technical documentation' },
        url: '/projects/project1/Сифония.pdf'
      }
    ],
    year: '2024'
  },
  {
    id: '2',
    title: { ru: 'ЖК Аквилон Beside', en: 'Aquilon Beside' },
    residentialComplex: { ru: 'ЖК Аквилон Beside', en: 'Aquilon Beside' },
    address: { ru: 'Рязанский проспект д 2/2, Москва', en: 'Ryazanskoye pr., 2/2, Moscow' },
    sqm: 41,
    category: 'Residential',
    description: { 
      ru: 'Трансформация лофт-пространства в уютную семейную резиденцию. Бетонные текстуры в сочетании с мягким текстилем создают атмосферу защищенности.', 
      en: 'Transformation of a loft space into a cozy family residence. Concrete textures combined with soft textiles create an atmosphere of security.' 
    },
    mainImage: '/projects/project2/19.jpg',
    gallery: [
      '/projects/project2/1.jpg',
      '/projects/project2/2.jpg',
      '/projects/project2/3.jpg',
      '/projects/project2/4.jpg',
      '/projects/project2/5.jpg',
      '/projects/project2/6.jpg',
      '/projects/project2/7.jpg',
      '/projects/project2/8.jpg',
      '/projects/project2/9.jpg',
      '/projects/project2/10.jpg',
      '/projects/project2/11.jpg',
      '/projects/project2/12.jpg',
      '/projects/project2/13.jpg',
      '/projects/project2/14.jpg',
      '/projects/project2/15.jpg',
      '/projects/project2/16.jpg',
      '/projects/project2/17.jpg',
      '/projects/project2/18.jpg',
      '/projects/project2/19.jpg',
      '/projects/project2/20.jpg',
      '/projects/project2/21.jpg'
    ],
    pdfFiles: [
      {
        name: { ru: 'Техническая документация', en: 'Technical documentation' },
        url: '/projects/project2/Аквилон Бисайд.pdf'
      }
    ],
    year: '2025'
  },
  {
    id: '3',
    title: { ru: 'ЖК Кинетик', en: 'Kinetic' },
    residentialComplex: { ru: 'ЖК Кинетик', en: 'Kinetic' },
    address: { ru: 'Дмитровское шоссе Д. 75/7, Москва', en: 'Dmitrovskoye shosse D. 75/7, Moscow' },
    sqm: 66,
    category: 'Technical',
    description: { 
      ru: 'Пример полного пакета рабочих чертежей. Гарантированная точность для строительных бригад и детальная проработка узлов.', 
      en: 'An example of a full set of working drawings. Guaranteed precision for construction crews and detailed joint development.' 
    },
    mainImage: '/projects/project3/8.jpg',
    gallery: [
      '/projects/project3/1.jpg',
      '/projects/project3/2.jpg',
      '/projects/project3/3.jpg',
      '/projects/project3/4.jpg',
      '/projects/project3/5.jpg',
      '/projects/project3/6.jpg',
      '/projects/project3/7.jpg',
      '/projects/project3/8.jpg',
      '/projects/project3/9.jpg',
      '/projects/project3/10.jpg',
      '/projects/project3/11.jpg',
      '/projects/project3/12.jpg',
      '/projects/project3/13.jpg',
      '/projects/project3/14.jpg',
      '/projects/project3/15.jpg',
      '/projects/project3/16.jpg',
      '/projects/project3/17.jpg',
      '/projects/project3/18.jpg',
      '/projects/project3/19.jpg',
      '/projects/project3/20.jpg',
      '/projects/project3/21.jpg',
      '/projects/project3/22.jpg',
      '/projects/project3/23.jpg',
      '/projects/project3/24.jpg',
      '/projects/project3/25.jpg',
      '/projects/project3/26.jpg',
      '/projects/project3/27.jpg',
      '/projects/project3/28.jpg'
    ],
    pdfFiles: [
      {
        name: { ru: 'Полный альбом PDF', en: 'Full PDF Album' },
        url: '/projects/project3/Кинетик.pdf'
      }
    ],
    year: '2025'
  }
];
